const swiper = new Swiper('.about-hotel-swiper-container', {
  navigation: {
    nextEl: '.about-hotel-bth-right',
    prevEl: '.about-hotel-bth-left',
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
