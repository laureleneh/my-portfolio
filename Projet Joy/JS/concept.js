let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



// Changement slide au clic vignettes
// $ ( document ) .ready ( function ( ) {
//   $ ( "#clic_manger" ) .click ( function ( ) {
//   $ ( ".carte" ) .replaceWith ( "#manger" ) ;
//   } ) ;
  
//   } ) ;

//   $ ( document ) .ready ( function ( ) {
//     $ ( "#clic_ecologie" ) .click ( function ( ) {
//     $ ( ".carte" ) .replaceWith ( "#ecologie" ) ;
//     } ) ;
    
//     } ) ;

//     $ ( document ) .ready ( function ( ) {
//       $ ( "#clic_culture" ) .click ( function ( ) {
//       $ ( ".carte" ) .replaceWith ( "#culture" ) ;
//       } ) ;
      
//       } ) ;

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// let manger = document.querySelector("#clic_manger");
// let ecologie = document.querySelector("#clic_ecologie");

// manger.addEventListener('click', function(){
//   manger.classList.toggle("show");
// })

// ecologie.addEventListener('click', function(){
//   ecologie.classList.toggle("show");
// })
  
//   // Close the dropdown menu if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('#manger')) {
//       var Manger = document.getElementsByClassName("#manger");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openManger = dropdowns[i];
//         if (openManger.classList.contains('show')) {
//           openManger.classList.remove('show');
//         }
//       }
//     }
//   }