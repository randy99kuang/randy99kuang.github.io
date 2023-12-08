
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
  $('.top-bar-loading').removeClass('invisible');
  $('.bottom-bar-loading').removeClass('invisible');
  $('.transparent-card-loading').removeClass('invisible');


  setTimeout(function() {
    $('.overlay-loading').removeClass('will-fade-out');
    // $('body').removeClass('invisible');
  }, 1500);  

  setTimeout(function() {
    $('#nukeIt').remove();
  }, 2500);  // Delay of 3 seconds

});
