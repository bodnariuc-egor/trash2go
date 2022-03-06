// Swiper slider functionality
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


  // Tabs show hide functionality

  const show = function (elem) {
    elem.style.display = 'block';
  };
  
  const hide = function (elem) {
    elem.style.display = 'none';
  };
  
  const toggle = function (elem) {
  
    // If the element is visible, hide it
    if (window.getComputedStyle(elem).display === 'block') {
      hide(elem);
      return;
    }
  
    // Otherwise, show it
    show(elem);
  
  };
  
  // Listen for click events
  document.addEventListener('click', function (event) {
  
    // Make sure clicked element is our toggle
    if (!event.target.classList.contains('toggle')) return;
  
    // Prevent default link behavior
    event.preventDefault();
  
    // Get the content
    let content = document.querySelector(event.target.hash);
    if (!content) return;
  
    // Toggle the content
    toggle(content);
  
  }, false);
