/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
let dropDown = document.querySelector(".dropdown");
let dropDownTwo = document.querySelector(".dropdown-two");

dropDown.addEventListener('click', function(){
  dropDown.classList.toggle("show");
})

dropDownTwo.addEventListener('click', function(){
  dropDownTwo.classList.toggle("show");
})

  let main = document.querySelector("main")

  main.addEventListener("click", function(){
    if (dropDown.classList.contains('show')) {
      dropDown.classList.remove('show');
    }
  })



// tab bar mobile

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}