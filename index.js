const navIcon = document.getElementById('nav-icon');
const mobileNav = document.getElementById('mobile-navigation');

navIcon.addEventListener('click', () => {
  navIcon.classList.toggle('active');
  
  if (navIcon.classList.contains('active')) {
    mobileNav.style.transform = 'scale(1)';
  }
  else mobileNav.style.transform = 'scale(0)'; 
});


window.addEventListener('resize', () => {
  if (window.innerWidth > 750) {
    mobileNav.style.transform = 'scale(0)';
  }
});
