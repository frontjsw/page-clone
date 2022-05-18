window.onload = function () {
  const header = document.querySelector("header");

  header.addEventListener("mouseover", () => {
    header.classList.add("on");
  });
  header.addEventListener("mouseleave", () => {
    header.classList.remove("on");
  });

  const swiper = new Swiper(".main_vis", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });
};
