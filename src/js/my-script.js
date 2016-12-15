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

      $('.faq__subtitle').click(function(e){
    e.preventDefault();
    if($(this).next('.faq__subtext').is(":visible")) {
      $(this).next('.faq__subtext').slideUp();
      $(this).addClass('subtitle-close');
    } else {
      $(this).closest('.faq__accordion').find('.faq__subtext').slideUp();
      $(this).closest('.faq__accordion').find('.faq__subtitle').addClass('subtitle-close');
      $(this).next('.faq__subtext').slideDown();
      $(this).removeClass('subtitle-close');
    }
  });

  var navWidth = $('.nav-aside').outerWidth();
  $('.hamburger').click(function(e) {
      e.preventDefault();
      $(this).addClass('hamburger--close');
      $('body').css({'overflow':'hidden'});
      $(this).closest('body').find('.header').css({'right':(-navWidth)+'px'});
      $(this).closest('body').find('main').css({'right':(-navWidth)+'px'});
      $(this).closest('body').find('.nav-aside').css({'right':(-navWidth)+'px'});
  });
  $('.hamburger--close').click(function(e) {
      e.preventDefault();
      $(this).removeClass('hamburger--close');
      $('body').css({'overflow':'auto'});
      $(this).closest('body').find('.header').css({'right':0});
      $(this).closest('body').find('main').css({'right':0});
      $(this).closest('body').find('.nav-aside').css({'right':0});
  });

});


