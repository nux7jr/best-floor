document.addEventListener("DOMContentLoaded", function () {
  // swiper
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    slidesPerView: 1,

    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      // when window width is >= 320px

      // when window width is >= 640px
      640: {
        slidesPerView: 2,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
      },
    },
  });
  // theme
  const getPreferredColorScheme = () => {
    const darkQuery = "(prefers-color-scheme: dark)";
    const darkMQL = window.matchMedia ? window.matchMedia(darkQuery) : {};
    if (darkMQL.media === darkQuery && darkMQL.matches) {
      return "dark";
    }

    return "default";
  };
  // modal
  const modal = new HystModal({
    linkAttributeName: "openModal",
  });
  document.documentElement.setAttribute(
    "data-color-scheme",
    getPreferredColorScheme()
  );
  const toggleTheme = document.querySelector(".toggle-button");
  toggleTheme.addEventListener("click", () => {
    const colorScheme =
      document.documentElement.getAttribute("data-color-scheme");

    document.documentElement.setAttribute(
      "data-color-scheme",
      colorScheme === "default" ? "dark" : "default"
    );
  });
  // gsap
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
    });
  }
});
