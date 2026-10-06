// Template IDs are independent of generator settings and specific location profiles.
const SESSION_LOCATIONS_KEY = 'npc-beta:locations:v1:session';
const SETTING_IDS = ['village', 'town', 'city', 'wilderness', 'underground'];
const CONDITION_IDS = ['maintained', 'abandoned', 'ruined'];
const validSettings = value => Array.isArray(value) && value.length > 0 && value.every(id => SETTING_IDS.includes(id)) && new Set(value).size === value.length;
const validCondition = value => value === null || CONDITION_IDS.includes(value);
const validLocationInstance = value => value && typeof value.id === 'string' && value.id.startsWith('location-') && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.templateId) && typeof value.displayName === 'string' && typeof value.notes === 'string' && validSettings(value.settings) && validCondition(value.condition) && typeof value.createdAt === 'string';
const locationLibrary = {
  templates: null, labels: null, loading: null, error: false,
  query: '', settings: new Set(), conditions: new Set(),
  instances: readStorage(SESSION_LOCATIONS_KEY, [], value => Array.isArray(value) && value.every(validLocationInstance) && new Set(value.map(item => item.id)).size === value.length),
};
function validateLocationData(templates, labels) {
  if (!labels || !SETTING_IDS.every(id => typeof labels.settings?.[id] === 'string') || !CONDITION_IDS.every(id => typeof labels.conditions?.[id] === 'string')) throw new Error('Invalid filter labels');
  if (!Array.isArray(templates) || new Set(templates.map(item => item.id)).size !== templates.length || !templates.every(item => item && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.id) && typeof item.name === 'string' && item.name.trim() && typeof item.description === 'string' && item.description.trim() && validSettings(item.settings) && validCondition(item.condition) && (item.image === null || safeLocationImage(item.image)) && typeof item.imageAlt === 'string')) throw new Error('Invalid location templates');
}
function safeLocationImage(path) {
  return typeof path === 'string' && /^(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_.-]+\.(?:svg|png|jpe?g|webp|avif)$/i.test(path) && !path.split('/').includes('..');
}
async function ensureLocations() {
  if (locationLibrary.templates) { renderLocations(); return; }
  if (locationLibrary.loading) return locationLibrary.loading;
  locationLibrary.error = false; renderLocations();
  locationLibrary.loading = (async () => {
    try {
      const responses = await Promise.all(['templates', 'labels'].map(file => fetch(`data/locations/${file}.json`)));
      if (responses.some(response => !response.ok)) throw new Error('Location request failed');
      const [templates, labels] = await Promise.all(responses.map(response => response.json()));
      validateLocationData(templates, labels);
      locationLibrary.templates = templates; locationLibrary.labels = labels;
      renderLocationFilters(); renderLocations();
      if (state.view === "session") renderSessionLocations();
    } catch { locationLibrary.error = true; renderLocations(); }
    finally { locationLibrary.loading = null; }
  })();
  return locationLibrary.loading;
}
function visibleLocations() {
  const query = locationLibrary.query.toLowerCase();
  return (locationLibrary.templates || []).filter(item => `${item.name} ${item.description}`.toLowerCase().includes(query) && (!locationLibrary.settings.size || item.settings.some(id => locationLibrary.settings.has(id))) && (!locationLibrary.conditions.size || locationLibrary.conditions.has(item.condition)));
}
function locationNode(tag, className, text) {
  const node = document.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = text; return node;
}
function locationButton(text, callback, label) {
  const button = locationNode('button', '', text); button.type = 'button'; button.onclick = callback; if (label) button.setAttribute('aria-label', label); return button;
}
function renderLocationFilters() {
  for (const [group, selector] of [['settings', '#setting-options'], ['conditions', '#condition-options']]) {
    const container = document.querySelector(selector); container.replaceChildren();
    for (const [id, label] of Object.entries(locationLibrary.labels[group])) {
      const wrapper = locationNode('label', 'filter-option'); const input = document.createElement('input'); input.type = 'checkbox'; input.value = id; input.dataset.locationFilter = group; input.checked = locationLibrary[group].has(id);
      wrapper.append(input, locationNode('span', '', label)); container.append(wrapper);
    }
  }
}
function clearLocationFilters() {
  locationLibrary.query = ''; locationLibrary.settings.clear(); locationLibrary.conditions.clear(); document.querySelector('#location-search').value = '';
  if (locationLibrary.labels) renderLocationFilters(); renderLocations();
}
function locationThumbnail(template) {
  const wrap = locationNode('div', 'location-thumbnail');
  // An original inline landscape keeps all templates useful without binary assets.
  wrap.innerHTML = '<svg aria-hidden="true" viewBox="0 0 320 180"><circle cx="244" cy="43" r="17"/><path d="m0 150 80-84 64 60 51-33 125 70M0 169h320M42 140v-32l26-20 26 20v32M60 140v-21h16v21M169 137l22-55 23 55M182 106h19"/></svg>';
  wrap.classList.add(`setting-${template.settings[0]}`);
  if (template.image && safeLocationImage(template.image)) {
    const img = document.createElement('img'); img.src = template.image; img.alt = template.imageAlt; img.loading = 'lazy'; img.addEventListener('error', () => img.remove(), { once: true }); wrap.append(img);
  }
  return wrap;
}
function renderLocations() {
  const grid = document.querySelector('#location-grid'); const note = document.querySelector('#location-results-note'); grid.replaceChildren();
  if (!locationLibrary.templates) {
    note.textContent = locationLibrary.error ? 'Locations could not be loaded.' : 'Loading locations…';
    if (locationLibrary.error) { const error = locationNode('div', 'empty-state', 'Check your connection and try loading the locations again.'); error.append(locationButton('Try again', ensureLocations)); grid.append(error); }
    return;
  }
  const templates = visibleLocations(); note.textContent = `${templates.length} of ${locationLibrary.templates.length} locations`;
  if (!templates.length) { const empty = locationNode('div', 'empty-state', 'No locations match your search and filters.'); empty.append(locationButton('Clear filters', clearLocationFilters)); grid.append(empty); return; }
  for (const template of templates) {
    const card = locationNode('article', 'location-card'); card.dataset.templateId = template.id;
    const content = locationNode('div', 'location-card-content'); const chips = locationNode('div', 'location-chips');
    template.settings.forEach(id => chips.append(locationNode('span', 'setting-chip', locationLibrary.labels.settings[id])));
    if (template.condition) chips.append(locationNode('span', `condition-chip condition-${template.condition}`, locationLibrary.labels.conditions[template.condition]));
    content.append(locationNode('h2', '', template.name), locationNode('p', 'location-description', template.description), chips, locationButton('Add to Session', () => addSessionLocation(template), `Add ${template.name} to session`));
    card.append(locationThumbnail(template), content); grid.append(card);
  }
}
function saveSessionLocations() { writeStorage(SESSION_LOCATIONS_KEY, locationLibrary.instances); }
function addSessionLocation(template) {
  locationLibrary.instances.push({ id: `location-${crypto.randomUUID()}`, templateId: template.id, displayName: template.name, notes: '', settings: [...template.settings], condition: template.condition, createdAt: new Date().toISOString() });
  saveSessionLocations(); renderSessionLocations(); announce(`${template.name} added to session.`);
}
function renderSessionLocations() {
  document.querySelector('#session-location-count').textContent = `${locationLibrary.instances.length} ${locationLibrary.instances.length === 1 ? 'location' : 'locations'}`;
  const container = document.querySelector('#session-location-list'); container.replaceChildren();
  if (!locationLibrary.instances.length) {
    const empty = locationNode('div', 'empty-state', 'Add a location from Locations to plan your session.'); empty.append(locationButton('Browse Locations', () => setView('locations'))); container.append(empty); return;
  }
  for (const instance of locationLibrary.instances) {
    const card = locationNode('article', 'session-location-card'); card.dataset.instanceId = instance.id;
    const template = locationLibrary.templates?.find(item => item.id === instance.templateId);
    if (template) card.append(locationThumbnail(template));
    const title = locationNode('h3', '', instance.displayName || 'Unnamed location'); card.append(title);
    const controls = [['displayName', 'Location name', 'input'], ['notes', 'Personal notes', 'textarea'], ['condition', 'Condition', 'select']];
    for (const [field, label, tag] of controls) {
      const wrapper = locationNode('div', 'session-location-field'); const control = document.createElement(tag); control.id = `${instance.id}-${field}`; control.dataset.locationField = field;
      const labelNode = locationNode('label', '', label); labelNode.htmlFor = control.id;
      if (field === 'condition') { control.append(new Option('No classification', '')); CONDITION_IDS.forEach(id => control.append(new Option(locationLibrary.labels?.conditions[id] || id[0].toUpperCase() + id.slice(1), id))); control.value = instance.condition || ''; }
      else { if (tag === 'input') control.type = 'text'; else control.rows = 3; control.value = instance[field]; }
      control.addEventListener('input', () => {
        instance[field] = field === 'condition' ? control.value || null : control.value;
        if (field === 'displayName') title.textContent = instance.displayName || 'Unnamed location';
        saveSessionLocations();
      });
      control.addEventListener('change', () => announce('Session location updated.'));
      wrapper.append(labelNode, control); card.append(wrapper);
    }
    card.append(locationButton('Remove', () => {
      locationLibrary.instances = locationLibrary.instances.filter(item => item.id !== instance.id); saveSessionLocations(); renderSessionLocations(); announce('Location removed from session.');
      const next = container.querySelector('input, button'); if (next) next.focus();
    }, `Remove ${instance.displayName || 'unnamed location'} from session`));
    container.append(card);
  }
}
document.querySelector('#location-search').addEventListener('input', event => { locationLibrary.query = event.target.value.trim(); renderLocations(); });
document.querySelector('#location-filter-panel').addEventListener('change', event => {
  const target = event.target; if (!target.matches('[data-location-filter]')) return;
  const set = locationLibrary[target.dataset.locationFilter]; target.checked ? set.add(target.value) : set.delete(target.value); renderLocations();
});
document.querySelector('#clear-location-filters').addEventListener('click', clearLocationFilters);
document.querySelector('#location-filter-toggle').addEventListener('click', event => {
  const open = document.querySelector('#location-filter-panel').classList.toggle('open'); event.currentTarget.setAttribute('aria-expanded', String(open));
});
