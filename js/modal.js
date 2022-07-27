(() => {
  const refs = {
    openModalBtn: document.querySelector('[gallery-section-modal-all]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[gallery-section-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop__is-hidden');
  }
})();