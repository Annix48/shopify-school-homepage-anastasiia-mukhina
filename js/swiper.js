document.addEventListener("DOMContentLoaded", () => {
  const heroSwiper = new Swiper(".hero-slider", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

const featuredSwiper = new Swiper(".featured-slider", {
  slidesPerView: 4,
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      // mobile
      slidesPerView: 1.1,
      spaceBetween: 12,
    },
    768: {
      // tablet
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
    1280: {
      // desktop
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
