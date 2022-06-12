"use strict";

window.onload = function () {
  var header = document.querySelector("header");
  var mainVis = document.querySelector(".main_vis").offsetHeight;
  window.addEventListener("scroll", function () {
    var winY = window.scrollY;

    if (winY > mainVis) {
      header.classList.add("on");
    } else {
      header.classList.remove("on");
    }
  });
  header.addEventListener("mouseover", function () {
    header.classList.add("on");
  });
  header.addEventListener("mouseleave", function () {
    var winY = window.scrollY;

    if (winY < mainVis) {
      header.classList.remove("on");
    }
  });
  var gnbLi = document.querySelectorAll(".gnb > li");
  var subGnb = document.querySelector(".sub_gnb");
  var subBack = document.querySelector(".sub_back");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var list = _step.value;
      list.addEventListener("mouseover", function () {
        list.classList.add("on");
        subBack.style.cssText = "visibility:visible; opacity:1;";
      });
      list.addEventListener("mouseleave", function () {
        list.classList.remove("on");
        subBack.style.cssText = "visibility:hidden; opacity:0;";
      });
    };

    for (var _iterator = gnbLi[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var mainSwiper = new Swiper(".mainSwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination"
    }
  });
  var con1Swiper = new Swiper(".con_slide1", {
    loop: true
  });
  var con2Swiper = new Swiper(".con_slide2", {
    loop: true
  });
  var con3Swiper = new Swiper(".con_slide3", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next.con3_navi",
      prevEl: ".swiper-button-prev.con3_navi"
    }
  });
  con1Swiper.controller.control = [con3Swiper, con2Swiper];
  con2Swiper.controller.control = con1Swiper;
  con3Swiper.controller.control = con1Swiper;
};