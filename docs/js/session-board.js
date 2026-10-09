// Pins are a sidecar: never migrate or rewrite existing NPC/location records on load.
const SESSION_PINS_KEY = 'npc-beta:session-board:v1:pins';
const validPins = value => value && ['npcs', 'locations'].every(key => validIds(value[key]) && new Set(value[key]).size === value[key].length);
const storedPins = readStorage(SESSION_PINS_KEY, { npcs: [], locations: [] }, validPins);
const sessionBoard = { query: '', tab: 'npcs', pins: { npcs: new Set(storedPins.npcs), locations: new Set(storedPins.locations) } };
const sessionMobile = window.matchMedia ? window.matchMedia('(max-width:760px)') : { matches: false };
function saveSessionPins() { writeStorage(SESSION_PINS_KEY, { npcs: [...sessionBoard.pins.npcs], locations: [...sessionBoard.pins.locations] }); }
function sessionNpcOrder(a, b) {
  if (state.sort === 'name') return a.name.localeCompare(b.name);
  if (state.sort === 'role') return a.professionLabel.localeCompare(b.professionLabel);
  const date = entry => state.characters.find(item => item.id === entry.id)?.publishedAt || entry.createdAt;
  return comparePublished({ publishedAt: date(a) }, { publishedAt: date(b) });
}
function boardEntries(kind) {
  const base = kind === 'npcs' ? sessionEntries().sort(sessionNpcOrder) : [...locationLibrary.instances];
  const query = sessionBoard.query.toLowerCase();
  return base.filter(entry => {
    const searchable = kind === 'npcs' ? `${entry.name} ${entry.professionLabel}` : `${entry.displayName} ${locationLibrary.templates?.find(item => item.id === entry.templateId)?.name || ''} ${locationLibrary.templates?.find(item => item.id === entry.templateId)?.description || ''}`;
    return searchable.toLowerCase().includes(query);
  }).sort((a, b) => Number(sessionBoard.pins[kind].has(b.id)) - Number(sessionBoard.pins[kind].has(a.id)));
}
function pinIcon() { return '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m8 3 8 0-1 6 4 4v2H5v-2l4-4-1-6ZM12 15v7"/></svg>'; }
function focusBoardControl(kind, id, action) {
  const container = kind === 'npcs' ? elements.grid : document.querySelector('#session-location-list');
  const row = [...container.querySelectorAll('.session-row')].find(item => item.dataset.entryId === id);
  const next = row?.querySelector(`[data-session-action="${action}"]`) || container.querySelector('.session-row-open, .empty-state button') || document.querySelector('#session-search');
  next.focus({ preventScroll: true });
}
function removeBoardEntry(kind, entry) {
  if (kind === 'locations') { locationLibrary.instances = locationLibrary.instances.filter(item => item.id !== entry.id); saveSessionLocations(); }
  else if (entry.library) { state.session.delete(entry.id); saveState(); }
  else { generator.records = generator.records.filter(item => item.id !== entry.id); writeStorage(GENERATOR_KEYS.records, generator.records); }
  if (sessionBoard.pins[kind].delete(entry.id)) saveSessionPins();
  render(); focusBoardControl(kind, entry.id, 'remove'); announce(`${kind === 'npcs' ? entry.name : entry.displayName || 'Location'} removed from session.`);
}
function boardRow(kind, entry) {
  const name = kind === 'npcs' ? entry.name : entry.displayName || 'Unnamed location';
  const pinned = sessionBoard.pins[kind].has(entry.id);
  const row = locationNode('article', `session-row ${kind === 'npcs' ? 'cast-entry' : 'session-location-card'}${pinned ? ' is-pinned' : ''}`);
  row.dataset.entryId = entry.id;
  if (kind === 'locations') row.dataset.instanceId = entry.id;
  const open = locationButton('', () => kind === 'npcs' ? openSessionNpc(entry) : openSessionLocation(entry), `View ${name} ${kind === 'npcs' ? 'profile' : 'details'}`);
  open.className = 'session-row-open'; open.dataset.sessionAction = 'open';
  if (kind === 'npcs') {
    if (entry.library) {
      const character = state.characters.find(item => item.id === entry.id), source = state.portraits[character?.portraitKey];
      const thumb = locationNode('div', 'session-npc-thumbnail');
      if (source) { const img = locationNode('img', 'session-portrait'); img.src = source; img.alt = ''; img.loading = 'lazy'; img.addEventListener('error', () => img.remove(), { once: true }); thumb.append(img); }
      else thumb.textContent = '?';
      open.append(thumb);
    } else open.append(generatedNpcVisual(entry));
  } else {
    const template = locationLibrary.templates?.find(item => item.id === entry.templateId);
    open.append(locationThumbnail(template || { settings: entry.settings, image: null }));
  }
  const copy = locationNode('div', 'session-row-copy');
  copy.append(locationNode('h3', '', name));
  if (pinned) { const indicator = locationNode('span', 'session-pin-indicator', 'Pinned'); copy.append(indicator); }
  const description = kind === 'npcs' ? entry.professionLabel : locationLibrary.templates?.find(item => item.id === entry.templateId)?.description || (locationLibrary.error ? 'Details unavailable — your notes are preserved.' : locationLibrary.templates ? 'Location template unavailable — your notes are preserved.' : 'Loading location description…');
  const meta = locationNode('p', 'session-row-description', description); meta.title = description; copy.append(meta); open.append(copy);
  const actions = locationNode('div', 'session-row-actions');
  const pin = locationButton('', () => {
    pinned ? sessionBoard.pins[kind].delete(entry.id) : sessionBoard.pins[kind].add(entry.id);
    saveSessionPins(); renderSessionBoard(); focusBoardControl(kind, entry.id, 'pin'); announce(`${name} ${pinned ? 'unpinned' : 'pinned'}.`);
  }, `${pinned ? 'Unpin' : 'Pin'} ${name}`);
  pin.innerHTML = pinIcon(); pin.className = 'session-pin-button'; pin.dataset.sessionAction = 'pin'; pin.setAttribute('aria-pressed', String(pinned)); pin.title = `${pinned ? 'Unpin' : 'Pin'} ${name}`;
  const remove = locationButton('Remove', () => removeBoardEntry(kind, entry), `Remove ${name} from session`); remove.dataset.sessionAction = 'remove';
  actions.append(pin, remove); row.append(open, actions); return row;
}
function boardEmpty(kind, hasEntries) {
  const type = kind === 'npcs' ? 'NPCs' : 'locations';
  const empty = locationNode('div', 'empty-state', hasEntries ? `No ${type} match “${sessionBoard.query}”.` : `No ${type} in this session yet.`);
  empty.append(locationButton(hasEntries ? 'Clear search' : `Browse ${kind === 'npcs' ? 'NPC Library' : 'Locations'}`, () => hasEntries ? clearSessionSearch() : setView(kind === 'npcs' ? 'library' : 'locations')));
  return empty;
}
function renderBoardLocations() {
  const entries = boardEntries('locations'), total = locationLibrary.instances.length;
  const list = document.querySelector('#session-location-list'); list.replaceChildren(...entries.map(entry => boardRow('locations', entry)));
  if (!entries.length) list.append(boardEmpty('locations', total > 0));
  document.querySelector('#session-location-count').textContent = sessionBoard.query ? `${entries.length} / ${total}` : `${total} ${total === 1 ? 'location' : 'locations'}`;
}
function renderSessionBoard() {
  const entries = boardEntries('npcs'), total = sessionEntries().length;
  elements.grid.replaceChildren(...entries.map(entry => boardRow('npcs', entry)));
  if (!entries.length) elements.grid.append(boardEmpty('npcs', total > 0));
  renderBoardLocations();
  const locationMatches = boardEntries('locations').length, locationsTotal = locationLibrary.instances.length;
  document.querySelector('#session-npc-count').textContent = sessionBoard.query ? `${entries.length} / ${total}` : `${total} ${total === 1 ? 'NPC' : 'NPCs'}`;
  document.querySelector('#session-tab-npc-count').textContent = sessionBoard.query ? `${entries.length}/${total}` : total;
  document.querySelector('#session-tab-location-count').textContent = sessionBoard.query ? `${locationMatches}/${locationsTotal}` : locationsTotal;
  document.querySelector('#session-clear-search').disabled = !sessionBoard.query;
  document.querySelector('#session-search-status').textContent = sessionMobile.matches ? `${sessionBoard.tab === 'npcs' ? entries.length : locationMatches} matching ${sessionBoard.tab === 'npcs' ? 'NPCs' : 'locations'}` : `${entries.length} matching NPCs and ${locationMatches} matching locations`;
  syncSessionTabs();
}
function syncSessionTabs() {
  for (const kind of ['npcs', 'locations']) {
    const tab = document.querySelector(`[data-session-tab="${kind}"]`), selected = sessionBoard.tab === kind;
    tab.setAttribute('aria-selected', String(selected)); tab.tabIndex = selected ? 0 : -1;
    const panel = document.querySelector(kind === 'npcs' ? '#session-npc-column' : '#session-locations');
    panel.hidden = state.view !== 'session' || (sessionMobile.matches && !selected);
    if (sessionMobile.matches) { panel.setAttribute('role', 'tabpanel'); panel.setAttribute('aria-labelledby', tab.id); }
    else { panel.removeAttribute('role'); panel.setAttribute('aria-labelledby', kind === 'npcs' ? 'session-npcs-title' : 'session-locations-title'); }
  }
}
function clearSessionSearch() { sessionBoard.query = ''; document.querySelector('#session-search').value = ''; renderSessionBoard(); document.querySelector('#session-search').focus(); }
document.querySelector('#session-search').addEventListener('input', event => { sessionBoard.query = event.target.value.trim(); renderSessionBoard(); });
document.querySelector('#session-clear-search').addEventListener('click', clearSessionSearch);
document.querySelectorAll('[data-session-tab]').forEach(tab => {
  tab.addEventListener('click', () => { sessionBoard.tab = tab.dataset.sessionTab; renderSessionBoard(); });
  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault(); sessionBoard.tab = event.key === 'Home' ? 'npcs' : event.key === 'End' ? 'locations' : sessionBoard.tab === 'npcs' ? 'locations' : 'npcs';
    renderSessionBoard(); document.querySelector(`[data-session-tab="${sessionBoard.tab}"]`).focus();
  });
});
sessionMobile.addEventListener?.('change', () => { if (state.view === 'session') renderSessionBoard(); });

