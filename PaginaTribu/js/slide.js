var slideIndex = 1;
var slideIndexV = 1;
showSlides(slideIndex);
showSlidesV(slideIndexV);


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
    showSlidesV(slideIndex = n);
  }

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  /*for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndex-1].style.display = "block"; 
  //dots[slideIndex-1].className += " active";
}

function showSlidesV(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesV");
    //var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndexV = 1} 
    if (n < 1) {slideIndexV = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    /*for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }*/
    slides[slideIndexV-1].style.display = "block"; 
    //dots[slideIndex-1].className += " active";
  }