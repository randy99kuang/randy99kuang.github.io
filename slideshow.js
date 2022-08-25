var slideIndex = 1;
// var slideIndex = [1,1];
// var slideId = ["mySlides", "mySlides2"]

showSlides(slideIndex);

// showSlides(1,0);
// showSlides(1,1);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  //showSlides(slideIndex[numSlide] += n, numSlide);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  //var slides = document.getElementsByClassName(slideId[numSlide]);
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  //slideIndex++;
  //if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  //setTimeout(showSlides, 6000); // Change image every 6 seconds
}

