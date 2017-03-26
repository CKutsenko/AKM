jQuery(document).ready(function($){


/* Аккордеон*/
  $('.sidebar__link').click(function(e){
    e.preventDefault();
    if($(this).next('.sidebar__item').hasClass('sidebar__item--active')) {
      $(this).next('.sidebar__sublist').slideUp();
      $(this).closest('sidebar__item').removeClass('sidebar__item--active');
    } else {
      $(this).closest('.sidebar').find('.sidebar__sublist').slideUp();
      $(this).closest('.sidebar').find('.sidebar__item').removeClass('sidebar__item--active');
      $(this).next('.sidebar__sublist').slideDown();
      $(this).closest('sidebar__item').addClass('sidebar__item--active');
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
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000
  });


});

