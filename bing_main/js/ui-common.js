$(document).ready(function () {
  //헤더호버
  $(".header_sec02")
    .on("mouseover", function () {
      $(".header").addClass("on");
    })
    .on("mouseleave", function () {
      $(".header").removeClass("on");
    });

  //언어토글
  $(".lang").click(function () {
    if ($(".lang>ul").css("display") === "block") {
      $(".lang>ul").slideUp();
    } else {
      $(".lang>ul").slideDown();
    }
  });

  //사이트맵토글

  $(".hamberger").on("click", function () {
    let headerH = $("#header").css("height");
    if ($(".header_sec02").css("display") === "block") {
      $(".hamberger").addClass("checked");
      $(".header_sec02").css("display", "none");
      $(".hamberger_menu").addClass("on");
      $(".hm_close").css("display", "none");
      $(".header").css("height", "100px");
    } else {
      $(".hamberger").removeClass("checked");
      $(".header_sec02").css("display", "block");
      $(".hamberger_menu").removeClass("on");
      $(".header").css("height", "537px");
    }
  });
  //메인 슬라이더
  const mainSlider = new Swiper(".sec02_slider .swiper", {
    // Optional parameters
    loop: true,

    slidesPerView: 7,
    spaceBetween: 30,
    // If we need pagination
    pagination: {
      // el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      //el: ".swiper-scrollbar",
    },
  });
});
