new Swiper('.swiper', {
  navigation: {
    nextEl: '.about-rest-bth-right',
    prevEl: '.about-rest-bth-left',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
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
