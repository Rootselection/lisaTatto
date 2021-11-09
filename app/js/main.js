var scrollBottom = $(window).scrollTop() + $(window).height();

$(window).scroll(function(){
      if($(this).scrollTop() < 120) {
        $(".header-top").css("position","relative");
        $(".header-top").css("background-color","rgba(70,63,62,0.3)");
        $(".header-top").css("box-shadow","0 0 5px transparent");
        $(".header-top__inner").css("height","120px");
        $(".logo-svg").css("height","112px");
        $(".header-main").css("padding-top","0");
        
       } else if (scrollBottom  > 120) {
        $(".header-top").css("position","fixed");
        $(".header-top").css("background-color","#343031");
        $(".header-top").css("box-shadow","0 0 0 black");
        $(".header-top__inner").css("height","80px");
        $(".logo-svg").css("height","60px");
        $(".header-main").css("padding-top","120px");
      }
});
// 
$('.burger-btn').on('click', function(){
  $('.burger-btn').toggleClass('burger-btn--active');
  $('.nav').toggleClass('nav--active');
});
// 
$("#phone_with_ddd").mask("+38 (999) 999-99-99");
// 
$('.feedback-form-popup-mask').on('click', function(){
  $('.feedback-form-popup-mask').toggleClass('feedback-form-popup-mask--active');
  $('.feedback-form-popup').toggleClass('feedback-form-popup--active');
  $('body').toggleClass('body-scroll--null');
});
$('.header-main__btn').on('click', function(){
  $('.feedback-form-popup-mask').toggleClass('feedback-form-popup-mask--active');
  $('.feedback-form-popup').toggleClass('feedback-form-popup--active');
  $('body').toggleClass('body-scroll--null');
});
// 
// function initSlider() {
//   new Swiper('.swiper', {
//     draggable: true,
//     breakpoints: {
//       // when window width is >= 320px
//       880: {
//         slidesPerView: 1
//       },
//     }
     
//   });
// }
//   document.addEventListener('DOMContentLoaded', () => {
//     const width = window.innerWidth
//     if (width < 880){
//       const slider = new Swiper()
//     }
//   });
  
// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

var swiper = null;
var mediaQuerySize = 880;

function swiperInit () {
  if (!swiper) {
    swiper = new Swiper('.swiper', {
      // ... ваши опции
      direction: 'horizontal',
      loop: true,
      arrows: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}

function swiperDestroy () {
  if (swiper) {
    swiper.destroy();
    swiper = null;
  }
}

$(window).on('load resize', function () {
  // Берём текущую ширину экрана
  var windowWidth = $(this).innerWidth();
  
  // Если ширина экрана меньше или равна mediaQuerySize(1024)
  if (windowWidth <= mediaQuerySize) {
    // Инициализировать слайдер если он ещё не был инициализирован
    swiperInit()
  } else {
    // Уничтожить слайдер если он был инициализирован
    swiperDestroy()
  }
});
