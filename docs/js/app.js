const collections = [
  {
    name: "character",
    url: "data/characters/index.json",
    countElement: document.querySelector("#character-count"),
  },
  {
    name: "location",
    url: "data/locations/index.json",
    countElement: document.querySelector("#location-count"),
  },
];

const statusElement = document.querySelector("#catalog-status");

function formatCount(count, name) {
  return `${count} ${count === 1 ? name : `${name}s`}`;
}

async function loadCollection(collection) {
  const response = await fetch(collection.url);

  if (!response.ok) {
    throw new Error(`Unable to load ${collection.name} data.`);
  }

  const entries = await response.json();

  if (!Array.isArray(entries)) {
    throw new TypeError(`${collection.name} index must contain an array.`);
  }

  collection.countElement.textContent = formatCount(entries.length, collection.name);
  return entries.length;
}

async function initializeCatalog() {
  try {
    const counts = await Promise.all(collections.map(loadCollection));
    const total = counts.reduce((sum, count) => sum + count, 0);
    statusElement.textContent = total
      ? `${total} published ${total === 1 ? "entry" : "entries"}`
      : "The first entries are being prepared.";
  } catch (error) {
    statusElement.textContent = "The archive is temporarily unavailable.";
    console.error(error);
  }
}

initializeCatalog();
