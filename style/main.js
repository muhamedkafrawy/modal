// Get modal, close button and span element that closes the modal
var modal = document.getElementById("myModal");
var button = document.getElementById("modalButton");
var span = document.getElementsByClassName("close")[0];
// when click on the button the modal opens
button.onclick = function () {
modal.style.display = "block";
}
// when click on the close button the modal closes
span.onclick = function() {
modal.style.display = "none";
}
// when click on any part of the page the modal closes
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }