function openMenuMobile() {
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuBtnOpen = document.querySelector('.menu-btn-open');
  const menyBtnClose = document.querySelector('.menu-btn-close');

  const toogleMenu = () => mobileMenu.classList.toggle('is-open');

  menuBtnOpen.addEventListener('click', toogleMenu);
  menyBtnClose.addEventListener('click', toogleMenu);
}

export default openMenuMobile;
