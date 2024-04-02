// banner slider
const bannerSlider = new Swiper(".banner-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1200,
  autoplay: true,
  breakpoints: {
    992: {
      autoplay: false,
    },
  },
  navigation: {
    nextEl: ".banner-slider-next",
    prevEl: ".banner-slider-prev",
  },
});

// gallery slider
const gallerySlider = new Swiper(".gallery-slider", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 11,
  speed: 1200,
  breakpoints: {
    992: {
      slidesPerView: 5,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 16,
    },
  },
  navigation: {
    nextEl: ".gallery-slider-next",
    prevEl: ".gallery-slider-prev",
  },
});

// lastest slider
const lastestList = document.querySelectorAll(".lastest-content .tab-pane");
if (lastestList) {
  const lastestSlider = {};
  lastestList.forEach((item, index) => {
    const prevBtn = `#${item.id} .lastest-slider-prev`;
    const nextBtn = `#${item.id} .lastest-slider-next`;
    const lastestSliderName = `lastestSlider${index + 1}`;
    const sliderName = `#${item.id} .lastest-slider`;
    lastestSlider[lastestSliderName] = new Swiper(sliderName, {
      slidesPerView: 2,
      spaceBetween: 20,
      speed: 1200,
      grid: {
        rows: 2,
        fill: "row",
      },
      breakpoints: {
        768: {
          spaceBetween: 20,
          slidesPerView: 2,
        },
        992: {
          spaceBetween: 20,
          slidesPerView: 4,
        },
        1200: {
          spaceBetween: 32,
          slidesPerView: 4,
        },
      },
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
    });
  });
}

// popular slider
const popularSlider = new Swiper(".popular-slider", {
  slidesPerView: 2,
  spaceBetween: 20,
  speed: 1200,
  grid: {
    rows: 2,
    fill: "row",
  },
  breakpoints: {
    768: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    992: {
      spaceBetween: 32,
      slidesPerView: 4,
    },
    1200: {
      spaceBetween: 32,
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".popular-slider-next",
    prevEl: ".popular-slider-prev",
  },
});
