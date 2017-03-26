jQuery(document).ready(function($){


/* Аккордеон*/
  $('.sidebar__link').click(function(e){
    e.preventDefault();
     if($(this).next('.sidebar__sublist').is(":visible")) {
      $(this).next('.sidebar__sublist').slideUp();
      $(this).closest('.sidebar__item').removeClass('sidebar__item--active');
    } else {
      $(this).closest('.sidebar').find('.sidebar__sublist').slideUp();
      $(this).closest('.sidebar').find('.sidebar__item').removeClass('sidebar__item--active');
      $(this).next('.sidebar__sublist').slideDown();
      $(this).closest('.sidebar__item').addClass('sidebar__item--active');
    }
  });

  /* Hamburger */

    $('.mobile-nav__hamburger').click(function(e){
      e.preventDefault();
      $(this).toggleClass('mobile-nav__hamburger--close');
      $('.sidebar__list').toggle();
    });



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

