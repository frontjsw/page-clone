window.onload = function () {
  const header = document.querySelector("header");

  header.addEventListener("mouseover", () => {
    header.classList.add("on");
  });
  header.addEventListener("mouseleave", () => {
    header.classList.remove("on");
  });

  const gnb = document.querySelectorAll(".gnb > li");
  const subGnb = document.querySelector(".sub_gnb");
  const subBack = document.querySelector(".sub_back");
  gnb.forEach((element) => {});

  for (const list of gnb) {
    list.addEventListener("mouseover", () => {
      list.classList.add("on");
      subBack.style.cssText = "visibility:visible; opacity:1;";
    });
    list.addEventListener("mouseleave", () => {
      list.classList.remove("on");
      subBack.style.cssText = "visibility:hidden; opacity:0;";
    });
  }

  const mainSwiper = new Swiper(".mainSwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });
  const con1Swiper = new Swiper(".con_slide1", {
    loop: true,
  });
  const con2Swiper = new Swiper(".con_slide2", {
    loop: true,
  });
  const con3Swiper = new Swiper(".con_slide3", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next.con3_navi",
      prevEl: ".swiper-button-prev.con3_navi",
    },
  });
  con1Swiper.controller.control = [con3Swiper, con2Swiper];
  con2Swiper.controller.control = con1Swiper;
  con3Swiper.controller.control = con1Swiper;
};
