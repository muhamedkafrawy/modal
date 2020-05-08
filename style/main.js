// Get modal, close button and span element that closes the modal
// when click on the button the modal opens
function showModal(button) {
  let modalId = button.getAttribute('data-modal');
  let modal = document.getElementById(modalId);
  let span = modal.querySelector('.close');
  button.addEventListener("click",  function () {
    modal.style.display = "block";
  })
  // when click on the close button the modal closes
  span.addEventListener ("click",function () {
    modal.style.display = "none";
  });
  // when click on any part of the page the modal closes
  window.addEventListener ("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
 }

for (let btn of document.querySelectorAll('.btn')) {
  showModal(btn);
}