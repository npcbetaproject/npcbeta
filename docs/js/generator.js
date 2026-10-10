// Versioned personal data never replaces the original library ID collections.
const GENERATOR_KEYS = { result: 'npc-beta:generator:v1:state', records: 'npc-beta:generator:v1:session' };
const unreadableKeys = new Set();
function warnStorage(message) {
  const warning = document.querySelector('#storage-warning');
  warning.hidden = false; warning.textContent = message;
}
function readStorage(key, fallback, validate) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    const value = JSON.parse(raw);
    if (!validate(value)) throw new Error('Invalid stored data');
    return value;
  } catch (error) {
    unreadableKeys.add(key);
    warnStorage('Some browser data could not be read. The tool remains usable; unreadable data has not been overwritten.');
    return fallback;
  }
}
function writeStorage(key, value) {
  if (unreadableKeys.has(key)) { warnStorage('Browser data could not be read. Changes remain in this tab and cannot be saved without replacing unreadable data.'); return; }
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch { warnStorage('Browser storage is unavailable or full. Changes remain usable in this tab but cannot be saved.'); }
}
const validIds = value => Array.isArray(value) && value.every(id => typeof id === 'string');
const validResult = value => value && ['name', 'locationId', 'professionId'].every(key => typeof value[key] === 'string');
const validRecord = value => validResult(value) && ['id', 'locationLabel', 'professionLabel', 'createdAt'].every(key => typeof value[key] === 'string') && value.id.startsWith('generated-');
const generator = {
  data: null, names: null, loading: null,
  ...readStorage(GENERATOR_KEYS.result, { current: null, previous: null }, value => value && (value.current === null || validResult(value.current)) && (value.previous === null || validResult(value.previous))),
  records: readStorage(GENERATOR_KEYS.records, [], value => Array.isArray(value) && value.every(validRecord)),
};
function chooseDifferent(values, previous) {
  const alternatives = values.filter(value => value !== previous);
  const choices = alternatives.length ? alternatives : values;
  return choices[Math.floor(Math.random() * choices.length)];
}
function makeName(previous) {
  const keys = ['firstPrefix', 'firstSuffix', 'lastPrefix', 'lastSuffix'];
  const parts = keys.map(key => chooseDifferent(generator.names[key]));
  const full = () => parts[0] + parts[1] + ' ' + parts[2] + parts[3];
  if (full() === previous) {
    const index = keys.findIndex(key => generator.names[key].length > 1);
    if (index >= 0) parts[index] = chooseDifferent(generator.names[keys[index]], parts[index]);
  }
  return full();
}
function validateGeneratorData(data, names) {
  const stableId = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  for (const list of [data.locations, data.professions]) {
    if (!Array.isArray(list) || !list.length || new Set(list.map(item => item.id)).size !== list.length || !list.every(item => stableId.test(item.id) && typeof item.label === 'string')) throw new Error('Invalid generator options');
  }
  const ids = new Set(data.professions.map(item => item.id));
  if (!data.locations.every(item => Array.isArray(item.professionIds) && item.professionIds.length && item.professionIds.every(id => ids.has(id)))) throw new Error('Invalid profession mapping');
  if (!['firstPrefix', 'firstSuffix', 'lastPrefix', 'lastSuffix'].every(key => Array.isArray(names[key]) && names[key].length && names[key].every(part => typeof part === 'string' && part.length))) throw new Error('Invalid name parts');
}
function supportedResult(result) {
  const location = generator.data.locations.find(item => item.id === result?.locationId);
  if (!location?.professionIds.includes(result?.professionId)) return false;
  const [first, last, ...extra] = result.name.split(' ');
  const matches = (word, prefixes, suffixes) => prefixes.some(prefix => suffixes.some(suffix => prefix + suffix === word));
  return !extra.length && matches(first, generator.names.firstPrefix, generator.names.firstSuffix) && matches(last, generator.names.lastPrefix, generator.names.lastSuffix);
}
async function ensureGenerator() {
  if (generator.data) { renderGenerator(); return; }
  if (generator.loading) return generator.loading;
  generator.loading = (async () => {
    try {
      const responses = await Promise.all(['options', 'names'].map(file => fetch(`data/generator/${file}.json`)));
      if (responses.some(response => !response.ok)) throw new Error('Data request failed');
      const [data, names] = await Promise.all(responses.map(response => response.json()));
      validateGeneratorData(data, names); generator.data = data; generator.names = names;
      if (!supportedResult(generator.previous)) generator.previous = null;
      if (!supportedResult(generator.current)) { generator.current = null; rollGenerator('all'); }
      renderGenerator();
      document.querySelector('#generator-error').hidden = true;
    } catch {
      const error = document.querySelector('#generator-error'); error.hidden = false;
      error.textContent = 'Generator data could not load. Check your connection and reopen Name Generator to try again.';
    } finally { generator.loading = null; }
  })();
  return generator.loading;
}
function saveGenerator() { writeStorage(GENERATOR_KEYS.result, { current: generator.current, previous: generator.previous }); }
function rollGenerator(field, manualValue) {
  if (!generator.data) return;
  const previous = generator.current;
  const next = { ...previous };
  if (field === 'all' || field === 'name') next.name = makeName(previous?.name);
  if (field === 'all' || field === 'location') {
    next.locationId = manualValue || chooseDifferent(generator.data.locations.map(item => item.id), previous?.locationId);
    next.professionId = chooseDifferent(generator.data.locations.find(item => item.id === next.locationId).professionIds, previous?.professionId);
  }
  if (field === 'profession') next.professionId = manualValue || chooseDifferent(generator.data.locations.find(item => item.id === next.locationId).professionIds, previous?.professionId);
  if (JSON.stringify(previous) === JSON.stringify(next)) { announce('No alternative is available.'); return; }
  generator.previous = previous ? { ...previous } : null; generator.current = next;
  saveGenerator(); renderGenerator(); announce(field === 'location' ? 'Location and profession updated.' : 'NPC updated.');
}
function dismissAnnouncement() {
  clearTimeout(announce.timer);
  clearTimeout(announce.dismissTimer);
  const feedback = document.querySelector('#action-feedback');
  feedback.textContent = '';
  feedback.removeAttribute('tabindex');
  feedback.removeAttribute('title');
}
const actionFeedback = document.querySelector('#action-feedback');
actionFeedback.addEventListener('click', dismissAnnouncement);
actionFeedback.addEventListener('keydown', event => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    dismissAnnouncement();
  }
});
function announce(message) {
  dismissAnnouncement();
  announce.timer = setTimeout(() => {
    actionFeedback.textContent = message;
    actionFeedback.setAttribute('tabindex', '0');
    actionFeedback.title = 'Tap or click to dismiss';
    announce.dismissTimer = setTimeout(dismissAnnouncement, 5000);
  }, 20);
}
async function copyName(name) {
  try { await navigator.clipboard.writeText(name); announce('Name copied.'); }
  catch { announce('Could not copy automatically. Select the name and copy it manually.'); }
}
function resultSignature(value) { return JSON.stringify([value.name, value.locationId, value.professionId]); }
function renderGenerator() {
  if (!generator.data || !generator.current) return;
  const current = generator.current;
  document.querySelector('#generator-visual-preview').replaceChildren(generatedNpcVisual(current));
  document.querySelector('#generator-controls').hidden = false;
  document.querySelector('#generated-name').textContent = current.name;
  const fill = (selector, entries, value) => {
    const select = document.querySelector(selector); select.replaceChildren(...entries.map(entry => new Option(entry.label, entry.id))); select.value = value;
  };
  fill('#generator-location', generator.data.locations, current.locationId);
  const location = generator.data.locations.find(item => item.id === current.locationId);
  fill('#generator-profession', location.professionIds.map(id => generator.data.professions.find(item => item.id === id)), current.professionId);
  document.querySelector('#undo-generator').disabled = !generator.previous;
  const added = generator.records.some(record => resultSignature(record) === resultSignature(current));
  document.querySelector('#add-generated').disabled = added;
  document.querySelector('#add-generated').textContent = added ? 'Added to session' : 'Add to Session';
}
function sessionEntries() {
  return [...state.characters.filter(character => state.session.has(character.id)).map(character => ({ id: character.id, name: character.name, professionLabel: character.role, locationLabel: (character.locationFit || []).join(', '), library: true })), ...generator.records];
}
function visibleSessionEntries() {
  return sessionEntries().filter(entry => {
    const character = state.characters.find(item => item.id === entry.id);
    const searchable = character ? [character.name, character.role, character.subtitle, ...character.tags].join(' ') : [entry.name, entry.professionLabel, entry.locationLabel].join(' ');
    const locations = character?.locationFitCategoryIds || state.locationFitConfig?.generatorLocationCategoryIds[entry.locationId] || [];
    return searchable.toLowerCase().includes(state.query.toLowerCase()) && matchesRoleCategories(character?.roleCategoryIds || state.roleConfig?.generatorProfessionCategoryIds[entry.professionId] || []) && matchesLocationFitCategories(locations);
  }).sort((a, b) => (state.sort === 'recent' ? comparePublished({publishedAt: state.characters.find(item => item.id === a.id)?.publishedAt || a.createdAt}, {publishedAt: state.characters.find(item => item.id === b.id)?.publishedAt || b.createdAt}) : state.sort === 'role' ? a.professionLabel.localeCompare(b.professionLabel) : a.name.localeCompare(b.name)));
}
function renderCast(container, entries = sessionEntries()) {
  container.replaceChildren();
  if (!entries.length) { const empty = document.createElement('p'); empty.className = 'empty-state'; empty.textContent = sessionEntries().length ? 'No session NPCs match those filters.' : 'Add an NPC to build tonight’s cast.'; container.append(empty); return; }
  entries.forEach(entry => {
    const card = document.createElement('article'); card.className = 'cast-entry';
    if (entry.library) {
      const character = state.characters.find(item => item.id === entry.id);
      const source = character && state.portraits[character.portraitKey];
      if (source) {
        const portrait = document.createElement('img');
        portrait.className = container.id === 'character-grid' ? 'session-portrait' : 'cast-portrait';
        portrait.classList.toggle('portrait-contain', character.portraitFit === 'contain'); portrait.src = source;
        portrait.alt = character.imageAlt; portrait.loading = 'lazy';
        portrait.addEventListener('error', () => portrait.remove(), { once: true });
        card.append(portrait);
      }
    }
    if (!entry.library) card.append(generatedNpcVisual(entry));
    const heading = document.createElement('h3');
    if (entry.library) { const open = document.createElement('button'); open.type = 'button'; open.className = 'cast-profile'; open.textContent = entry.name; open.onclick = () => openDetail(state.characters.find(character => character.id === entry.id)); heading.append(open); }
    else heading.textContent = entry.name;
    const meta = document.createElement('p'); meta.textContent = [entry.professionLabel, entry.locationLabel].filter(Boolean).join(' · ');
    const actions = document.createElement('div'); actions.className = 'cast-actions';
    for (const action of ['Copy', 'Remove']) { const button = document.createElement('button'); button.type = 'button'; button.className = 'generator-icon-button'; button.innerHTML = action === 'Copy' ? '<svg aria-hidden="true" viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h4"/></svg>' : '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7M14 10v7"/></svg>'; button.title = `${action} ${entry.name}`; button.setAttribute('aria-label', `${action} ${entry.name}`); button.onclick = () => {
      if (action === 'Copy') { copyName(entry.name); return; }
      if (entry.library) { state.session.delete(entry.id); saveState(); }
      else { generator.records = generator.records.filter(record => record.id !== entry.id); writeStorage(GENERATOR_KEYS.records, generator.records); }
      render(); if (state.activeCharacter) updateDetailActions(); announce('NPC removed from session.');
    }; actions.append(button); }
    card.append(heading, meta, actions); container.append(card);
  });
}
function renderCompanion() { renderCast(document.querySelector('#cast-list')); document.querySelector('#cast-count').textContent = `${sessionEntries().length} NPCs`; if (generator.data) renderGenerator(); }
document.querySelectorAll('[data-roll]').forEach(button => button.addEventListener('click', () => rollGenerator(button.dataset.roll)));
document.querySelector('#generator-location').addEventListener('change', event => rollGenerator('location', event.target.value));
document.querySelector('#generator-profession').addEventListener('change', event => rollGenerator('profession', event.target.value));
document.querySelector('#copy-name').addEventListener('click', () => copyName(generator.current.name));
document.querySelector('#undo-generator').addEventListener('click', () => { if (!generator.previous) return; generator.current = generator.previous; generator.previous = null; saveGenerator(); renderGenerator(); announce('Last change undone.'); });
function addGeneratedToSession() {
  const current = generator.current;
  if (!current || generator.records.some(record => resultSignature(record) === resultSignature(current))) return;
  const location = generator.data.locations.find(item => item.id === current.locationId);
  const profession = generator.data.professions.find(item => item.id === current.professionId);
  generator.records.push({ ...current, id: `generated-${crypto.randomUUID()}`, locationLabel: location.label, professionLabel: profession.label, createdAt: new Date().toISOString() });
  writeStorage(GENERATOR_KEYS.records, generator.records); render(); announce('Added to session');
}
document.querySelector('#add-generated').addEventListener('click', addGeneratedToSession);
document.querySelector('#add-roll-next').addEventListener('click', () => {
  if (!generator.data || !generator.current) return;
  const name = generator.current.name;
  addGeneratedToSession();
  rollGenerator('all');
  announce(`${name} is in Session. Next NPC generated.`);
});
