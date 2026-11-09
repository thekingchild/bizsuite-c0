const header = document.querySelector("[data-nav]");
const toggle = document.querySelector(".menu-toggle");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const updateHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

if (header && toggle) {
  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  header.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

let revealObserver;

const applyReveal = (scope = document) => {
  const revealItems = [
    ...scope.querySelectorAll(
      ".hero-copy, .hero-product, .product-window, .proof-card, .split-copy, .phone-panel, .module-card, .timeline-card, .pricing-card, .pricing-note, details, .cta-band, .changelog-entry, .changelog-hero-copy, .changelog-hero-meta"
    )
  ];

  revealItems.forEach((item, index) => {
    item.classList.add("revealable");
    item.style.setProperty("--reveal-delay", `${Math.min(index * 45, 180)}ms`);
  });

  if (reducedMotion) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
  }

  revealItems.forEach((item) => {
    if (!item.classList.contains("is-visible")) {
      revealObserver.observe(item);
    }
  });
};

window.applyBizSuiteReveal = applyReveal;

const phoneCard = document.querySelector(".phone-card");

if (phoneCard) {
  phoneCard.innerHTML = `
    <div class="phone-head">
      <div>
        <span>POS checkout</span>
        <small>Cashier: Ada &bull; Table 04</small>
      </div>
      <strong>&#8358;18,750</strong>
    </div>
    <div class="pos-meta">
      <span>Invoice #1058</span>
      <span>12:42 PM</span>
    </div>
    <label class="search-line">
      <span>Search item or scan barcode</span>
    </label>
    <div class="product-list">
      <span><i>2x Rice pack</i><em>&#8358;8,400</em></span>
      <span><i>Repair service</i><em>&#8358;9,500</em></span>
      <span><i>Delivery</i><em>&#8358;850</em></span>
    </div>
    <div class="pos-summary">
      <span>Subtotal <em>&#8358;18,750</em></span>
      <span>Tax <em>&#8358;0</em></span>
      <strong>Total <em>&#8358;18,750</em></strong>
    </div>
    <div class="payment-row" aria-label="Payment methods">
      <span class="active">Cash</span>
      <span>Transfer</span>
      <span>Card</span>
    </div>
    <button type="button">Complete Sale</button>
  `;
}

const pricingSection = document.querySelector("#pricing");

// Plan details are written in index.html so crawlers and no-JS visitors see them.
// This only swaps between the data-monthly-* and data-yearly-* values on each card.
if (pricingSection) {
  const cards = [...pricingSection.querySelectorAll("[data-plan]")];
  const note = pricingSection.querySelector(".pricing-note");
  const noteText = pricingSection.querySelector("[data-pricing-note-text]");
  const pricingToggles = [...pricingSection.querySelectorAll("[data-pricing-toggle]")];
  const cycles = { monthly: "/ month", yearly: "/ year" };

  const setBilling = (billing) => {
    cards.forEach((card) => {
      const set = (selector, value, prop = "textContent") => {
        const el = card.querySelector(selector);
        if (el && value) el[prop] = value;
      };
      set("[data-plan-price]", card.dataset[`${billing}Price`]);
      set("[data-plan-cycle]", cycles[billing]);
      set("[data-plan-caption]", card.dataset[`${billing}Caption`]);
      set("[data-plan-cta]", card.dataset[`${billing}Cta`], "href");

      card.querySelectorAll("[data-billing-only]").forEach((item) => {
        item.hidden = item.dataset.billingOnly !== billing;
      });
    });

    if (note && noteText) {
      noteText.textContent = note.dataset[`${billing}Note`];
    }

    pricingToggles.forEach((button) => {
      const isActive = button.dataset.pricingToggle === billing;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  };

  pricingToggles.forEach((button) => {
    button.addEventListener("click", () => setBilling(button.dataset.pricingToggle));
  });
}

applyReveal();

requestAnimationFrame(() => {
  document.documentElement.classList.add("effects-ready");
});
