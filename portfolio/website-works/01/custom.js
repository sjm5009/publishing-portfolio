$(function () {
  /* Header Scroll Event */
  $(window).scroll(function (e) {
    let scrollY = window.scrollY;
    if (scrollY > 50) {
      $("header").addClass("active");
      $(".top").addClass("active");
    } else {
      $("header").removeClass("active");
      $(".top").removeClass("active");
    }
  });
  /* Header Menu Event */
  // 메뉴 열고닫기
  $(".trigger").click(function () {
    $("body").toggleClass("active");
    $(".gnb").toggleClass("active");
    $(".trigger").toggleClass("active");
  });
  // 메뉴 닫기
  $("section").click(function () {
    $("body").removeClass("active");
    $(".gnb").removeClass("active");
    $(".trigger").removeClass("active");
  });

  /* Welcome Section - Slider */
  $(".main-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
  });

  /* Insta Section - Slider */
  let screen_width = window.innerWidth;
  if (screen_width < 768) {
    $(".insta-slider").slick({
      slidesToShow: 1,
      centerMode: true,
    });
  } else {
    $(".insta-slider").slick({
      slidesToShow: 5,
    });
  }

  /* Welcome Section - Type js */
  new TypeIt("#main-type", {
    strings: ["바르고 좋은 회사를 만든다."],
    speed: 70,
    waitUntilVisible: true,
  }).go();

  /* Faq Section - Slider Event */
  $(".faq-item").click(function () {
    $(this).children(".desc").slideDown();
    $(this).siblings().children(".desc").slideUp();
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });

  /* Library Section - Prev/Next Button Common Variable */
  let $step = $(".step");
  let $iframe = $(".library-left iframe");
  /* Library Section Prev Button Event */
  $(".media-arrow .prev").click(function () {
    let index = $(".step.active").index();
    if (index > 0 && index < 5) {
      $step.eq(index).removeClass("active");
      $step.eq(index - 1).addClass("active");
      $iframe.eq(index).removeClass("active");
      $iframe.eq(index - 1).addClass("active");
    }
  });
  /* Library Section - Next Button Event */
  $(".media-arrow .next").click(function () {
    let index = $(".step.active").index();
    if (index > -1 && index < 4) {
      $step.eq(index).removeClass("active");
      $step.eq(index + 1).addClass("active");
      $iframe.eq(index).removeClass("active");
      $iframe.eq(index + 1).addClass("active");
    }
  });
});
/* 화면 나타날때 적용한 Animation 실행 */
wow = new WOW({
  boxClass: "wow",
  mobile: true,
  offset: 150,
});
wow.init();
