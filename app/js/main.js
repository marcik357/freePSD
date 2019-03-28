$(function () {

  $('.main__slider, .news__slider').slick({
    prevArrow: '<button type="button" class="slick-prev slick-btn"></button>',
    nextArrow: '<button type="button" class="slick-next slick-btn"></button>',
    slidesToScroll: 1,
  });

  // $('.news__slider').slick({
  //   prevArrow: '<button type="button" class="slick-prev slick-btn"></button>',
  //   nextArrow: '<button type="button" class="slick-next slick-btn"></button>',
  //   slidesToShow: 1,
  //   variableWidth: true
  // });

  $('.menu__btn, .menu ul li a').click(function () {
    $('.menu ul').slideToggle();
  });

  $(".menu").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });
  
});