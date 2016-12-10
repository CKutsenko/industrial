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


});


