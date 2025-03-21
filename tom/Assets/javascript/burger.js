// Pastikan elemen ada sebelum digunakan
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const header = document.querySelector("header");

if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x", navbar.classList.contains("active"));
  };
}

window.onscroll = () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));

      let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });

  // Sticky header
  if (header) {
    header.classList.toggle("sticky", window.scrollY > 100);
  }

  // Tutup menu navbar saat scroll
  if (menuIcon && navbar) {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
};
