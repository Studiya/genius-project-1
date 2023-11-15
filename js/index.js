// import { openModal } from "./widgets/modal";
// openModal();

const modal = document.querySelector('.modal');
const modalBntOpen = document.querySelector('.modal-open-btn');
const modalBtnClose = document.querySelector('.modal__close-btn');

const toogleBtn = () => modal.classList.toggle('is-hidden');

modalBntOpen.addEventListener('click', toogleBtn);
modalBtnClose.addEventListener('click', toogleBtn);

const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menyBtnClose = document.querySelector('.menu-btn-close');

const toogleMenu = () => mobileMenu.classList.toggle('is-open');

menuBtnOpen.addEventListener('click', toogleMenu);
menyBtnClose.addEventListener('click', toogleMenu);