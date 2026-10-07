// Generator settings differ from location-template IDs; each has a reusable location image.
const GENERATED_LOCATION_TEMPLATES = Object.freeze({
  village: 'market-square', 'city-street': 'market-square', 'tavern-inn': 'tavern',
  marketplace: 'market-square', 'harbor-docks': 'docks-ferry-landing', ship: 'ship',
  'church-shrine': 'chapel', monastery: 'chapel', 'noble-estate': 'private-residence',
  'castle-keep': 'gatehouse', 'watchhouse-prison': 'watchhouse', 'farm-ranch': 'stables',
  forest: 'forest-clearing', 'road-caravan': 'roadside-campsite', 'mine-quarry': 'mine-quarry',
  'workshop-forge': 'blacksmiths-forge', 'academy-library': 'academy-library', 'wizards-tower': 'wizards-tower',
  'graveyard-crypt': 'burial-vault', ruins: 'overgrown-homestead', 'cave-dungeon': 'rock-shelter',
  'military-camp': 'barracks', 'traveling-carnival': 'traveling-carnival',
});
// Stable profession IDs share the existing library role icons where appropriate.
const PROFESSION_ICON_ROLES = Object.freeze(Object.fromEntries([
  ['Adventurer', ['adventurer','mercenary','guard','soldier','commander','bodyguard','watch-captain','jailer','bounty-hunter','pirate','explorer','treasure-hunter','scout']],
  ['Apothecary', ['healer','surgeon','alchemist']],
  ['Priest', ['priest','acolyte','monk','pilgrim','cultist','mage','enchanter','diviner','fortune-teller']],
  ['Smuggler', ['smuggler','thief','pickpocket','bandit','grave-robber','actor','street-performer','acrobat']],
  ['Ranger', ['farmer','shepherd','herbalist','gardener','rancher','beekeeper','hunter','trapper','forester','ranger','guide','hermit','animal-handler']],
  ['Innkeeper', ['innkeeper','cook','server','brewer']],
  ['Blacksmith', ['blacksmith','artisan','shipwright','miner','prospector','foreman','engineer','mason','carpenter','jeweler','leatherworker','potter','tinker','apprentice','gravedigger']],
  ['Scholar', ['scholar','scribe','librarian','tutor','clerk','researcher','student','historian','archaeologist','investigator']],
].flatMap(([role, ids]) => ids.map(id => [id, role]))));
const EXTRA_PROFESSION_ICONS = Object.freeze({
  merchant: 'M4 6h16v14H4zM8 6V3h8v3M4 11h16M10 11v3h4v-3',
  peddler: 'M4 6h16v14H4zM8 6V3h8v3M4 11h16M10 11v3h4v-3',
  sailor: 'M12 3v14M8 7h8M4 13c0 9 16 9 16 0M2 15l2-2 2 2M18 15l2-2 2 2',
  captain: 'M12 3v14M8 7h8M4 13c0 9 16 9 16 0M2 15l2-2 2 2M18 15l2-2 2 2',
  navigator: 'M12 3 8 15l4-2 4 2zM12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18',
  musician: 'M9 17V5l11-2v12M9 8l11-2M9 17c0 4-6 4-6 1s6-4 6-1M20 15c0 4-6 4-6 1s6-4 6-1',
});
function professionBadgeIcon(id) {
  if (Object.hasOwn(PROFESSION_ICON_ROLES, id)) return roleIcon(PROFESSION_ICON_ROLES[id]);
  const path = Object.hasOwn(EXTRA_PROFESSION_ICONS, id) ? EXTRA_PROFESSION_ICONS[id] : 'M5 21v-2a7 7 0 0 1 14 0v2M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8';
  return `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="${path}"/></svg>`;
}
function generatedNpcVisual(entry) {
  const visual = document.createElement('div'); visual.className = 'generated-npc-visual'; visual.setAttribute('aria-hidden', 'true');
  const background = document.createElement('div'); background.className = 'generated-visual-background';
  const templateId = Object.hasOwn(GENERATED_LOCATION_TEMPLATES, entry.locationId) ? GENERATED_LOCATION_TEMPLATES[entry.locationId] : null;
  const template = locationLibrary.templates?.find(item => item.id === templateId);
  // Always keep a decorative parchment/location fallback beneath optional artwork.
  background.innerHTML = '<svg class="generated-location-symbol" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12ZM12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>';
  if (template?.image && safeLocationImage(template.image)) {
    const image = document.createElement('img'); image.src = template.image; image.alt = ''; image.loading = 'lazy'; image.decoding = 'async';
    image.addEventListener('error', () => image.remove(), { once: true }); background.append(image);
  }
  const badge = document.createElement('span'); badge.className = 'generated-profession-badge'; badge.innerHTML = professionBadgeIcon(entry.professionId);
  const silhouette = document.createElement('img');
  silhouette.className = 'generated-npc-silhouette'; silhouette.src = 'images/generated-npc-silhouette.svg'; silhouette.alt = '';
  visual.append(background, silhouette, badge); return visual;
}
function refreshNpcVisuals() {
  renderCast(document.querySelector('#cast-list'));
  if (state.view === 'session') renderCast(elements.grid, visibleSessionEntries());
  if (generator.data && generator.current) renderGenerator();
}
