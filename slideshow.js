var slideIndex = 1;
var timer = 0;
// var slideIndex = [1,1];
// var slideId = ["mySlides", "mySlides2"]

showSlides(slideIndex);

// showSlides(1,0);
// showSlides(1,1);

// Next/previous controls
function plusSlides(n) {
  timer = 0;
  showSlides(slideIndex += n);
  //showSlides(slideIndex[numSlide] += n, numSlide);
}

// Thumbnail image controls
function currentSlide(n) {
  timer = 0;
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
}




// to set auto-interval, just do TRESHOLD / 10 = num seconds you want per interval
var THRESHOLD = 50;
function looper() {
  timer += 5;
  
  if (timer >= THRESHOLD) {
  	timer = 0;
    plusSlides(1);
  }
  setTimeout(looper, 500);
}

setTimeout(looper, 1);


//////////////// SLIDESHOW 2 on index.html



var slideIndex2 = 1;
var timer2 = 0;
// var slideIndex = [1,1];
// var slideId = ["mySlides", "mySlides2"]

showSlides2(slideIndex2);

// showSlides(1,0);
// showSlides(1,1);

// Next/previous controls
function plusSlides2(n) {
  timer2 = 0;
  showSlides2(slideIndex2 += n);
  //showSlides(slideIndex[numSlide] += n, numSlide);
}

// Thumbnail image controls
function currentSlide2(n) {
  timer2 = 0;
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("groupPhotos");
  //var slides = document.getElementsByClassName(slideId[numSlide]);
  var dots = document.getElementsByClassName("dotGroupPhoto");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  //slideIndex++;
  //if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " active";
}




// to set auto-interval, just do TRESHOLD / 10 = num seconds you want per interval
var THRESHOLD2 = 50;
function looper2() {
  timer2 += 5;
  
  if (timer2 >= THRESHOLD2) {
  	timer2 = 0;
    plusSlides2(1);
  }
  setTimeout(looper2, 500);
}

setTimeout(looper2, 1);
