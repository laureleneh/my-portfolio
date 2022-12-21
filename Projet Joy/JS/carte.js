const retour = document.querySelector(".retour");

// toggle 'scroll to top' based on scroll position
window.addEventListener('scroll', e => {
  retour.style.display = window.scrollY > 1200 ? 'block' : 'none';
});