export function toggleMenuMobile() {
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuOpenBtn = document.querySelector('.menu-btn-open');
  const menyCloseBtn = document.querySelector('.menu-btn-close');

  const toggleMenu = () => mobileMenu.classList.toggle('is-open');

  menuOpenBtn.addEventListener('click', toggleMenu);
  menyCloseBtn.addEventListener('click', toggleMenu);
}

export function closeMenuMobile() {
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuNavLinks = document.querySelectorAll('.mobile-menu__nav-link');

  const toggleMenu = () => mobileMenu.classList.toggle('is-open');

  for (let i = 0; i < [...menuNavLinks].length; i++) {
    menuNavLinks[i].addEventListener('click', toggleMenu);
  }
}
