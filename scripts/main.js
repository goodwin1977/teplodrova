$(document).ready(function () {
  $('.cil-slider').slick({
    arrows: true,
    nextArrow: '<div class="next-arrow"><img src="images/next-arrow.svg"></div>',
    prevArrow: '<div class="prev-arrow"><img src="images/prev-arrow.svg"></div>',
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1370,
      settings: {
        arrows: false,
      }
    }, ]
  });
  $('.ber-slider').slick({
    arrows: true,
    nextArrow: '<div class="next-arrow"><img src="images/next-arrow.svg"></div>',
    prevArrow: '<div class="prev-arrow"><img src="images/prev-arrow.svg"></div>',
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1370,
      settings: {
        arrows: false,
      }
    }, ]
  });

  if ($(window).width() <= 1280) {
    $('.e-mail').appendTo('.time');
  }

  if ($(window).width() <= 1024) {
    $('.header-connection_block').appendTo('.header-menu');
    $('.header-connection_block').toggleClass('mob');
    $('.time .e-mail').prependTo('.header-connection_block');
    $('.time .header-phone').clone().prependTo('.header-connection_block').before($('.header-connection_block .e-mail'));
  }
  if ($(window).width() <= 768) {
    $('.header-form form').appendTo('#exampleModal .modal-body');
    $('.copyright').appendTo('.copy-dev-mobile');
    $('.dev').appendTo('.copy-dev-mobile');
    $('.modal-order .header-form_btn').text('Связаться с менеджером');
    $('.modal-ok .header-form_btn').text('На главную');
  }

  $('.menu-burger').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('lock');
    $('.header').toggleClass('active');
    $('.menu-burger').toggleClass('active');
    $('.header-menu').toggleClass('active');
    if ($(window).width() <= 1024) {
      $('.header-menu .header-menu_item a').on('click', function () {
        $('body').removeClass('lock');
        $('.header').removeClass('active');
        $('.menu-burger').removeClass('active');
        $('.header-menu').removeClass('active');
      });
    }
  });

  if ($(window).width() <= 414) {
    $('.read_more').on('click', function (ev) {
      $(this).parent().toggleClass('show_read');
      if ($('.coal-card-body').hasClass('show_read')) {
        $(this).text('Свернуть');
      } else {
        $(this).text('Показать еще');
      }
    });
  }

  $("#phone").mask("+7(999) 999-99-99");
  $("#phone1").mask("+7(999) 999-99-99");
  $("#phone2").mask("+7(999) 999-99-99");

  // const config = {
  //   infobar: false,
  //   toolbar: false,
  //   arrows: false,
  //   zoom: false,
  // };

  // $('[data-fancybox="gallery"]').fancybox(config);
});

new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 1,
  speed: 2000,
  autoplay: {
    delay: 0,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  loop: true,
  freeMode: true,
  breakpoints: {
    1280: {
      slidesPerView: 5,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    414: {
      slidesPerView: 4,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    375: {
      slidesPerView: 4,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
  },
});

window.onscroll = function showHeader() {
  let header = document.querySelector('.header');
  if (window.pageYOffset > 80) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
};