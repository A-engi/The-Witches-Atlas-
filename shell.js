/* The Witches Atlas shell.js v1.1.2 */

const pageKey = document.body?.dataset?.page || "atlas";

const shellMarkup = `
  <div class="top-bar-fade" aria-hidden="true"></div>

  <header class="top-bar" aria-label="App header">
    <button id="menuButton" class="menu-button" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="sideMenu"><span></span><span></span><span></span></button>

    <div class="search-wrap">
      <label class="sr-only" for="covenSearchInput">Seek the atlas</label>
      <input id="covenSearchInput" class="coven-search-input" type="search" placeholder="Seek covens, recipes, magic..." autocomplete="off">
    </div>

    <button id="filterButton" class="top-button filter-button" type="button" aria-label="Open filters" aria-expanded="false" aria-controls="filterMenu">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16l-6.2 7.1v4.4l-3.6 1.8v-6.2L4 6Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
    </button>
  </header>

  <aside id="sideMenu" class="side-menu" aria-hidden="true">
    <div class="menu-header">
      <div class="menu-brand">
        <div class="menu-logo" aria-hidden="true">
          <svg viewBox="0 0 64 64"><rect x="4" y="4" width="56" height="56" rx="16" fill="#081421" stroke="#60ebff" stroke-opacity=".52" stroke-width="2"/><path d="M39 10a18 18 0 1 0 11 31A20 20 0 1 1 39 10Z" fill="#ffd66b"/><path d="M17 46c7-10 15-16 30-23M19 32c9 0 17 4 27 14" fill="none" stroke="#73f5ff" stroke-width="2.1" stroke-linecap="round"/><path d="M30 18 33 25 40 28 33 31 30 38 27 31 20 28 27 25Z" fill="#9bfff7"/></svg>
        </div>
        <div class="menu-brand-text"><strong>The Witches Atlas</strong><span>v1.1.2 public shell</span></div>
      </div>
      <button id="menuCloseButton" class="menu-close-button" type="button" aria-label="Close menu">&times;</button>
    </div>

    <section class="menu-section"><div class="menu-section-title">Pages</div>
          <a class="menu-list-item" data-shell-page="atlas" href="./index.html"><span class="menu-item-icon"><svg class="rail-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6.5 9 4l6 2.5L20 4v13.5L15 20l-6-2.5L4 20V6.5Zm5-1.3v12.2m6-10.9v12.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>Atlas</span></a>
          <a class="menu-list-item" data-shell-page="covens" href="./covens.html"><span class="menu-item-icon"><svg class="rail-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11.5 12 5l7 6.5V20H5v-8.5Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 20v-6h6v6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg></span><span>Covens</span></a>
          <a class="menu-list-item" data-shell-page="cauldron" href="./cauldron.html"><span class="menu-item-icon"><svg class="rail-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 10h12l-1.2 8H7.2L6 10Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 10V7m4 3V6m4 4V7M5 10h14M8 18l-1.5 2M16 18l1.5 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span><span>Cauldron</span></a>
          <a class="menu-list-item" data-shell-page="magic" href="./magic.html"><span class="menu-item-icon"><svg class="rail-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v4M12 17v4M4.2 7.5l3.4 2M16.4 14.5l3.4 2M4.2 16.5l3.4-2M16.4 9.5l3.4-2" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></span><span>Magic</span></a>
          <a class="menu-list-item" data-shell-page="skies" href="./skies.html"><span class="menu-item-icon"><svg class="rail-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 18.2h8.5a4 4 0 0 0 .5-8 5.7 5.7 0 0 0-10.9 1.2 3.5 3.5 0 0 0 1.9 6.8Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="m12.8 12-2.3 3.5h2.2L11 19l3.3-4.4h-2.2L13.6 12Z" fill="currentColor"/></svg></span><span>Skies</span></a>
          <a class="menu-list-item" data-shell-page="charms" href="./charms.html"><span class="menu-item-icon"><svg class="rail-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 14.2 9.8 21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2L12 3Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg></span><span>Charms</span></a>
          <a class="menu-list-item" data-shell-page="memos" href="./memos.html"><span class="menu-item-icon"><svg class="rail-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4.5h12v15H6z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 8h6M9 12h6M9 16h3.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span><span>Memos</span></a>
    </section>

    <section class="menu-section"><div class="menu-section-title">Status</div><p class="menu-note">Public demo only. Fictional covens, recipes and magic. No real-world operational details.</p></section>
  </aside>

  <div id="menuOverlay" class="menu-overlay" hidden></div>

  <div class="rail-dock" id="railDock">
    <nav class="side-rail" aria-label="Primary navigation">
      <a class="rail-button" data-shell-page="atlas" href="./index.html" aria-label="Atlas"><svg class="rail-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6.5 9 4l6 2.5L20 4v13.5L15 20l-6-2.5L4 20V6.5Zm5-1.3v12.2m6-10.9v12.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="rail-label">Atlas</span></a>
      <a class="rail-button" data-shell-page="covens" href="./covens.html" aria-label="Covens"><svg class="rail-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11.5 12 5l7 6.5V20H5v-8.5Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 20v-6h6v6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg><span class="rail-label">Covens</span></a>
      <a class="rail-button" data-shell-page="cauldron" href="./cauldron.html" aria-label="Cauldron"><svg class="rail-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 10h12l-1.2 8H7.2L6 10Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 10V7m4 3V6m4 4V7M5 10h14M8 18l-1.5 2M16 18l1.5 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg><span class="rail-label">Cauldron</span></a>
      <a class="rail-button" data-shell-page="magic" href="./magic.html" aria-label="Magic"><svg class="rail-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v4M12 17v4M4.2 7.5l3.4 2M16.4 14.5l3.4 2M4.2 16.5l3.4-2M16.4 9.5l3.4-2" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.8"/></svg><span class="rail-label">Magic</span></a>
      <a class="rail-button" data-shell-page="skies" href="./skies.html" aria-label="Skies"><svg class="rail-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 18.2h8.5a4 4 0 0 0 .5-8 5.7 5.7 0 0 0-10.9 1.2 3.5 3.5 0 0 0 1.9 6.8Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="m12.8 12-2.3 3.5h2.2L11 19l3.3-4.4h-2.2L13.6 12Z" fill="currentColor"/></svg><span class="rail-label">Skies</span></a>
      <button id="toolsButton" class="rail-button" type="button" aria-label="More charms" aria-expanded="false" aria-controls="railToolsMenu"><svg class="rail-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 14.2 9.8 21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2L12 3Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg><span class="rail-label">More</span></button>
    </nav>

    <button id="railCollapseButton" class="rail-collapse-button" type="button" aria-label="Collapse side rail" aria-expanded="true">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14.5 6-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  </div>

  <div id="railToolsMenu" class="rail-tools-menu" hidden>
    <a class="rail-tool-button" href="./charms.html">Charms</a>
    <a class="rail-tool-button" href="./memos.html">Memos</a>
    <button class="rail-tool-button" type="button">Refresh atlas</button>
  </div>

  <div id="filterMenu" class="top-filter-menu" hidden>
    <div class="top-filter-header"><strong>Sort</strong><span>Demo realms only</span></div>
    <button class="top-filter-action" type="button">Moonfall</button>
    <button class="top-filter-action" type="button">Thornwick</button>
    <button class="top-filter-action" type="button">Frostmere</button>
  </div>
`;

