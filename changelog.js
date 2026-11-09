// Release entries are written in changelog.html so they work without JavaScript.
// This script turns the version list into tabs that show one release at a time.
const listRoot = document.querySelector("[data-changelog-list]");
const panelRoot = document.querySelector("[data-changelog-panels]");

if (listRoot && panelRoot) {
  const links = [...listRoot.querySelectorAll(".changelog-nav-item")];
  const entries = [...panelRoot.querySelectorAll(".changelog-entry")];
  const versions = entries.map((entry) => entry.dataset.version);

  const setActiveVersion = (version, updateHash = true) => {
    links.forEach((link) => {
      const isActive = link.dataset.version === version;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    entries.forEach((entry) => {
      entry.hidden = entry.dataset.version !== version;
    });

    if (updateHash && window.location.hash !== `#v-${version}`) {
      history.replaceState(null, "", `#v-${version}`);
    }
  };

  listRoot.addEventListener("click", (event) => {
    const link = event.target.closest(".changelog-nav-item");
    if (!link) return;
    event.preventDefault();
    setActiveVersion(link.dataset.version);

    // The version list is long; bring the release notes back into view if they scrolled off.
    if (panelRoot.getBoundingClientRect().top < 0) {
      const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      panelRoot.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
    }
  });

  const fromHash = window.location.hash.replace("#v-", "");
  setActiveVersion(versions.includes(fromHash) ? fromHash : versions[0], versions.includes(fromHash));
}
