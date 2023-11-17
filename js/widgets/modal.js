function openModal() {
  console.log('hi');

  const modal = document.querySelector('.modal');
  const modalBntsOpen = document.querySelectorAll('.modal-open-btn');
  const modalBtnClose = document.querySelector('.modal__close-btn');

  const toogleBtn = () => modal.classList.toggle('hidden');

  for (let i = 0; i < [...modalBntsOpen].length; i++) {
    modalBntsOpen[i].addEventListener('click', toogleBtn);
  }
  modalBtnClose.addEventListener('click', toogleBtn);
}

export default openModal;