const shellMount = document.getElementById("appShell");
if (shellMount) shellMount.innerHTML = shellMarkup;

document.querySelectorAll("[data-shell-page]").forEach((item) => {
  item.classList.toggle("active", item.dataset.shellPage === pageKey);
});

const shellElements = {
  menuButton: document.getElementById("menuButton"),
  menuCloseButton: document.getElementById("menuCloseButton"),
  sideMenu: document.getElementById("sideMenu"),
  menuOverlay: document.getElementById("menuOverlay"),
  filterButton: document.getElementById("filterButton"),
  filterMenu: document.getElementById("filterMenu"),
  toolsButton: document.getElementById("toolsButton"),
  railToolsMenu: document.getElementById("railToolsMenu"),
  railCollapseButton: document.getElementById("railCollapseButton")
};

function setMenuOpen(isOpen) {
  shellElements.sideMenu?.classList.toggle("is-open", isOpen);
  shellElements.sideMenu?.setAttribute("aria-hidden", isOpen ? "false" : "true");
  shellElements.menuButton?.setAttribute("aria-expanded", isOpen ? "true" : "false");
  if (shellElements.menuOverlay) shellElements.menuOverlay.hidden = !isOpen;
}

function setFilterOpen(isOpen) {
  if (!shellElements.filterMenu) return;
  shellElements.filterMenu.hidden = !isOpen;
  shellElements.filterButton?.setAttribute("aria-expanded", isOpen ? "true" : "false");
  if (isOpen) setRailToolsOpen(false);
}

function setRailToolsOpen(isOpen) {
  if (!shellElements.railToolsMenu) return;
  shellElements.railToolsMenu.hidden = !isOpen;
  shellElements.toolsButton?.setAttribute("aria-expanded", isOpen ? "true" : "false");
  if (isOpen) setFilterOpen(false);
}

function setRailCollapsed(isCollapsed) {
  document.body.classList.toggle("rail-collapsed", isCollapsed);
  shellElements.railCollapseButton?.setAttribute("aria-expanded", isCollapsed ? "false" : "true");
  shellElements.railCollapseButton?.setAttribute("aria-label", isCollapsed ? "Expand side rail" : "Collapse side rail");
  if (isCollapsed) setRailToolsOpen(false);
}

function closeFloatingShellMenus() {
  setFilterOpen(false);
  setRailToolsOpen(false);
}

shellElements.menuButton?.addEventListener("click", () => {
  setMenuOpen(true);
  closeFloatingShellMenus();
});

shellElements.menuCloseButton?.addEventListener("click", () => setMenuOpen(false));
shellElements.menuOverlay?.addEventListener("click", () => setMenuOpen(false));

shellElements.filterButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  setFilterOpen(shellElements.filterMenu?.hidden !== false);
});

shellElements.toolsButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  setRailToolsOpen(shellElements.railToolsMenu?.hidden !== false);
});

shellElements.railCollapseButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  setRailCollapsed(!document.body.classList.contains("rail-collapsed"));
});

document.addEventListener("click", (event) => {
  const target = event.target;
  const insideFilter = shellElements.filterMenu?.contains(target) || shellElements.filterButton?.contains(target);
  const insideTools = shellElements.railToolsMenu?.contains(target) || shellElements.toolsButton?.contains(target);
  const insideRail = target.closest?.(".rail-dock");
  if (!insideFilter && !insideTools && !insideRail) closeFloatingShellMenus();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  setMenuOpen(false);
  closeFloatingShellMenus();
});
