function initSwiper() {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    // loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      1279: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },

    // If we need pagination
    pagination: {
      el: '.pagination',
      bulletClass: 'pagination__button',
      bulletActiveClass: 'pagination__button_active',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.carousel__btn_next',
      prevEl: '.carousel__btn_prev',
    },
  });
}

export default initSwiper;
