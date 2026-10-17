// Location cast is a sidecar keyed by stable NPC IDs and session location instance IDs.
const SESSION_CAST_KEY = 'npc-beta:session-board:v1:location-cast';
const validLocationCast = value => value && (value.activeLocationId === null || typeof value.activeLocationId === 'string') && Array.isArray(value.links) && value.links.every(link => link && typeof link.npcId === 'string' && typeof link.locationId === 'string');
const sessionLocationCast = readStorage(SESSION_CAST_KEY, { activeLocationId: null, links: [] }, validLocationCast);
function saveLocationCast() { writeStorage(SESSION_CAST_KEY, sessionLocationCast); }
function reconcileLocationCast() {
  const before = JSON.stringify(sessionLocationCast), locations = new Set(locationLibrary.instances.map(entry => entry.id));
  const npcs = new Set(sessionEntries().map(entry => entry.id)), seen = new Set();
  sessionLocationCast.links = sessionLocationCast.links.filter(link => {
    const key = JSON.stringify([link.npcId, link.locationId]);
    if (!locations.has(link.locationId) || (state.characters.length && !npcs.has(link.npcId)) || seen.has(key)) return false;
    seen.add(key); return true;
  });
  if (!locations.has(sessionLocationCast.activeLocationId)) {
    const ordered = orderedSessionLocations().sort((a,b) => Number(sessionBoard.pins.locations.has(b.id)) - Number(sessionBoard.pins.locations.has(a.id)));
    sessionLocationCast.activeLocationId = ordered[0]?.id || null;
  }
  if (before !== JSON.stringify(sessionLocationCast)) saveLocationCast();
}
function activeSessionLocation() { return locationLibrary.instances.find(entry => entry.id === sessionLocationCast.activeLocationId); }
function setActiveSessionLocation(entry) {
  sessionLocationCast.activeLocationId = entry.id; saveLocationCast(); renderSessionBoard();
  focusBoardControl('locations', entry.id, 'active'); announce(`${entry.displayName || 'Unnamed location'} is now active.`);
}
function assignSessionNpc(entry) {
  const location = activeSessionLocation();
  if (!location || sessionLocationCast.links.some(link => link.npcId === entry.id && link.locationId === location.id)) return;
  sessionLocationCast.links.push({ npcId: entry.id, locationId: location.id }); saveLocationCast(); renderSessionBoard();
  focusBoardControl('npcs', entry.id, 'assign'); announce(`${entry.name} added to ${location.displayName || 'Unnamed location'}.`);
}
function locationCastSection(location) {
  const entries = sessionEntries().filter(entry => sessionLocationCast.links.some(link => link.locationId === location.id && link.npcId === entry.id));
  const section = locationNode('div', 'location-cast');
  const heading = locationNode('div', 'location-cast-heading');
  const add = locationNode('a', 'location-cast-add', 'Add NPCs');
  add.href = '#session-npc-column';
  add.setAttribute('aria-label', `Add NPCs to ${location.displayName || 'Unnamed location'}`);
  add.addEventListener('click', event => {
    event.preventDefault();
    sessionLocationCast.activeLocationId = location.id; saveLocationCast();
    sessionBoard.query = ''; document.querySelector('#session-search').value = '';
    renderSessionBoard();
    const target = document.querySelector('#session-npc-column');
    target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true });
    target.scrollIntoView({ behavior: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
    announce(`Choose NPCs to add to ${location.displayName || 'Unnamed location'}.`);
  });
  heading.append(locationNode('h4', '', 'At this location'), locationNode('span', 'session-scene-cast-count', `${entries.length} ${entries.length === 1 ? 'NPC' : 'NPCs'}`), add);
  section.append(heading);
  const list = locationNode('div', 'location-cast-icons');
  for (const entry of entries) {
    const item = locationNode('div', 'location-cast-member');
    const open = locationButton('', () => {
      setActiveSessionLocation(location);
      openSessionNpc(entry);
    }, `Open ${entry.name} profile`); open.className = 'location-cast-profile';
    const portrait = locationNode('span', 'location-cast-portrait', entry.name.trim().split(/\s+/).slice(0,2).map(part => part[0]).join(''));
    if (entry.library) {
      const character = state.characters.find(character => character.id === entry.id), source = state.portraits[character?.portraitKey];
      if (source) { const img = locationNode('img', ''); img.src = source; img.alt = ''; img.loading = 'lazy'; img.addEventListener('error', () => img.remove(), { once: true }); portrait.append(img); }
    } else { portrait.replaceChildren(generatedNpcVisual(entry)); }
    const identity = locationNode('span', 'session-scene-member-copy');
    identity.append(locationNode('span', 'location-cast-name', entry.name), locationNode('small', 'session-scene-member-role', entry.professionLabel || 'NPC'));
    open.append(portrait, identity); open.title = entry.name;
    const unassign = locationButton('−', () => {
      if (!window.confirm(`Remove ${entry.name} from ${location.displayName || 'Unnamed location'}? This NPC will remain in your session.`)) return;
      sessionLocationCast.links = sessionLocationCast.links.filter(link => !(link.npcId === entry.id && link.locationId === location.id));
      saveLocationCast(); renderSessionBoard();
      announce(`${entry.name} removed from ${location.displayName || 'Unnamed location'}; still in session.`);
    }, `Remove ${entry.name} from ${location.displayName || 'Unnamed location'}, keep NPC in session`);
    unassign.className = 'session-unassign-button';
    item.append(open, unassign); list.append(item);
  }
  if (!entries.length) list.append(locationNode('p', 'location-cast-empty', 'Choose an NPC from Tonight’s Cast to add here.'));
  section.append(list); return section;
}
// Pins are a sidecar: never migrate or rewrite existing NPC/location records on load.
const SESSION_LOCATION_ORDER_KEY = 'npc-beta:session-board:v1:location-order';
let sessionLocationOrder = readStorage(SESSION_LOCATION_ORDER_KEY, [], value => validIds(value) && new Set(value).size === value.length);
let sessionLocationDrag = null;
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
  const base = kind === 'npcs' ? sessionEntries().sort(sessionNpcOrder) : orderedSessionLocations();
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
  const next = (kind === 'locations' && ['pin', 'remove', 'up', 'down', 'active', 'details'].includes(action) ? row?.querySelector('.session-location-menu-trigger') : row?.querySelector(`[data-session-action="${action}"]`)) || container.querySelector('.session-row-open, .empty-state button') || document.querySelector('#session-search');
  next.focus({ preventScroll: true });
}
function removeBoardEntry(kind, entry) {
  if (kind === 'locations') {
    if (!window.confirm(`Remove "${entry.displayName || 'Unnamed location'}" from this session? Its notes and NPC assignments to this location will be removed. The NPCs will remain in your session.`)) return;
    sessionLocationOrder = sessionLocationOrder.filter(id => id !== entry.id); saveSessionLocationOrder();
    locationLibrary.instances = locationLibrary.instances.filter(item => item.id !== entry.id); saveSessionLocations();
  }
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
  const open = locationButton('', () => kind === 'npcs' ? openSessionNpc(entry) : setActiveSessionLocation(entry), kind === 'npcs' ? `View ${name} profile` : `Select ${name} as active location`);
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
  const meta = locationNode('p', 'session-row-description', description); meta.title = description; copy.append(meta);
  if (kind === 'locations') {
    const count = sessionLocationCast.links.filter(link => link.locationId === entry.id).length;
    copy.append(locationNode('span', 'session-location-npc-count', `${count} ${count === 1 ? 'NPC' : 'NPCs'}`));
    // Portrait chips are a read-only preview of location assignments. The full cast
    // and assignment/remove controls remain in the active scene and Tonight's Cast.
    const people = sessionEntries().filter(npc =>
      sessionLocationCast.links.some(link => link.locationId === entry.id && link.npcId === npc.id));
    if (people.length) {
      const strip = locationNode('span', 'session-location-npc-avatars');
      strip.setAttribute('aria-hidden', 'true');
      for (const npc of people.slice(0, 4)) {
        const circle = locationNode('span', 'session-location-npc-avatar');
        circle.title = npc.name;
        circle.textContent = npc.name.trim().split(/\s+/).slice(0, 2).map(part => part[0]).join('').toUpperCase();
        if (npc.library) {
          const character = state.characters.find(character => character.id === npc.id);
          const source = state.portraits[character?.portraitKey];
          if (source) {
            const image = locationNode('img', '');
            image.src = source; image.alt = ''; image.loading = 'lazy';
            image.addEventListener('error', () => image.remove(), { once: true });
            circle.append(image);
          }
        } else {
          circle.replaceChildren(generatedNpcVisual(npc));
        }
        strip.append(circle);
      }
      if (people.length > 4) strip.append(locationNode('span', 'session-location-npc-overflow', `+${people.length - 4}`));
      copy.append(strip);
    }
  }
  open.append(copy);
  const actions = locationNode(kind === 'locations' ? 'details' : 'div', 'session-row-actions');
  if (kind === 'locations') {
    const menu = locationNode('summary', 'session-location-menu-trigger', '⋯');
    menu.setAttribute('aria-label', `Manage ${name}: details, pin, reorder, or remove`);
    menu.setAttribute('title', `Manage ${name}`);
    actions.append(menu);
  }
  const pin = locationButton('', () => {
    const locations = kind === 'locations' ? orderedSessionLocations() : null;
    pinned ? sessionBoard.pins[kind].delete(entry.id) : sessionBoard.pins[kind].add(entry.id);
    if (locations) { sessionLocationOrder = [...locations.filter(item => item.id !== entry.id), entry].map(item => item.id); saveSessionLocationOrder(); }
    saveSessionPins(); renderSessionBoard(); focusBoardControl(kind, entry.id, 'pin'); announce(`${name} ${pinned ? 'unpinned' : 'pinned'}.`);
  }, `${pinned ? 'Unpin' : 'Pin'} ${name}`);
  pin.innerHTML = pinIcon(); pin.className = 'session-pin-button'; pin.dataset.sessionAction = 'pin'; pin.setAttribute('aria-pressed', String(pinned)); pin.title = `${pinned ? 'Unpin' : 'Pin'} ${name}`;
  const remove = locationButton('', () => removeBoardEntry(kind, entry), `Remove ${name} from session`); remove.dataset.sessionAction = 'remove'; remove.className = 'remove-icon-button'; remove.innerHTML = removeActionIcon(); remove.title = `Remove ${name} from session`;
  actions.append(pin, remove);
  if (kind === 'locations') {
    const reorder = locationReorderControls(entry);
    row.append(reorder.handle); actions.append(reorder.up, reorder.down);
    row.classList.add('session-location-order-row');
    configureLocationDrop(row, entry);
  }
  row.append(open, actions);
  if (kind === 'npcs') {
    const active = activeSessionLocation(), added = active && sessionLocationCast.links.some(link => link.npcId === entry.id && link.locationId === active.id);
    const assign = locationButton(added ? '✓ Added' : '＋ Add', () => assignSessionNpc(entry), active ? `${added ? 'Already assigned' : 'Assign'} ${name} ${added ? 'to' : 'to'} ${active.displayName || 'Unnamed location'}` : 'Add a location to assign NPCs');
    assign.replaceChildren();
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('viewBox', '0 0 24 24'); icon.setAttribute('aria-hidden', 'true');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', added ? 'm5 12 4 4L19 6' : 'M12 5v14M5 12h14'); icon.append(path);
    assign.append(icon, locationNode('span', '', added ? 'Added' : 'Add'));
    assign.dataset.sessionAction = 'assign'; assign.className = 'session-assign-button'; assign.disabled = !active || !!added; assign.title = active ? `${added ? 'Already added to' : 'Add to'} ${active.displayName || 'Unnamed location'}` : 'Add a location to assign NPCs'; row.append(assign);
  } else {
    const active = entry.id === sessionLocationCast.activeLocationId;
    row.classList.toggle('is-active-location', active);
    const activate = locationButton(active ? 'Active location' : 'Set active', () => setActiveSessionLocation(entry), active ? `${name} is the active location` : `Set ${name} as active location`);
    activate.dataset.sessionAction = 'active'; activate.className = 'session-active-button'; activate.setAttribute('aria-pressed', String(active));
    const details = locationButton('Details', () => openSessionLocation(entry), `Open ${name} details and additional fields`);
    details.className = 'session-location-details-button'; details.dataset.sessionAction = 'details';
    actions.append(activate, details);
  }
  return row;
}
function boardEmpty(kind, hasEntries) {
  const type = kind === 'npcs' ? 'NPCs' : 'locations';
  const empty = locationNode('div', 'empty-state', hasEntries ? `No ${type} match “${sessionBoard.query}”.` : `No ${type} in this session yet.`);
  empty.append(locationButton(hasEntries ? 'Clear search' : `Browse ${kind === 'npcs' ? 'NPC Library' : 'Locations'}`, () => hasEntries ? clearSessionSearch() : setView(kind === 'npcs' ? 'library' : 'locations')));
  return empty;
}
function renderBoardLocations() {
  reconcileLocationCast();
  sessionLocationDrag = null;
  document.querySelector('#session-location-reorder-note').hidden = !sessionBoard.query;
  const entries = boardEntries('locations'), total = locationLibrary.instances.length;
  const list = document.querySelector('#session-location-list'); list.replaceChildren(...entries.map(entry => boardRow('locations', entry)));
  if (!entries.length) list.append(boardEmpty('locations', total > 0));
  document.querySelector('#session-location-count').textContent = sessionBoard.query ? `${entries.length} / ${total}` : `${total} ${total === 1 ? 'location' : 'locations'}`;
}

