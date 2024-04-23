$(document).ready(function () {
  //헤더호버
  $(".header_sec02")
    .on("mouseover", function () {
      $(".header").addClass("on");
    })
    .on("mouseout", function () {
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
    if ($(".header_sec02").css("display") === "block") {
      $(".header_sec02").css("display", "none");
      $(".hamberger_menu").addClass("on");
    } else {
      $(".header_sec02").css("display", "block");
      $(".hamberger_menu").removeClass("on");
    }
  });
});
