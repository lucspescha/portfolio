// Language switch (DE/EN). Choice is remembered per browser.
(function () {
  const root = document.documentElement;
  const buttons = document.querySelectorAll("[data-set-lang]");

  function setLang(lang) {
    root.dataset.lang = lang;
    root.lang = lang;
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.setLang === lang)));
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  let initial = "de";
  try { initial = localStorage.getItem("lang") || ""; } catch (e) {}
  if (!initial) initial = (navigator.language || "de").toLowerCase().startsWith("de") ? "de" : "en";

  buttons.forEach((b) => b.addEventListener("click", () => setLang(b.dataset.setLang)));
  setLang(initial);
})();
