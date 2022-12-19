var modal = document.getElementById("modal");
var btn = document.getElementById("openModal");

var span = document.getElementsByClassName("close")[0];

function OpenModal() {
    console.log("done!")
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function OpenModal() {
    console.log("done!")
  modal.style.display = "block";
}