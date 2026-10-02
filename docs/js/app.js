const state = {
  characters: [],
  portraits: window.NPC_PORTRAITS || {},
  group: "all",
  query: "",
  savedOnly: false,
  activeCharacter: null,
  saved: new Set(JSON.parse(localStorage.getItem("npc-beta-saved") || "[]")),
  session: new Set(JSON.parse(localStorage.getItem("npc-beta-session") || "[]")),
};

const elements = {
  grid: document.querySelector("#character-grid"),
  results: document.querySelector("#results-note"),
  search: document.querySelector("#character-search"),
  filters: [...document.querySelectorAll(".filter")],
  savedShortcut: document.querySelector(".saved-shortcut"),
  navSaved: document.querySelector(".nav-saved"),
  savedCount: document.querySelector(".saved-count"),
  detail: document.querySelector("#detail-panel"),
  scrim: document.querySelector(".panel-scrim"),
  detailSave: document.querySelector(".detail-save"),
  sessionButton: document.querySelector(".session-button"),
};

function saveState() {
  localStorage.setItem("npc-beta-saved", JSON.stringify([...state.saved]));
  localStorage.setItem("npc-beta-session", JSON.stringify([...state.session]));
}

function bookmarkIcon() {
  return '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6.5 4.5h11v16l-5.5-3.4-5.5 3.4z"/></svg>';
}

function visibleCharacters() {
  const query = state.query.toLowerCase();
  return state.characters.filter((character) => {
    const matchesGroup = state.group === "all" || character.group === state.group;
    const searchable = [character.name, character.role, character.subtitle, ...character.tags].join(" ").toLowerCase();
    return matchesGroup && searchable.includes(query) && (!state.savedOnly || state.saved.has(character.id));
  });
}

function render() {
  const characters = visibleCharacters();
  elements.results.textContent = `${characters.length} ${characters.length === 1 ? "character" : "characters"}${state.savedOnly ? " saved" : " ready for your table"}`;
  elements.savedShortcut.classList.toggle("is-saved", state.savedOnly);
  elements.savedShortcut.setAttribute("aria-pressed", String(state.savedOnly));
  elements.navSaved.classList.toggle("active", state.savedOnly);
  elements.savedCount.textContent = state.saved.size || "";
  elements.savedCount.setAttribute("aria-label", `${state.saved.size} saved`);

  if (!characters.length) {
    elements.grid.innerHTML = '<p class="empty-state">No characters match those filters. Try another search.</p>';
    return;
  }

  elements.grid.innerHTML = characters.map((character) => `
    <article class="character-card">
      <button class="card-open" type="button" data-character="${character.id}" aria-label="View ${character.name}">
        <div class="portrait-wrap"><img src="${state.portraits[character.portraitKey]}" alt="${character.imageAlt}"></div>
        <div class="card-copy"><h3>${character.name}</h3><p>${character.role}</p></div>
      </button>
      <button class="icon-button card-save ${state.saved.has(character.id) ? "is-saved" : ""}" type="button" data-save="${character.id}" aria-label="${state.saved.has(character.id) ? "Remove" : "Save"} ${character.name}">${bookmarkIcon()}</button>
    </article>`).join("");
}

function toggleSaved(id) {
  state.saved.has(id) ? state.saved.delete(id) : state.saved.add(id);
  saveState();
  render();
  if (state.activeCharacter?.id === id) updateDetailActions();
}

function updateDetailActions() {
  const { id, name } = state.activeCharacter;
  const isSaved = state.saved.has(id);
  const isAdded = state.session.has(id);
  elements.detailSave.classList.toggle("is-saved", isSaved);
  elements.detailSave.setAttribute("aria-label", `${isSaved ? "Remove" : "Save"} ${name}`);
  elements.sessionButton.classList.toggle("added", isAdded);
  elements.sessionButton.innerHTML = isAdded ? '<span aria-hidden="true">✓</span> Added to session' : '<span aria-hidden="true">＋</span> Add to session';
}

function openDetail(character) {
  state.activeCharacter = character;
  elements.detail.querySelector(".detail-portrait").src = state.portraits[character.portraitKey];
  elements.detail.querySelector(".detail-portrait").alt = character.imageAlt;
  elements.detail.querySelector("h2").textContent = character.name;
  elements.detail.querySelector(".detail-meta").textContent = `${character.role} · ${character.subtitle}`;
  elements.detail.querySelector(".tag-list").innerHTML = character.tags.map((tag) => `<span>${tag}</span>`).join("");
  elements.detail.querySelector(".detail-summary").textContent = character.summary;
  elements.detail.querySelector(".table-note").textContent = character.tableNote;
  elements.detail.querySelector(".adventure-hook").textContent = character.adventureHook;
  updateDetailActions();
  elements.detail.classList.add("open");
  elements.detail.setAttribute("aria-hidden", "false");
  document.body.classList.add("panel-open");
  elements.detail.querySelector(".back-button").focus();
}

function closeDetail() {
  elements.detail.classList.remove("open");
  elements.detail.setAttribute("aria-hidden", "true");
  document.body.classList.remove("panel-open");
}

function showSaved() {
  state.savedOnly = !state.savedOnly;
  render();
  if (state.savedOnly) elements.results.scrollIntoView({ behavior: "smooth", block: "center" });
}

elements.search.addEventListener("input", (event) => { state.query = event.target.value.trim(); render(); });
elements.filters.forEach((button) => button.addEventListener("click", () => {
  state.group = button.dataset.group;
  state.savedOnly = false;
  elements.filters.forEach((filter) => filter.classList.toggle("active", filter === button));
  render();
}));
elements.grid.addEventListener("click", (event) => {
  const save = event.target.closest("[data-save]");
  const open = event.target.closest("[data-character]");
  if (save) toggleSaved(save.dataset.save);
  if (open) openDetail(state.characters.find(({ id }) => id === open.dataset.character));
});
elements.savedShortcut.addEventListener("click", showSaved);
elements.navSaved.addEventListener("click", showSaved);
document.querySelector(".filter-button").addEventListener("click", () => {
  state.group = "all"; state.query = ""; state.savedOnly = false; elements.search.value = "";
  elements.filters.forEach((filter) => filter.classList.toggle("active", filter.dataset.group === "all")); render();
});
elements.detail.querySelector(".back-button").addEventListener("click", closeDetail);
elements.scrim.addEventListener("click", closeDetail);
elements.detailSave.addEventListener("click", () => toggleSaved(state.activeCharacter.id));
elements.sessionButton.addEventListener("click", () => {
  const id = state.activeCharacter.id;
  state.session.has(id) ? state.session.delete(id) : state.session.add(id);
  saveState(); updateDetailActions();
});
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeDetail(); });

fetch("data/characters/index.json")
  .then((response) => { if (!response.ok) throw new Error("Could not load characters"); return response.json(); })
  .then((characters) => { state.characters = characters; render(); })
  .catch((error) => { elements.results.textContent = "The character library could not be loaded."; console.error(error); });
