// DOM elements
const slides = document.querySelectorAll(".slides div");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const dots = document.querySelectorAll(".dots li");

let currentIdx = 0;

// Next button click event
nextBtn.addEventListener("click", () => {
  clearAllClasses();

  currentIdx = currentIdx >= slides.length - 1 ? 0 : currentIdx + 1;

  slides[currentIdx].classList.add("shown");
  dots[currentIdx].classList.add("active");
});

// Previous button click event
prevBtn.addEventListener("click", () => {
  clearAllClasses();

  currentIdx = currentIdx <= 0 ? slides.length - 1 : currentIdx - 1;

  slides[currentIdx].classList.add("shown");
  dots[currentIdx].classList.add("active");
});

// Dots click event
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    clearAllClasses();

    dot.classList.add("active");
    slides[i].classList.add("shown");

    currentIdx = i;
  });
});

// Remove all shown and active classes from slides and dots
function clearAllClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("shown");
  });
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
}
