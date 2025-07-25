// script.js

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


  document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon.");
    this.reset();
  });

