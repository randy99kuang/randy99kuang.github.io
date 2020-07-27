

$(window).scroll(function(){
  $(".fade-out-bars-top").css("opacity", 1.2 - $(window).scrollTop() / 200);
});

$(window).scroll(function(){
    $(".transparent-card").css("opacity", 1.5 - $(window).scrollTop() / 200);
  });

$(window).scroll(function(){
  $(".fade-out-bars-bottom").css("opacity", 1.8 - $(window).scrollTop() / 200);
});


$(function() {
  $('body').removeClass('fade-out');
});


// var element = document.getElementById("myDIV");
// element.classList.add("fade-out");


// $(function() {
//   var element = document.getElementById("myDIV");
//   element.classList.remove('fade-out');
// });