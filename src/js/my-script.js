// window.$ = window.jQuery =  require('jquery');
// window.slick =              require('./vendor/bower/slick');

jQuery(document).ready(function($){

  $('.promo-slider').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 900,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 4000
  });

  $('.js-news-slider').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
     responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }
  ]
  });

  $('.js-reviews-slider').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
     responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }
  ]
  });

});


