const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector("#modal");
const closeModalButton = document.querySelector("#modal-close-button");
const cancelOrderButton = document.querySelector("#cancel-order-button");

cartButton.addEventListener("click", toggleModal);
closeModalButton.addEventListener("click", toggleModal);
cancelOrderButton.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("modal-open");
}
