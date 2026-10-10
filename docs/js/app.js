const STORAGE_KEYS = { saved: "npc-beta-saved", session: "npc-beta-session" };
const state = {
  characters: [], roleConfig: null, locationFitConfig: null, portraits: window.NPC_PORTRAITS || {}, query: "", sort: "recent", view: "library",
  roles: new Set(), locations: new Set(), activeCharacter: null,
  saved: new Set(readStorage(STORAGE_KEYS.saved, [], validIds)),
  session: new Set(readStorage(STORAGE_KEYS.session, [], validIds)),
};
const elements = {
  grid: document.querySelector("#character-grid"), results: document.querySelector("#results-note"),
  search: document.querySelector("#character-search"), sort: document.querySelector("#character-sort"),
  roleFilters: document.querySelector("#role-filters"), locationFilters: document.querySelector("#location-filters"),
  filterPanel: document.querySelector("#filter-panel"), filterToggle: document.querySelector(".filter-toggle"),
  title: document.querySelector("#library-title"), savedCounts: [...document.querySelectorAll(".saved-count")],
  sessionCounts: [...document.querySelectorAll(".session-count")], detail: document.querySelector("#detail-panel"),
  scrim: document.querySelector(".panel-scrim"), detailSave: document.querySelector(".detail-save"),
  sessionButton: document.querySelector(".session-button"),
};

