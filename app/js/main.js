$(function () {

  $('.main__slider').slick({
    prevArrow: '<button type="button" class="slick-prev slick-btn"></button>',
    nextArrow: '<button type="button" class="slick-next slick-btn"></button>',
    slidesToScroll: 1,
    infinite: false,
  });

  $('.news__slider').slick({
    prevArrow: '<button type="button" class="slick-prev slick-btn"></button>',
    nextArrow: '<button type="button" class="slick-next slick-btn"></button>',
    infinite: true,
    slidesToShow: 1,
    variableWidth: true
  });

  $('.menu__btn, .menu ul li a').click(function () {
    $('.menu ul').slideToggle();
  });
  
});