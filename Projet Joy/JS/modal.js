// Estelle
// Get the modal
var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function () {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
});

// Edouard
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close2")[0];
btn2.onclick = function () {
  modal2.style.display = "block";
}
span2.onclick = function () {
  modal2.style.display = "none";
}
window.addEventListener("click", function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
});

// Helene
var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("myBtn3");
var span3 = document.getElementsByClassName("close3")[0];
btn3.onclick = function () {
  modal3.style.display = "block";
}
span3.onclick = function () {
  modal3.style.display = "none";
}
window.addEventListener("click", function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
});

// Ferre
var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("myBtn4");
var span4 = document.getElementsByClassName("close4")[0];
btn4.onclick = function () {
  modal4.style.display = "block";
}
span4.onclick = function () {
  modal4.style.display = "none";
}
window.addEventListener("click", function (event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
});

// Philippe
var modal5 = document.getElementById("myModal5");
var btn5 = document.getElementById("myBtn5");
var span5 = document.getElementsByClassName("close5")[0];
btn5.onclick = function () {
  modal5.style.display = "block";
}
span5.onclick = function () {
  modal5.style.display = "none";
}
window.addEventListener("click", function (event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
});

// Alexandra
var modal6 = document.getElementById("myModal6");
var btn6 = document.getElementById("myBtn6");
var span6 = document.getElementsByClassName("close6")[0];
btn6.onclick = function () {
  modal6.style.display = "block";
}
span6.onclick = function () {
  modal6.style.display = "none";
}
window.addEventListener("click", function (event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
});

// Bruno et Martine
var modal7 = document.getElementById("myModal7");
var btn7 = document.getElementById("myBtn7");
var span7 = document.getElementsByClassName("close7")[0];
btn7.onclick = function () {
  modal7.style.display = "block";
}
span7.onclick = function () {
  modal7.style.display = "none";
}
window.addEventListener("click", function (event) {
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
});