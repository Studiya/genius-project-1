// import { openModal } from "./widgets/modal";
// openModal();
const modal = document.querySelector('.modal');
const modalBntOpen = document.querySelector('.modal-open-btn');
const modalBtnClose = document.querySelector('.modal__close-btn');

const ToogleBtn = () => modal.classList.toggle('is-hidden');

modalBntOpen.addEventListener('click', ToogleBtn);
modalBtnClose.addEventListener('click', ToogleBtn);