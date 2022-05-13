const button = document.querySelector(".btn");

let modal;
let backdrop;

button.addEventListener("click", function () {
  if (modal) {
    return;
  }

  modal = document.createElement("div");
  modal.className = "modal";

  const modalText = document.createElement("p");
  modalText.textContent = "Are you sure";

  const modalCancelAction = document.createElement("button");
  modalCancelAction.textContent = "Cancel";
  modalCancelAction.className = "btn btn--alt";
  modalCancelAction.addEventListener("click", closeModalHandler);

  const modalConfirmAction = document.createElement("button");
  modalConfirmAction.textContent = "Confirm";
  modalConfirmAction.className = "btn btn--alt";
  modalConfirmAction.addEventListener("click", closeModalHandler);

  modal.append(modalText);
  modal.append(modalConfirmAction);
  modal.append(modalCancelAction);

  document.body.append(modal);

  backdrop = document.createElement("div");
  backdrop.className = "backdrop";
  backdrop.addEventListener("click", closeModalHandler);
  document.body.append(backdrop);
});

function closeModalHandler() {
  modal.remove();
  modal = null;
  backdrop.remove();
  backdrop = null;
}
