const navBtn = document.querySelector("#nav-btn");
const navContainer = document.querySelector("#nav-container");
const blury = document.querySelector(".blury");

navBtn.addEventListener("click", function () {
  navContainer.classList.toggle("appear");

  if (navContainer.classList.contains("appear")) {
    menuIsOpen();
  } else {
    menuIsClosed();
  }
});

document.addEventListener("click", function (e) {
  if (!navContainer.contains(e.target) && e.target !== navBtn) {
    navContainer.classList.remove("appear");
    menuIsClosed();
  }
});

function menuIsClosed() {
  blury.style.display = "none";
  navBtn.classList.add("fa-bars");
  navBtn.classList.remove("fa-xmark");
}

function menuIsOpen() {
  blury.style.display = "block";
  navBtn.classList.remove("fa-bars");
  navBtn.classList.add("fa-xmark");
}
