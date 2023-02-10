import Swiper, { Autoplay, Navigation, Pagination, Thumbs } from "swiper";
Swiper.use([Navigation, Pagination, Thumbs, Autoplay]);

export function swiperInit() {
 const swiper = new Swiper('.swiper', {
   breakpoints: {
    320: {
      slidesPerView: 1,
    }
   },
   navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next"
   },
   pagination: {
    el: ".swiper-pagination"
   }
 })
}