const sliderMain = document.querySelector('.swiper-main');
const sliderNav = document.querySelector('.swiper-nav');

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

