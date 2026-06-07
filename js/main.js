import { initRouter } from "./router.js";
import { initteamReel } from "./teamReel.js";
import { initScrollReveal, initParallax } from "./scrollReveal.js";
import { initRippleButtons } from "./ripple.js";
import { initHeroRotation } from "./heroRotation.js";
import { initHeroTitleWord } from "./heroTitleWord.js";
import {
  applyDynamicImages,
  initMobileNav,
  initDropdowns,
  initTabs,
  initFaq,
  initPlansTableKeyboardScroll,
  initGreeting,
  initHeaderHeroState,
} from "./ui.js";
import { initDoctorReel } from "./doctorReel.js";
import { initReviewsReel } from "./reviewsReel.js";

function boot() {
  /* Copyright year in footer — no env vars; pure client Date. */
  const footerYear = document.getElementById("footer-year");
  if (footerYear) {
    footerYear.textContent = String(new Date().getFullYear());
  }

  /* Phase: content + hero */
  applyDynamicImages();
  initGreeting();
  initHeroRotation();
  initHeroTitleWord();
  initHeaderHeroState();
  /* Phase: chrome + forms of navigation */
  initRippleButtons();
  initMobileNav();
  initDropdowns();
  initTabs();
  initFaq();
  initPlansTableKeyboardScroll();
  /* Phase: section-specific widgets (see matching `data-*` roots in index.html) */
  initDoctorReel();
  initteamReel();
  initReviewsReel();
  /* Phase: motion (respects prefers-reduced-motion inside modules) */
  initScrollReveal();
  initParallax();
  /* Phase: URL ↔ scroll sync (History API); keep at end */
  initRouter();
}

/* DOMContentLoaded: ensures all inline HTML is parsed before we query sections. */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
