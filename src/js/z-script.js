jQuery(document).ready(function($){


/* Аккордеон*/
  $('.sidebar__link').click(function(e){
    e.preventDefault();
    if($(this).next('.sidebar__sublist').is(":visible")) {
      $(this).next('.sidebar-link__sublist').slideUp();
      $(this).removeClass('sidebar__item--active');
    } else {
      $(this).closest('.sidebar').find('.sidebar__sublist').slideUp();
      $(this).closest('.sidebar').find('.sidebar__item').removeClass('sidebar__item--active');
      $(this).next('.sidebar__sublist').slideDown();
      $(this).addClass('sidebar__item--active');
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

