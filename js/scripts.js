new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100,
  pagination: {
    el: '.project-pagination',
    bulletClass: 'project-bullet',
    bulletActiveClass: 'project-bullet-active',
    clickable: true
  },
});
