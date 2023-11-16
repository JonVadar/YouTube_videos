// DOM elements
const navigation = document.querySelector("#navigation");
const navBackdrop = document.querySelector("#nav-backdrop");
const navOpener = document.querySelector("#nav-opener");
const navCloser = document.querySelector("#nav-closer");
const mobileNavContainer = document.querySelector("#mobile-nav-container");
const mobileNavItems = document.querySelectorAll("#mobile-nav-container a");

navOpener.addEventListener("click", () => {
  mobileNavContainer.classList.remove("opacity-0", "invisible");
  navBackdrop.classList.remove("opacity-0", "invisible");
});

navCloser.addEventListener("click", () => {
  mobileNavCloser();
});

document.addEventListener("click", (e) => {
  if (!mobileNavContainer.contains(e.target) && e.target !== navOpener) {
    mobileNavCloser();
  }
});

mobileNavItems.forEach((el) => {
  el.addEventListener("click", () => {
    mobileNavCloser();
  });
});

// Mobile nav closer
function mobileNavCloser() {
  mobileNavContainer.classList.add("opacity-0", "invisible");
  navBackdrop.classList.add("opacity-0", "invisible");
}

// Hide and show nav base on scroll
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && window.scrollY > 70) {
    navigation.classList.replace("top-0", "-top-24");
  } else {
    navigation.classList.replace("-top-24", "top-0");
  }
  lastScrollTop = scrollTop;
});
