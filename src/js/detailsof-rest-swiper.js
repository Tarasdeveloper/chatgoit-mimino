const swiper = new Swiper('.details-rest-swiper-container', {
  navigation: {
    nextEl: '.rest-arrow-right',
    prevEl: '.rest-arrow-left',
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
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
