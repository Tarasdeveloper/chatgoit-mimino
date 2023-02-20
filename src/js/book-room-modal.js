(() => {
    const refs = {
      openModalBtn: document.querySelector("[book-room-modal-open]"),
      closeModalBtn: document.querySelector("[book-room-modal-close]"),
      modal: document.querySelector("[book-room-data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();