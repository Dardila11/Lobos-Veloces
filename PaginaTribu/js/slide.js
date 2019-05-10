var slideIndex = 1;
var slideIndexV = 1;
/*showSlides(slideIndex);
showSlidesV(slideIndexV);*/

window.onload = function loadSlides(){
    showSlides(slideIndex);
    showSlidesV(slideIndexV);
}


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function plusSlidesV(n) {
    showSlidesV(slideIndexV += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function currentSlideV(n) {
    showSlidesV(slideIndexV = n);
  }

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}

function showSlidesV(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesV");
    if (n > slides.length) {slideIndexV = 1} 
    if (n < 1) {slideIndexV = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slides[slideIndexV-1].style.display = "block"; 
  }