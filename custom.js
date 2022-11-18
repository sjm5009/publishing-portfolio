$(function () {
  $(window).resize(function () {
    let viewWidth = window.innerWidth;
    if (viewWidth > 500) {
      $(".modal-btns .iloom-mobile").attr("href", "#iloom-full-m");
      $(".modal-btns .art-mobile").attr("href", "#art-full-m");
      $(".modal-btns .kolon-mobile").attr("href", "#kolon-full-m");
    } else {
      $(".modal-btns .iloom-mobile").attr("href", "#iloom-full-w");
      $(".modal-btns .art-mobile").attr("href", "#art-full-w");
      $(".modal-btns .kolon-mobile").attr("href", "#kolon-full-w");
    }
  });

  /* Header */
  $("header").mouseenter(function () {
    $("header").addClass("active");
  });
  $("header").mouseleave(function () {
    $("header").removeClass("active");
  });
  $(".nav-btn").click(function () {
    $("body").toggleClass("active");
    $("nav").toggleClass("active");
    $(this).toggleClass("active");
  });

  /* Web Publishing 페이지 버튼 조작 */
  $(".view-prev").addClass("off");
  let nowOn = $(".view-btns span.on").index();
  let viewBtns = $(".view-btns span").length;
  let lastViewBtn = viewBtns - 1;
  let $webContent = $(".web-content");
  let $viewBtn = $(".view-btns span");
  // 이전 버튼
  $(".view-prev").click(function () {
    nowOn = $(".view-btns span.on").index();
    if (nowOn > 0) {
      $(this).removeClass("off");
      $viewBtn.siblings().removeClass("on");
      $viewBtn.eq(nowOn - 1).addClass("on");
    }
    if (nowOn == 1) {
      $(this).addClass("off");
    }
    if (nowOn < viewBtns) {
      $(".view-next").removeClass("off");
    }
  });
  // 다음 버튼
  $(".view-next").click(function () {
    nowOn = $(".view-btns span.on").index();
    if (nowOn < lastViewBtn) {
      $(this).removeClass("off");
      $viewBtn.siblings().removeClass("on");
      $viewBtn.eq(nowOn + 1).addClass("on");
    }
    if (nowOn == lastViewBtn - 1) {
      $(this).addClass("off");
    }
    if (nowOn >= 0) {
      $(".view-prev").removeClass("off");
    }
  });
  // 이전,다음 버튼 공통
  $(".view-btn").click(function () {
    nowOn = $(".view-btns span.on").index();
    $webContent.siblings().removeClass("active");
    $webContent.eq(nowOn).addClass("active");
  });
  //하탄 순서탭버튼
  $(".view-btns span").click(function () {
    $(this).addClass("on");
    $(this).siblings().removeClass("on");
    nowOn = $(".view-btns span.on").index();
    $webContent.siblings().removeClass("active");
    $webContent.eq(nowOn).addClass("active");
    if (nowOn > 0) {
      $(".view-prev").removeClass("off");
    }
    if (nowOn == lastViewBtn) {
      $(".view-next").addClass("off");
    }
    if (nowOn == 0) {
      $(".view-prev").addClass("off");
    }
    if (nowOn < lastViewBtn) {
      $(".view-next").removeClass("off");
    }
  });
});
