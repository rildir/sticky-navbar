const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  body.classList.add("disabledScroll");

  document.addEventListener("click", closeMenuOnClickOutside);
};

cancelBtn.onclick = () => {
  closeMenu();
};

function closeMenuOnClickOutside(event) {
  if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
    closeMenu();
  }
}

function closeMenu() {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  body.classList.remove("disabledScroll");

  document.removeEventListener("click", closeMenuOnClickOutside);
}

window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};
