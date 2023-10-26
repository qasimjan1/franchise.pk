
// // ***********  swiper js*******

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },


  breakpoints: {
    640: {
      slidesPerView: 1,
      pagination: {
        clickable: true,
        dynamicBullets: true,
      },
    },
    768: {
      slidesPerView: 1,
      pagination: {
        clickable: true,
        dynamicBullets: true,
      },
    },
    1024: {
      slidesPerView: 2,
      pagination: {
        clickable: true,
        dynamicBullets: true,
      },
    },
  },
  
});







