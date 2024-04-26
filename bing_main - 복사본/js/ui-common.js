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

  //사이트맵토글

  $(".hamberger").on("click", function () {
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
  });
  //메인 슬라이더
});
