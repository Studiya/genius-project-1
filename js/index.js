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

const swiper = new Swiper('.swiper', {
  // Optional parameters
    // loop: true,
    slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    1279: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },

  // If we need pagination
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button_active',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.carousel__btn_next',
    prevEl: '.carousel__btn_prev',
  },
});