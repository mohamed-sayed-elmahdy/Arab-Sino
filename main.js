const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links ul');
const dropdown = document.querySelector('.dropdown > a');
const dropdownMenu = document.querySelector('.dropdown-menu');
const closeMenu = document.getElementById('close-menu');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  console.log("thehethe")
});
// Dropdown toggle for mobile
dropdown.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent link default behavior
  dropdownMenu.classList.toggle('show');
});
// Close Mobile Menu
closeMenu.addEventListener('click', () => {
  navLinks.classList.remove('show');
});