// Shared configuration for both patron links. Empty until a real support URL exists.
const NPC_PRO_CONFIG = Object.freeze({
  supportUrl: "",
  heroImage: "", // Site-relative path, e.g. images/characters/pro-hero.webp.
});
(() => {
  const url = NPC_PRO_CONFIG.supportUrl.trim();
  if (/^https:\/\//i.test(url)) {
    document.querySelectorAll("[data-support]").forEach((placeholder) => {
      const link = document.createElement("a");
      link.className = "pro-support";
      link.href = url;
      link.textContent = "Become a Patron";
      placeholder.replaceWith(link);
    });
  }
  const image = document.querySelector("#pro-portrait");
  image.addEventListener("error", () => { image.hidden = true; });
  const source = NPC_PRO_CONFIG.heroImage || window.NPC_PORTRAITS?.["cassian-holt"];
  if (source) { image.src = source; image.hidden = false; }
  document.querySelector(".pro-explore").addEventListener("click", (event) => {
    event.preventDefault();
    const section = document.querySelector("#pro-features");
    section.focus({ preventScroll: true });
    section.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  });
})();