// The scene is a view onto existing location instances and assignment sidecars.
function renderActiveSessionScene() {
  const panel = document.querySelector('#session-scene-content');
  const backdrop = document.querySelector('#session-scene-backdrop');
  const active = activeSessionLocation();
  backdrop.replaceChildren();
  backdrop.classList.remove('has-artwork');
  if (!active) {
    panel.replaceChildren(locationNode('p', 'session-scene-empty', 'Choose or add a location to begin your scene.'));
    return;
  }
  const template = locationLibrary.templates?.find(item => item.id === active.templateId);
  if (template?.image && safeLocationImage(template.image)) {
    const img = document.createElement('img');
    img.src = template.image; img.alt = ''; img.decoding = 'async';
    if (safeLocationImagePosition(template.imagePosition)) img.style.objectPosition = template.imagePosition;
    img.addEventListener('load', () => backdrop.classList.add('has-artwork'), { once: true });
    img.addEventListener('error', () => { backdrop.classList.remove('has-artwork'); img.remove(); }, { once: true });
    backdrop.append(img);
  }
  const label = locationNode('span', 'session-scene-active-label', 'Active location');
  const hero = locationNode('div', 'session-scene-hero');
  if (template?.image && safeLocationImage(template.image)) {
    const artwork = document.createElement('img');
    artwork.src = template.image;
    artwork.alt = template.imageAlt || '';
    artwork.loading = 'lazy';
    if (safeLocationImagePosition(template.imagePosition)) artwork.style.objectPosition = template.imagePosition;
    artwork.addEventListener('error', () => { artwork.remove(); hero.classList.add('no-artwork'); }, { once:true });
    hero.append(artwork);
  } else hero.classList.add('no-artwork');
  const heading = locationNode('h3', 'session-scene-name', active.displayName || 'Unnamed location');
  const description = locationNode('p', 'session-scene-description', template?.description || 'Scene description unavailable.');
  const fields = sessionLocationFields(active, () => {
    heading.textContent = active.displayName || 'Unnamed location';
    document.querySelector('#session-adding-to').textContent = `Adding to: ${active.displayName || 'Unnamed location'}`;
    const row = [...document.querySelectorAll('#session-location-list .session-row')].find(item => item.dataset.entryId === active.id);
    const name = row?.querySelector('h3');
    if (name) name.textContent = active.displayName || 'Unnamed location';
  });
  const notes = fields.find(field => field.querySelector('[data-location-field="notes"]'));
  const others = fields.filter(field => field !== notes);
  const advanced = locationNode('details', 'session-scene-advanced');
  const summary = locationNode('summary', '', 'Edit location name & condition');
  advanced.append(summary, ...others);
  const details = locationNode('div', 'session-scene-details');
  details.append(label, hero, heading, description, locationCastSection(active));
  if (notes) {
    notes.classList.add('session-scene-notes');
    details.append(notes);
  }
  details.append(advanced);
  panel.replaceChildren(details);
}

