// Go to top functionality
const goTopButton = document.getElementById("go-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTopButton.style.display = "block";
  } else {
    goTopButton.style.display = "none";
  }
}

// Swiper slider functionality
const sliderMain = document.querySelector('.swiper-main');
const sliderNav = document.querySelector('.swiper-nav');
const sliderMobileOne = document.querySelector('.swiper-mobile-one');
const sliderMainTwo = document.querySelector('.swiper-main-two');
const sliderNavTwo = document.querySelector('.swiper-nav-two');
const sliderMobileTwo = document.querySelector('.swiper-mobile-two');
const sliderReviews = document.querySelector('.swiper-reviews');
const sliderTeam = document.querySelector('.swiper-team');

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

  const swiperNavTwo = new Swiper('.swiper-nav-two', {
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

  const swiperMainTwo = new Swiper('.swiper-main-two', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 100,
    thumbs: {
        swiper: swiperNavTwo,
      },
  });

  const swiperMobileTwo = new Swiper('.swiper-mobile-two', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiperReviews = new Swiper('.swiper-reviews', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiperTeam = new Swiper('.swiper-team', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


const dropdown = document.querySelector(".dropdown");
const toggle = document.querySelector(".toggle-dropdown");

toggle.addEventListener("click", () => {
  dropdown.classList.toggle("expanded");
});