function saveState() {
  writeStorage(STORAGE_KEYS.saved, [...state.saved]);
  writeStorage(STORAGE_KEYS.session, [...state.session]);
}
function bookmarkIcon() { return '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6.5 4.5h11v16l-5.5-3.4-5.5 3.4z"/></svg>'; }
function roleIcon(role) {
  const icons = {
    Adventurer: '<path d="m5 4 14 14M19 4 5 18M4 3l4 1-3 3zM20 3l-4 1 3 3zM3 20l4-1-2-2zM21 20l-4-1 2-2z"/>',
    Apothecary: '<path d="M5 17h14c0 3-3 4-7 4s-7-1-7-4ZM8 17c4-1 7-4 8-8M15 4l3 2-2 3-3-2zM5 12h5"/>',
    Priest: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
    Smuggler: '<path d="M3 8c3-2 6-2 9 1 3-3 6-3 9-1l-1 7c-2 4-6 3-8 0-2 3-6 4-8 0zM7 11l2 1M17 11l-2 1"/>',
    Ranger: '<path d="M5 19C8 8 14 4 20 4c0 7-5 13-15 15ZM7 17l9-9"/>',
    Innkeeper: '<path d="M6 7h10v13H6zM16 9h2c3 0 3 7 0 7h-2M5 5h12"/>',
    Blacksmith: '<path d="M4 6h16c0 4-3 6-7 6v5h4v3H7v-3h4v-5C7 12 4 10 4 6Z"/>',
    Scholar: '<path d="M3 5c3-1 6 0 9 2v13c-3-2-6-3-9-2zM21 5c-3-1-6 0-9 2v13c3-2 6-3 9-2z"/>',
  };
  return `<svg class="role-icon ${role === "Smuggler" ? "mask" : ""}" aria-hidden="true" viewBox="0 0 24 24">${icons[role] || icons.Scholar}</svg>`;
}
// Stable sort preserves editorial order within a pack and for undated entries.
function comparePublished(a, b) {
  const date = value => Number.isFinite(Date.parse(value)) ? Date.parse(value) : 0;
  return date(b.publishedAt) - date(a.publishedAt);
}
function validateRoleCategories(config, characters) {
  const stableId = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  if (!Array.isArray(config?.categories) || !config.categories.length || config.categories.some(item => !stableId.test(item.id) || typeof item.label !== "string" || !item.label.trim())) throw new Error("Invalid role categories");
  const ids = new Set(config.categories.map(item => item.id));
  if (ids.size !== config.categories.length) throw new Error("Duplicate role category IDs");
  const valid = values => Array.isArray(values) && values.length > 0 && new Set(values).size === values.length && values.every(id => ids.has(id));
  if (!Array.isArray(characters) || characters.some(character => !valid(character.roleCategoryIds))) throw new Error("Invalid NPC role category IDs");
  if (!config.generatorProfessionCategoryIds || Object.values(config.generatorProfessionCategoryIds).some(values => !valid(values))) throw new Error("Invalid session profession categories");
}
function validateLocationFitCategories(config, characters) {
  const stableId = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  if (!Array.isArray(config?.categories) || !config.categories.length || config.categories.some(item => !stableId.test(item.id) || typeof item.label !== "string" || !item.label.trim())) throw new Error("Invalid location fit categories");
  const ids = new Set(config.categories.map(item => item.id));
  if (ids.size !== config.categories.length) throw new Error("Duplicate location fit category IDs");
  const valid = values => Array.isArray(values) && values.length > 0 && new Set(values).size === values.length && values.every(id => ids.has(id));
  if (!Array.isArray(characters) || characters.some(character => !valid(character.locationFitCategoryIds))) throw new Error("Invalid NPC location fit category IDs");
  if (!config.generatorLocationCategoryIds || Object.values(config.generatorLocationCategoryIds).some(values => !valid(values))) throw new Error("Invalid session location categories");
}
function matchesLocationFitCategories(ids = []) { return !state.locations.size || ids.some(id => state.locations.has(id)); }
function syncLocationFitFilters() {
  elements.locationFilters.querySelectorAll("[data-filter='location']").forEach(input => { input.checked = state.locations.has(input.value); });
  const all = elements.locationFilters.querySelector("[data-all-locations]");
  if (all) all.checked = !state.locations.size;
}
function matchesRoleCategories(ids = []) { return !state.roles.size || ids.some(id => state.roles.has(id)); }
function syncRoleFilters() {
  elements.roleFilters.querySelectorAll("[data-filter='role']").forEach(input => { input.checked = state.roles.has(input.value); });
  const all = elements.roleFilters.querySelector("[data-all-roles]");
  if (all) all.checked = !state.roles.size;
}
function visibleCharacters() {
  const query = state.query.toLowerCase();
  return state.characters.filter((character) => {
    const searchable = [character.name, character.ancestry || "", character.role, character.subtitle, ...character.tags].join(" ").toLowerCase();
    const roleMatch = matchesRoleCategories(character.roleCategoryIds);
    const locationMatch = matchesLocationFitCategories(character.locationFitCategoryIds);
    const viewMatch = state.view === "library" || (state.view === "saved" ? state.saved.has(character.id) : state.session.has(character.id));
    return searchable.includes(query) && roleMatch && locationMatch && viewMatch;
  }).sort((a, b) => state.sort === "recent" ? comparePublished(a, b) : a[state.sort].localeCompare(b[state.sort]));
}
function render() {
  syncRoleFilters(); syncLocationFitFilters();
  renderCompanion();
  if ((state.view === "generator" || state.view === "session") && !locationLibrary.templates && !locationLibrary.error) ensureLocations();
  document.title = state.view === "support" ? "Support NPC Beta — NPC Beta" : "NPC Beta — " + ({library:"Character library", locations:"Locations", generator:"Name Generator", saved:"Saved", session:"Session"}[state.view] || "Character library");
  document.querySelector('meta[name="description"]').content = state.view === "support" ? "Patreon support helps keep NPC Beta’s NPCs, locations and tools free for every Game Master." : "Find memorable, ready-to-play fantasy characters for your next session.";
  document.querySelector(".library").hidden = ["generator", "locations", "support", "session"].includes(state.view);
  document.querySelector("#locations-view").hidden = state.view !== "locations";
  document.querySelector("#session-board").hidden = state.view !== "session";
  (state.view === "session" ? document.querySelector("#session-npc-column") : document.querySelector(".library-results")).append(elements.grid);
  document.querySelector("#generator-view").hidden = state.view !== "generator";
  document.querySelector("#pro-view").hidden = state.view !== "support";
  if (state.view === "generator") ensureGenerator();
  const characters = visibleCharacters();
  const labels = { library: "NPC Library", saved: "Saved NPCs", session: "Session", generator: "Quick Name Generator", locations: "Locations", support: "Support NPC Beta" };
  elements.title.textContent = labels[state.view];
  elements.results.textContent = `${characters.length} ${characters.length === 1 ? "character" : "characters"}${state.view === "session" ? " selected" : ""}`;
  document.querySelectorAll("[data-view]").forEach((button) => button.classList.toggle("active", button.dataset.view === state.view));
  document.querySelectorAll("nav [data-view]").forEach((button) => {
    if (button.dataset.view === state.view) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  elements.savedCounts.forEach((count) => { count.textContent = state.saved.size || ""; count.setAttribute("aria-label", `${state.saved.size} saved`); });
  elements.sessionCounts.forEach((count) => { count.textContent = sessionEntries().length || ""; count.setAttribute("aria-label", `${sessionEntries().length} selected`); });
  if (state.view === "support") return;
  if (state.view === "locations") { ensureLocations(); return; }
  if (state.view === "session") {
    renderSessionBoard();
    return;
  }
  if (!characters.length) {
    const message = state.view === "session" ? "Your session is empty. Add characters from their profiles." : state.view === "saved" ? "You have not saved any matching characters yet." : "No characters match those filters.";
    elements.grid.innerHTML = `<p class="empty-state">${message}</p>`; return;
  }
  elements.grid.innerHTML = characters.map((character) => `<article class="character-card">
    <button class="card-open" type="button" data-character="${character.id}" aria-label="View ${character.name}">
      <div class="portrait-wrap"><img class="${character.portraitFit === "contain" ? "portrait-contain" : ""}" src="${state.portraits[character.portraitKey]}" alt="${character.imageAlt}"></div>
      <div class="card-copy"><h3>${character.name}</h3><p class="role-line">${roleIcon(character.role)}<span>${character.role}</span></p><p class="card-subtitle">${character.subtitle}</p></div>
    </button>
    ${state.view === "session" ? `<button class="session-remove" type="button" data-remove-session="${character.id}" aria-label="Remove ${character.name} from session">Remove</button>` : `<button class="card-save ${state.saved.has(character.id) ? "is-saved" : ""}" type="button" data-save="${character.id}" aria-label="${state.saved.has(character.id) ? "Remove" : "Save"} ${character.name}">${bookmarkIcon()}</button>`}
  </article>`).join("");
}
function renderFilters() {
  for (const [container, categories, type, allLabel, allDataset] of [
    [elements.roleFilters, state.roleConfig.categories, "role", "All Roles", "allRoles"],
    [elements.locationFilters, state.locationFitConfig.categories, "location", "All Locations", "allLocations"],
  ]) {
    container.replaceChildren();
    for (const item of [{ id: "all", label: allLabel }, ...categories]) {
      const label = document.createElement("label"); label.className = "filter-option";
      const input = document.createElement("input"); input.type = "checkbox"; input.value = item.id;
      if (item.id === "all") input.dataset[allDataset] = ""; else input.dataset.filter = type;
      const text = document.createElement("span"); text.textContent = item.label;
      label.append(input, text); container.append(label);
    }
  }
  syncRoleFilters(); syncLocationFitFilters();
}
function toggleSaved(id) { state.saved.has(id) ? state.saved.delete(id) : state.saved.add(id); saveState(); render(); if (state.activeCharacter?.id === id) updateDetailActions(); }
function updateDetailActions() {
  if (!state.activeCharacter) return;
  elements.sessionButton.hidden = state.view === "session";
  const { id, name } = state.activeCharacter; const isSaved = state.saved.has(id); const isAdded = state.session.has(id);
  elements.detailSave.classList.toggle("is-saved", isSaved); elements.detailSave.setAttribute("aria-label", `${isSaved ? "Remove" : "Save"} ${name}`);
  elements.sessionButton.classList.toggle("added", isAdded); elements.sessionButton.innerHTML = isAdded ? '<span aria-hidden="true">✓</span> Remove from session' : '<span aria-hidden="true">＋</span> Add to session';
}
let detailOpener = null, detailEntryId = null, detailEntryKind = null;
function prepareDetail(kind, fromSession) {
  elements.detail.querySelector('.detail-location-remove')?.remove();
  detailOpener = document.activeElement;
  const row = detailOpener?.closest(".session-row");
  detailEntryId = row?.dataset.entryId; detailEntryKind = row?.dataset.instanceId ? "locations" : "npcs";
  elements.detail.querySelector(".detail-kind").textContent = kind;
  elements.detail.querySelector(".detail-summary").hidden = false;
  elements.detail.querySelector(".detail-extra-visual").classList.remove("location-detail-visual");
  elements.sessionButton.hidden = fromSession;
  elements.detailSave.hidden = false;
  elements.detail.querySelector(".detail-portrait").hidden = false;
  elements.detail.querySelector(".detail-facts").hidden = false;
  for (const selector of [".detail-extra-visual", ".detail-location-fields", ".detail-location-reference"]) { const node = elements.detail.querySelector(selector); node.hidden = true; node.replaceChildren(); }
}
function showDetail() {
  elements.detail.inert = false; elements.detail.removeAttribute("inert");
  elements.detail.classList.add("open"); elements.detail.setAttribute("aria-hidden", "false"); document.body.classList.add("panel-open");
  elements.detail.querySelector(".detail-scroll").scrollTop = 0; elements.detail.querySelector(".back-button").focus({ preventScroll: true });
}
function openDetail(character) {
  if (!character) return;
  prepareDetail("Character", state.view === "session");
  state.activeCharacter = character; const portrait = elements.detail.querySelector(".detail-portrait"); portrait.src = state.portraits[character.portraitKey]; portrait.alt = character.imageAlt; portrait.classList.toggle("portrait-contain", character.portraitFit === "contain");
  elements.detail.querySelector("h2").textContent = character.name; elements.detail.querySelector(".detail-meta").textContent = `${character.ancestry ? character.ancestry + " · " : ""}${character.role} · ${character.subtitle}`;
  elements.detail.querySelector(".tag-list").innerHTML = character.tags.map((tag) => `<span>${tag}</span>`).join(""); elements.detail.querySelector(".detail-summary").textContent = character.summary;
  elements.detail.querySelector(".table-note").textContent = character.tableNote; elements.detail.querySelector(".adventure-hook").textContent = character.adventureHook;
  updateDetailActions(); showDetail();
}
function closeDetail() {
  const wasOpen = elements.detail.classList.contains("open");
  elements.detail.classList.remove("open"); elements.detail.setAttribute("aria-hidden", "true"); elements.detail.inert = true; elements.detail.setAttribute("inert", ""); document.body.classList.remove("panel-open");
  if (wasOpen && detailOpener?.isConnected) detailOpener.focus({ preventScroll: true });
  else if (wasOpen && detailEntryId && state.view === "session") focusBoardControl(detailEntryKind, detailEntryId, "open");
}

const APP_VIEWS = ["library", "locations", "generator", "saved", "session", "support"];
function routeView(value) { return value === "pro" ? "support" : APP_VIEWS.includes(value) ? value : null; }
function setView(view) { view = routeView(view); if (!view) return; state.view = view; history.replaceState(null, "", "#" + view); closeDetail(); render(); window.scrollTo({ top: 0, behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }); }

elements.search.addEventListener("input", ({ target }) => { state.query = target.value.trim(); render(); });
elements.sort.addEventListener("change", ({ target }) => { state.sort = target.value; render(); });
document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", (event) => { event.preventDefault(); setView(button.dataset.view); }));
elements.filterToggle.addEventListener("click", () => { const open = elements.filterPanel.classList.toggle("open"); elements.filterToggle.setAttribute("aria-expanded", String(open)); });
elements.filterPanel.addEventListener("change", ({ target }) => { if (target.matches("[data-all-roles]")) { state.roles.clear(); render(); return; } if (target.matches("[data-all-locations]")) { state.locations.clear(); render(); return; } if (!target.matches("[data-filter]")) return; const set = target.dataset.filter === "role" ? state.roles : state.locations; target.checked ? set.add(target.value) : set.delete(target.value); render(); });
document.querySelector(".clear-filters").addEventListener("click", () => { state.roles.clear(); state.locations.clear(); elements.filterPanel.querySelectorAll("input").forEach((input) => { input.checked = false; }); render(); });
elements.grid.addEventListener("click", (event) => {
  const save = event.target.closest("[data-save]"); const remove = event.target.closest("[data-remove-session]"); const open = event.target.closest("[data-character]");
  if (save) toggleSaved(save.dataset.save); else if (remove) { state.session.delete(remove.dataset.removeSession); saveState(); render(); } else if (open) openDetail(state.characters.find(({ id }) => id === open.dataset.character));
});
elements.detail.querySelector(".back-button").addEventListener("click", closeDetail); elements.scrim.addEventListener("click", closeDetail);
elements.detailSave.addEventListener("click", () => { if (state.activeCharacter) toggleSaved(state.activeCharacter.id); });
elements.sessionButton.addEventListener("click", () => { if (!state.activeCharacter || elements.sessionButton.hidden) return; const id = state.activeCharacter.id; state.session.has(id) ? state.session.delete(id) : state.session.add(id); saveState(); updateDetailActions(); render(); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeDetail();
  if (event.key !== "Tab" || !elements.detail.classList.contains("open")) return;
  const controls = [...elements.detail.querySelectorAll("button, input, textarea, select, a[href]")].filter(node => !node.disabled && !node.closest("[hidden]"));
  const first = controls[0], last = controls[controls.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});
Promise.all(["index", "role-categories", "location-fit-categories"].map(file => fetch(`data/characters/${file}.json`).then(response => { if (!response.ok) throw new Error("Could not load character data"); return response.json(); }))).then(([characters, config, locationConfig]) => { validateRoleCategories(config, characters); validateLocationFitCategories(locationConfig, characters); state.locationFitConfig = locationConfig; state.characters = characters; state.roleConfig = config; renderFilters(); render(); }).catch((error) => { elements.results.textContent = "The character library could not be loaded."; console.error(error); });

// Keep legacy #pro links compatible while new navigation uses #support.
state.view = routeView(location.hash.slice(1)) || "library";
window.addEventListener("hashchange", () => { const view = routeView(location.hash.slice(1)); if (view) setView(view); });
