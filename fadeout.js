$(window).scroll(function(){
    $(".transparent-card").css("opacity", 1 - $(window).scrollTop() / 350);
  });