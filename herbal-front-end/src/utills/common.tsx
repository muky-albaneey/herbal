
export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 600, // Adjust speed for smoother transition
  grabCursor: true,
  touchEventsTarget: 'container' as const, // Specify the type explicitly
};
