// Swiper slider functionality
const sliderMain = document.querySelector('.swiper-main');
const sliderNav = document.querySelector('.swiper-nav');
const sliderMobileOne = document.querySelector('.swiper-mobile-one');

  const swiperNav = new Swiper('.swiper-nav', {
    slidesPerView: 3,
    direction: 'vertical',
    freeMode: true,
    speed: 400,
    spaceBetween: 5,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });

  const swiperMain = new Swiper('.swiper-main', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 100,
    thumbs: {
        swiper: swiperNav,
      },
  });

  const swiperMobileOne = new Swiper('.swiper-mobile-one', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
