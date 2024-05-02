$(document).ready(function () {
  //헤더호버
  $(".gnb>li")
    .on("mouseover", function () {
      $("#header").addClass("on");
    })
    .on("mouseleave", function () {
      $("#header").removeClass("on");
    });

  //언어토글
  $(".lang").click(function () {
    $(this).toggleClass("on");
  });

  //사이트맵토글;

  $(".hamberger").on("click", function () {
    let windowWidth = $(window).width();
    if (windowWidth > 1200) {
      $(this).toggleClass("checked");
      if (!$(".hamberger").hasClass("checked")) {
        $(".pc_ham").css("visibility", "hidden");
      } else {
        $(".pc_ham").css({
          opacity: 1,
          visibility: "visible",
          transition: "all 0.5s",
        });
      }
    } else {
      $(this).toggleClass("checked");
      if (!$(".hamberger").hasClass("checked")) {
        $(".m_gnb_wrap").removeClass("on");
      } else {
        $(".m_gnb_wrap").addClass("on");
      }
    }
  });

  //상품 슬라이더
  let mainProduct = new Swiper(".main_product .swiper", {
    slidesPerView: 6,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 브랜드 슬라이더
  let mainBrand = new Swiper(".main_brand .swiper", {
    slidesPerView: 4,
    breakpoints: {
      // PC perview
      1201: {
        slidesPerView: 6,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //브랜드 슬라이더 .on
  $(".main_brand .swiper ul>li").on("mouseenter", function () {
    $(this)
      .addClass("on")
      .on("mouseleave", function () {
        $(".main_brand .swiper ul>li").removeClass("on");
      });
    $;
  });

  $(window).on("scroll", function () {
    let sct = $(window).scrollTop();
    if (sct > 0) {
      $("#header").addClass("fixed");
    } else {
      $("#header").removeClass("fixed");
    }

    if (sct < 300) {
      $(".btn_wrap .scroll_btn img").css("transform", "rotate(" + 180 + "deg)");
    } else if (sct >= 300) {
      $(".btn_wrap .scroll_btn img").css("transform", "rotate(" + 0 + "deg)");
    }
  });

  $("#footer .scroll_btn").on("click", function () {
    let sct = $(window).scrollTop();
    let hei = $(window).prop("scrollHeight");
    let scrY = sct < 300 ? 2955 : -sct;

    window.scrollBy({
      top: scrY,
      left: 0,
      behavior: "smooth",
    });
  });
});
