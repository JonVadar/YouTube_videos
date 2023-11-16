// Theme switcher icons
const moonIcon =
  "M3 11.507a9.493 9.493 0 0 0 18 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.494 9.494 0 0 0 3 11.507Z";
const sunIcon =
  "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1";

// DOM elements
const themeSwitcher = document.querySelector("#theme-switcher");
const themeSwitcherIcon = document.querySelector("#theme-switcher svg path");

themeSwitcher.addEventListener('click',() => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.remove("dark");
    themeSwitcherIcon.setAttribute("d", moonIcon);
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    themeSwitcherIcon.setAttribute("d", sunIcon);
    localStorage.theme = "dark";
  }
});

// Set theme base on user preference
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  themeSwitcherIcon.setAttribute("d", sunIcon);
} else {
  document.documentElement.classList.remove("dark");
  themeSwitcherIcon.setAttribute("d", moonIcon);
}
