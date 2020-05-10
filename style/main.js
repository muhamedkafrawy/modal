class Modal {
  constructor(button) {
    this.mainButton = button;
    this.getModalAndCloseElements();
    this.openModalOnButtonClick();
    this.handleOnCloseElementClick();
    this.handleOnWindowClick();
  }

  getModalAndCloseElements() {
    this.modalId = this.mainButton.getAttribute('data-modal');
    this.modal = document.getElementById(this.modalId);
    this.span = this.modal.querySelector('.close');
  }

  openModalOnButtonClick() {
    this.mainButton.addEventListener("click", () => {
      this.modal.style.display = "block";
    })
  }
  handleOnCloseElementClick() {
    this.span.addEventListener("click", () => {
      this.modal.style.display = "none";
    });
  }
  handleOnWindowClick() {
    window.addEventListener("click", (event) => {

      if (event.target == this.modal) {
        this.modal.style.display = "none";
      }
    });
  }

}

for (let btn of document.querySelectorAll('.btn')) {
  new Modal(btn);
}