function beginReferenceDetail(kind) {
  prepareDetail(kind, true);
  state.activeCharacter = null; elements.detailSave.hidden = true;
  elements.detail.querySelector('.detail-portrait').hidden = true;
  elements.detail.querySelector('.detail-facts').hidden = true;
  elements.detail.querySelector('.tag-list').replaceChildren();
}
function openSessionNpc(entry) {
  if (entry.library) { openDetail(state.characters.find(item => item.id === entry.id)); return; }
  beginReferenceDetail('Generated NPC');
  const visual = elements.detail.querySelector('.detail-extra-visual'); visual.hidden = false; visual.replaceChildren(generatedNpcVisual(entry));
  elements.detail.querySelector('h2').textContent = entry.name;
  elements.detail.querySelector('.detail-meta').textContent = [entry.professionLabel, entry.locationLabel].filter(Boolean).join(' · ');
  elements.detail.querySelector('.detail-summary').textContent = `${entry.name} is a generated ${entry.professionLabel.toLowerCase()} associated with ${entry.locationLabel}.`;
  showDetail();
}
function openSessionLocation(instance) {
  beginReferenceDetail('Location');
  const template = locationLibrary.templates?.find(item => item.id === instance.templateId);
  const visual = elements.detail.querySelector('.detail-extra-visual'); visual.hidden = false; visual.replaceChildren(locationThumbnail(template || { settings: instance.settings, image: null }));
  const title = elements.detail.querySelector('h2'); title.textContent = instance.displayName || 'Unnamed location';
  elements.detail.querySelector('.detail-meta').textContent = instance.settings.map(id => locationLibrary.labels?.settings[id] || id).join(' · ');
  elements.detail.querySelector('.detail-summary').textContent = template?.description || 'This location template is unavailable. Your personal name, notes and condition remain below.';
  const fields = elements.detail.querySelector('.detail-location-fields'); fields.hidden = false;
  fields.replaceChildren(...sessionLocationFields(instance, () => { title.textContent = instance.displayName || 'Unnamed location'; renderSessionBoard(); }));
  showDetail();
}
