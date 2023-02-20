const swiper = new Swiper('.swiper', {
   // Optional parameters
   loop: true,
 
   // Navigation arrows
   navigation: {
     nextEl: '.kitchen-button-left',
     prevEl: '.kitchen-button-right'
   },
   
   breakpoints: {
      320: {
        slidesPerView: 1.3,
      },
      414: {
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
 });
 