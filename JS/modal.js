(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();




const openButton = document.querySelector(".mobile-menu-open");
const mobileMenu = document.querySelector(".mobile-menu");
const closeButton = document.querySelector(".mobile-menu-close");

openButton.addEventListener("click", function () {
  mobileMenu.classList.add("is-open");
});

closeButton.addEventListener("click", function () {
  mobileMenu.classList.remove("is-open");
});