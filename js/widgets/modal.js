function openModal() {
  const modal = document.querySelector('.modal');
  const modalOpenBtns = document.querySelectorAll('.modal-open-btn');
  const modalCloseBtn = document.querySelector('.modal__close-btn');

  const toogleBtn = () => modal.classList.toggle('hidden');

  for (let i = 0; i < [...modalOpenBtns].length; i++) {
    modalOpenBtns[i].addEventListener('click', toogleBtn);
  }
  modalCloseBtn.addEventListener('click', toogleBtn);
}

export default openModal;
