const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links ul");
const dropdown = document.querySelector(".dropdown > a");
const dropdownMenu = document.querySelector(".dropdown-menu");
const closeMenu = document.getElementById("close-menu");
const mobiledropdown = document.getElementById("mobile-dropdown");
const arrow = document.getElementById("product-arrow");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  console.log("thehethe");
});
// Dropdown toggle for mobile
dropdown.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent link default behavior
  dropdownMenu.classList.toggle("show");
  mobiledropdown.classList.toggle("open");
  if (window.innerWidth <= 768) {
    arrow.classList.toggle("fa-chevron-down");
    arrow.classList.toggle("fa-chevron-up");
  }
});
// Close Mobile Menu
closeMenu.addEventListener("click", () => {
  navLinks.classList.remove("show");
});
