$('.header-slider').slick({
  speed: 1000,
  arrows: false,
  dots: true,
  vertical: true,
  dotsClass: 'header-dots',
  autoplay: 2000,
  verticalSwiping: true
});

$('.menu-btn').on('click', function(){
  $('.header-menu').slideToggle();
});