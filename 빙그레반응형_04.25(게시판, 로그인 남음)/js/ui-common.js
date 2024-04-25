$(function () {
  // 서브메뉴 on
  $('.gnb').on('mouseenter', function () {
    $('#header').addClass('on');
  });
  $('#header').on('mouseleave', function () {
    $('#header').removeClass('on');
  });

  // header fixed
  const header = $('#header');
  $(window).on('scroll', function () {
    // 세로 스크롤바 위치
    let st = $(window).scrollTop();

    if (st > 0) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  });

  $('#header .lang').on('click', function () {
    $(this).toggleClass('on');
  });

  // 모바일 메뉴
  $('#header .open_btn').on('click', function () {
    $('body').toggleClass('on');
    // header.toggleClass('on');
    $(this).toggleClass('on');
    $('#header .m_gnb_wrap').toggleClass('on');
    $('#header .m_menu').addClass('on');
    $('.pc_ham').toggleClass('on');
    // 모바일 메뉴 열때 자동적으로 스크롤 맨 위로
    $('html, body').animate({ scrollTop: 0 }, 0);
    $('#header .gnb_wrap').toggleClass('hide');
  });

  $('#header .close_btn').on('click', function () {
    $('body').toggleClass('on');
    // header.toggleClass('on');
    $(this).toggleClass('on');
    $('#header .m_gnb_wrap').toggleClass('on');
    $('#header .open_btn').removeClass('on');
    $('#header .m_menu').removeClass('on');
  });

  // 모바일 아코디언 메뉴 => js 코드와 완전히 다름!!!
  $('.m_gnb>li>a').on('click', function () {
    $(this).parent().toggleClass('on');
    $(this).parent().siblings().removeClass('on');
  });

  // 검색창 placeholder
  $(document).ready(function () {
    var originalPlaceholder = '검색어를 입력해주세요';

    $('.search_area input[type=search]')
      .focus(function () {
        $(this).removeAttr('placeholder');
      })
      .blur(function () {
        $(this).attr('placeholder', originalPlaceholder);
      });
  });

  // Product Swiper
  let mainProduct = new Swiper('.main_product .swiper', {
    slidesPerView: 6,
    // 옆으로 넘기는거 안되게 하기.
    allowTouchMove: false,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  let moblieProduct = new Swiper('.m_product_wrapper .swiper', {
    slidesPerView: 3,
    // 한번에 슬라이드 되는 개수
    slidesPerGroup: 2,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // Brand Swiper
  let mainBrand = new Swiper('.main_brand .swiper', {
    slidesPerView: 4,
    // 옆으로 넘기는거 안되게 하기.
    allowTouchMove: false,
    breakpoints: {
      // PC perview
      1201: {
        slidesPerView: 6,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  let moblieBrand = new Swiper('.m_brand_wrapper .swiper', {
    slidesPerView: 3,
    // 한번에 슬라이드 되는 개수
    slidesPerGroup: 2,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // aos 초기화
  AOS.init({
    duration: 1000,
  });

  // scroll_btn 클릭 시 이동
  $('.footer .scroll_btn').on('click', function (e) {
    e.preventDefault();

    if ($(window).scrollTop() === 0) {
      let bottom = $(document).outerHeight() - $(window).outerHeight();
      $('html, body').animate({ scrollTop: bottom }, 1500);
    } else {
      $('html, body').animate({ scrollTop: 0 }, 1500);
    }
  });

  // 맨 위에서 화살표 방향 변경
  $(window).on('scroll', function () {
    if ($(this).scrollTop() <= 100) {
      $('.footer .scroll_btn').addClass('down');
    } else {
      $('.footer .scroll_btn').removeClass('down');
    }
  });
});
