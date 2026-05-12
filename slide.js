new Swiper(".card-wrapper", {
  loop: false,
  spaceBetween: 10,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
  },

  // Responsive breakpoints
  breakpoints: {
    1024: {
      slidesPerView: 1,
    },
  },
});
