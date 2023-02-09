import Swiper, { Autoplay, Navigation, Pagination, Thumbs } from "swiper";
Swiper.use([Navigation, Pagination, Thumbs, Autoplay]);

export function swiperInit() {
 const catalogMetal = new Swiper('.catalog-metal__swiper', {
  breakpoints: {
    1280: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 0,
    }
  },
  pagination: {
    el: ".catalog-metal__swiper .swiper-pagination"
  }
 })
 const zagolovok = new Swiper('.zagolovok', {
  pagination: {
    el: ".zagolovok .swiper-pagination",
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    prevEl: '.zagolovok .swiper-button-prev',
    nextEl: '.zagolovok .swiper-button-next'
  }
 })
 const hits = new Swiper('.hits__swiper', {
  breakpoints: {
    1280: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 0,
    }
  },
  pagination: {
    el: ".hits__swiper .swiper-pagination"
  }
 })
 const cardSecond = new Swiper('.card-swiper__second', {
  slidesPerView: 3,
  breakpoints: {
    375: {
      spaceBetween: 4,
    },
    500: {
      spaceBetween: 24,
    }
  }
 })
 const cardMain = new Swiper('.card-swiper__main', {
  navigation: {
    prevEl: '.card-swiper__main .swiper-button-prev',
    nextEl: ".card-swiper__main .swiper-button-next"
  },
  thumbs: {
    swiper: cardSecond
  },
 })
}