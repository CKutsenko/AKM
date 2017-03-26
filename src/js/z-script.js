jQuery(document).ready(function($){


/* Аккордеон*/
  $('.sidebar-link__btn').click(function(e){
    e.preventDefault();
    if($(this).next('.sidebar-link__accordion').is(":visible")) {
      $(this).next('.sidebar-link__accordion').hide();
    } else {
      $(this).closest('.sidebar').find('.sidebar-link__accordion').hide();
      $(this).next('.sidebar-link__accordion').show();
    }
  });

  /* Hamburger */
  if ($(window).width() < 768) {
    var headerNavItem = $('.header .nav__item');
    $('.nav__hamburger').show();
    $(headerNavItem).hide();
    $('.hamburger').click(function(e){
      e.preventDefault();
      $(this).toggleClass('hamburger--close');
      $(headerNavItem).toggle();
    });
  }


  /* Карусель на карте */
  $('.map__wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  });


});

