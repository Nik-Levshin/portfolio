$(function() {
  $('.slider-inner, .news-slider-inner').slick({
    speed: 900,
    infinite: false,
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
  });
  $('select').styler();
  $('.header-btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
  });
});