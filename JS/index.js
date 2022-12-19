 $(function() {
    $(".tabs-content").not(":first").hide()
    $(".tabs-head .tab").on("click", function(){
        $(".tabs-head .tab").removeClass("active").eq($(this).index()).addClass("active")
        $(".tabs-content").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active")
 })

var modal = document.getElementById("modal");
var btn = document.getElementById("openModal");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
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



let buttons = document.querySelectorAll('.pzu_button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    })
})

let buttons1 = document.querySelectorAll('.ozu_button');

buttons1.forEach(button => {
    button.addEventListener('click', function() {
        buttons1.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    })
})

let buttons2 = document.querySelectorAll('.color_button');

buttons2.forEach(button => {
    button.addEventListener('click', function() {
        buttons2.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    })
})
