const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileNav = document.getElementById('mobile-nav');

hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    // Toggle aria-expanded attribute for accessibility
    const expanded = hamburgerMenu.getAttribute('aria-expanded') === 'true' || false;
    hamburgerMenu.setAttribute('aria-expanded', !expanded);
    mobileNav.setAttribute('aria-expanded', !expanded);
});
