// menu
const menu = document.querySelector(".menu-toggle input");
const closeMenu = document.querySelector("nav ul");
menu.addEventListener("click", () => {
  closeMenu.classList.toggle("open");
  scrollLock();
});

const body = document.querySelector("body");
function scrollLock() {
  if (menu.checked === true) {
    body.style.overflowY = "hidden";
  } else if (menu.checked === false) {
    body.style.overflowY = "visible";
  }
}

// slide
const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  autoplay: {
    delay: 3500,
  },
});
