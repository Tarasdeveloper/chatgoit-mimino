const swiper = new Swiper('.about-rest-swiper-container', {
  navigation: {
    nextEl: '.about-rest-bth-right',
    prevEl: '.about-rest-bth-left',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    414: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