function renderSessionBoard() {
  reconcileLocationCast();
  const active = activeSessionLocation();
  document.querySelector('#session-adding-to').textContent = active ? `Adding to: ${active.displayName || 'Unnamed location'}` : 'Add a location to assign NPCs';
  const entries = boardEntries('npcs'), total = sessionEntries().length;
  elements.grid.replaceChildren(...entries.map(entry => boardRow('npcs', entry)));
  if (!entries.length) elements.grid.append(boardEmpty('npcs', total > 0));
  renderBoardLocations();
  renderActiveSessionScene();
  const locationMatches = boardEntries('locations').length, locationsTotal = locationLibrary.instances.length;
  document.querySelector('#session-overview-counts').textContent = `${locationsTotal} ${locationsTotal === 1 ? 'location' : 'locations'} · ${total} ${total === 1 ? 'NPC' : 'NPCs'}`;
  document.querySelector('#session-npc-count').textContent = sessionBoard.query ? `${entries.length} / ${total}` : `${total} ${total === 1 ? 'NPC' : 'NPCs'}`;
  document.querySelector('#session-tab-npc-count').textContent = sessionBoard.query ? `${entries.length}/${total}` : total;
  document.querySelector('#session-tab-location-count').textContent = sessionBoard.query ? `${locationMatches}/${locationsTotal}` : locationsTotal;
  document.querySelector('#session-clear-search').disabled = !sessionBoard.query;
  document.querySelector('#session-search-status').textContent = sessionMobile.matches ? `${sessionBoard.tab === 'npcs' ? entries.length : locationMatches} matching ${sessionBoard.tab === 'npcs' ? 'NPCs' : 'locations'}` : `${entries.length} matching NPCs and ${locationMatches} matching locations`;
  syncSessionTabs();
}
function syncSessionTabs() {
  const scene = document.querySelector('#session-active-scene');
  scene.hidden = state.view !== 'session';
  for (const kind of ['npcs', 'locations']) {
    const panel = document.querySelector(kind === 'npcs' ? '#session-npc-column' : '#session-locations');
    panel.hidden = state.view !== 'session'; panel.removeAttribute('role');
    panel.setAttribute('aria-labelledby', kind === 'npcs' ? 'session-npcs-title' : 'session-locations-title');
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
  if (entry.library) { openDetail(state.characters.find(item => item.id === entry.id)); showLocationRemoval(entry); return; }
  beginReferenceDetail('Generated NPC');
  const visual = elements.detail.querySelector('.detail-extra-visual'); visual.hidden = false; visual.replaceChildren(generatedNpcVisual(entry));
  elements.detail.querySelector('h2').textContent = entry.name;
  elements.detail.querySelector('.detail-meta').textContent = [entry.professionLabel, entry.locationLabel].filter(Boolean).join(' · ');
  elements.detail.querySelector('.detail-summary').textContent = `${entry.name} is a ${entry.professionLabel.toLowerCase()} at ${entry.locationLabel}.`;
  const dialogue = elements.detail.querySelector('.detail-dialogue');
  dialogue.textContent = generatorDialogue(entry); dialogue.hidden = !dialogue.textContent;
  showLocationRemoval(entry); showDetail();
}
function showLocationRemoval(entry) {
  const location = activeSessionLocation();
  if (!location || !sessionLocationCast.links.some(link => link.npcId === entry.id && link.locationId === location.id)) return;
  const button = locationButton('', () => {
    sessionLocationCast.links = sessionLocationCast.links.filter(link => !(link.npcId === entry.id && link.locationId === location.id));
    saveLocationCast(); renderSessionBoard(); closeDetail();
    focusBoardControl('locations', location.id, 'active');
    announce(`${entry.name} removed from ${location.displayName || 'Unnamed location'}.`);
  }, `Remove ${entry.name} from this active location: ${location.displayName || 'Unnamed location'}`);
  button.className = 'session-button detail-location-remove remove-icon-button'; button.innerHTML = removeActionIcon(); button.title = button.getAttribute('aria-label');
  elements.detail.append(button);
}
function openSessionLocation(instance) { openLocationDetail(instance.templateId, instance); }

// Manual order is a guarded sidecar; instance records and library sorting stay intact.
function orderedSessionLocations() {
  const rank = new Map(sessionLocationOrder.map((id, index) => [id, index]));
  return [...locationLibrary.instances].sort((a, b) => (rank.get(a.id) ?? Number.MAX_SAFE_INTEGER) - (rank.get(b.id) ?? Number.MAX_SAFE_INTEGER));
}
function saveSessionLocationOrder() { writeStorage(SESSION_LOCATION_ORDER_KEY, sessionLocationOrder); }
function sessionLocationGroup(id) {
  const pinned = sessionBoard.pins.locations.has(id);
  return orderedSessionLocations().filter(item => sessionBoard.pins.locations.has(item.id) === pinned);
}
function commitLocationGroup(group, movedId, action) {
  const ids = new Set(group.map(item => item.id)), ordered = orderedSessionLocations();
  let next = 0;
  sessionLocationOrder = ordered.map(item => ids.has(item.id) ? group[next++].id : item.id);
  saveSessionLocationOrder(); renderBoardLocations();
  const row = [...document.querySelectorAll('#session-location-list .session-row')].find(node => node.dataset.entryId === movedId);
  const preferred = row?.querySelector(`[data-session-action="${action}"]`);
  if (preferred && !preferred.disabled) preferred.focus({ preventScroll: true });
  else row?.querySelector('.session-row-open').focus({ preventScroll: true });
  const entry = group.find(item => item.id === movedId), index = group.findIndex(item => item.id === movedId);
  announce(`${entry.displayName || 'Unnamed location'} moved to position ${index + 1} of ${group.length} in ${sessionBoard.pins.locations.has(movedId) ? 'pinned' : 'unpinned'} locations.`);
}
function moveSessionLocation(id, direction) {
  if (sessionBoard.query || ![-1, 1].includes(direction)) return;
  const group = sessionLocationGroup(id), index = group.findIndex(item => item.id === id), destination = index + direction;
  if (index < 0 || destination < 0 || destination >= group.length) return;
  [group[index], group[destination]] = [group[destination], group[index]];
  commitLocationGroup(group, id, direction < 0 ? 'up' : 'down');
}
function locationReorderControls(entry) {
  const name = entry.displayName || 'Unnamed location', group = sessionLocationGroup(entry.id), index = group.findIndex(item => item.id === entry.id);
  const up = locationButton('↑', () => moveSessionLocation(entry.id, -1), `Move ${name} up`);
  const down = locationButton('↓', () => moveSessionLocation(entry.id, 1), `Move ${name} down`);
  for (const [button, action] of [[up, 'up'], [down, 'down']]) {
    button.dataset.sessionAction = action; button.title = action === 'up' ? 'Move up' : 'Move down';
    if (sessionBoard.query) button.setAttribute('aria-describedby', 'session-location-reorder-note');
  }
  up.disabled = !!sessionBoard.query || index === 0; down.disabled = !!sessionBoard.query || index === group.length - 1;
  const handle = locationButton('⠿', () => {}, `Drag ${name} to reorder within ${sessionBoard.pins.locations.has(entry.id) ? 'pinned' : 'unpinned'} locations. Use Move up or Move down for keyboard access.`);
  handle.className = 'session-location-drag'; handle.dataset.sessionAction = 'drag'; handle.tabIndex = -1;
  handle.disabled = !!sessionBoard.query || group.length < 2; handle.draggable = !handle.disabled && !sessionMobile.matches;
  handle.title = sessionBoard.query ? 'Clear search to reorder locations.' : 'Drag to reorder locations';
  handle.addEventListener('dragstart', event => {
    if (handle.disabled || sessionMobile.matches || sessionBoard.query) { event.preventDefault(); return; }
    sessionLocationDrag = entry.id; event.dataTransfer.effectAllowed = 'move'; event.dataTransfer.setData('text/plain', entry.id);
    handle.closest('.session-row').classList.add('is-dragging');
  });
  handle.addEventListener('dragend', () => { sessionLocationDrag = null; document.querySelectorAll('.is-dragging, .drop-before, .drop-after').forEach(node => node.classList.remove('is-dragging', 'drop-before', 'drop-after')); });
  return { handle, up, down };
}
function configureLocationDrop(row, entry) {
  const allowed = () => !sessionBoard.query && !sessionMobile.matches && sessionLocationDrag && sessionLocationDrag !== entry.id && sessionLocationGroup(entry.id).some(item => item.id === sessionLocationDrag);
  const after = event => event.clientY > row.getBoundingClientRect().top + row.getBoundingClientRect().height / 2;
  row.addEventListener('dragover', event => {
    if (!allowed()) return;
    event.preventDefault(); event.dataTransfer.dropEffect = 'move';
    row.classList.toggle('drop-after', after(event)); row.classList.toggle('drop-before', !after(event));
    const list = row.parentElement, bounds = list.getBoundingClientRect();
    if (event.clientY < bounds.top + 36) list.scrollTop -= 12;
    else if (event.clientY > bounds.bottom - 36) list.scrollTop += 12;
  });
  row.addEventListener('dragleave', event => { if (!row.contains(event.relatedTarget)) row.classList.remove('drop-before', 'drop-after'); });
  row.addEventListener('drop', event => {
    if (!allowed()) return;
    event.preventDefault(); event.stopPropagation();
    const id = sessionLocationDrag, group = sessionLocationGroup(id), moved = group.find(item => item.id === id), others = group.filter(item => item.id !== id);
    const target = others.findIndex(item => item.id === entry.id); others.splice(target + (after(event) ? 1 : 0), 0, moved);
    commitLocationGroup(others, id, 'drag');
  });
}
