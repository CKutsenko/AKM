jQuery(document).ready(function($){


/* Аккордеон*/
  // $('.tree-nav__link').click(function(e){
  //   e.preventDefault();
  //    if($(this).next('.tree-nav__sublist').is(":visible")) {
  //     $(this).next('.tree-nav__sublist').slideUp();
  //     $(this).closest('.tree-nav__item').removeClass('tree-nav__item--active');
  //   } else {
  //     $(this).closest('.tree-nav').find('.tree-nav__sublist').slideUp();
  //     $(this).closest('.tree-nav').find('.tree-nav__item').removeClass('tree-nav__item--active');
  //     $(this).next('.tree-nav__sublist').slideDown();
  //     $(this).closest('.tree-nav__item').addClass('tree-nav__item--active');
  //   }
  // });

  /* Hamburger */

    $('.mobile-nav__hamburger').click(function(e){
      e.preventDefault();
      $(this).toggleClass('mobile-nav__hamburger--close');
      $('.sidebar__list').toggle();
    });

    $(function() {
      $('select').selectric({
         arrowButtonMarkup: '<b class="button"></b>',
      });
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

 $('.card__slider-top').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.card__slide'
});
$('.card__slide').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.card__slider-top',
  dots: false,
  arrows: false,
  focusOnSelect: true
});

});

