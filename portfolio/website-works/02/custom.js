$(function () {
  /* Header 스크롤 이벤트 */
  $(window).scroll(function (e) {
    let scrollY = window.scrollY;
    // 위로 올리기 버튼 활성화
    if (scrollY > 50) {
      $(".top-btn").addClass("active");
    } else {
      $(".top-btn").removeClass("active");
    }
    // header 그림자 활성화
    if (scrollY > 630) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });

  /* Header Menu 이벤트 */
  // Menu-Modal 생성
  $("header .menu").click(function () {
    $("body").addClass("active");
    $(".menu-modal").addClass("active");
    $(".menu-inner").addClass("active");
  });
  // Header Search Form 생성
  $(".search-icon").click(function () {
    $(".header-search").show();
  });
  // Header Search Form 감추기
  $("#search-close").click(function () {
    $(".header-search").hide();
    $("#menu-search").val("");
  });
  // Header Search 삭제 버튼 클릭시 input 내용 삭제
  $("#del-text").click(function () {
    $("#menu-search").val("");
  });

  /* Section - Menu Modal */
  // Modal 기본 Menu 펼치기
  $(".sub-menu").hide();
  $("#sub-menu1").show();
  // Modal Menu 슬라이드
  $(".menu-more").click(function () {
    let menuNm = $(this).attr("data-menu");
    $(".sub-menu").stop().slideUp();
    $(`#sub-${menuNm}`).stop().slideDown();
    $(".menu-more").removeClass("active");
    $(this).addClass("active");
  });
  // Modal 닫기
  $("#btn-close").click(function () {
    $("body").removeClass("active");
    $(".menu-modal").removeClass("active");
    $(".menu-inner").removeClass("active");
  });

  /* Section - Content 5초마다 자동 슬라이드 */
  $("#main-desc-1").show();
  let slideNum = 1;
  setInterval(function () {
    let photoId = $(".main-photo-content.active").attr("id");
    let photoNum = photoId.split("-")[2];
    let nextNum = photoNum;
    if (photoNum == 3) {
      nextNum = 1;
    } else {
      nextNum++;
    }
    $(`#main-photo-${photoNum}`).removeClass("active");
    $(`#main-photo-${nextNum}`).addClass("active");
    $(`#sub-photo${photoNum}-1`).removeClass("active");
    $(`#sub-photo${nextNum}-1`).addClass("active");
    $(`#sub-photo${photoNum}-2`).removeClass("active");
    $(`#sub-photo${nextNum}-2`).addClass("active");
    $(`#main-desc-${photoNum}`).hide();
    $(`#main-desc-${nextNum}`).fadeIn(2000);
  }, 5000);

  /* Section - Display */
  let moreLimit = Math.floor($(".display-item").length / 4);
  let moreNum = 0;
  $(".display-item").hide();
  $(".display-item").slice(0, 4).show();
  // 탭 메뉴 클릭시 콘텐츠 변경
  $(".display-tabs a").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    let id = $(this).attr("id");
    $(".display-item").hide();
    if (id == "all") {
      $(".display-item").slice(0, 4).fadeIn();
    } else {
      moreNum = 0;
      $(`.display-item.${id}`).fadeIn();
    }
  });
  // 더보기 버튼 클릭
  $(".display-more").click(function () {
    if ($(".display-tabs a.active").attr("id") == "all") {
      let totalNum = $(".display-item").length;
      if (moreNum == moreLimit) {
        moreNum = 0;
      }
      moreNum++;
      let nextNum = moreNum + 1;
      if (totalNum > 4 * moreNum) {
        $(".display-item")
          .slice(4, 4 * nextNum)
          .fadeIn();
      }
    }
  });
  // 콘텐츠 hover, leave 이벤트
  $(".display-box").mouseover(function () {
    $(this).children(".hover-box").addClass("active");
  });
  $(".display-box").mouseleave(function () {
    $(this).children(".hover-box").removeClass("active");
  });

  /* Section - Display */
  // Slick Slider 초기화
  let innerWidth = $(window).innerWidth();
  if (innerWidth < 768) {
    $(".collection-cont").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
    });
  } else {
    $(".collection-cont").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      variableWidth: true,
    });
  }

  /* Footer */
  // Footer 툴팁 이벤트
  $(".area-item").click(function () {
    $(this).siblings().children(".area").removeClass("active");
    $(this).siblings().children(".area-info").removeClass("active");
    $(this).children(".area").toggleClass("active");
    $(this).children(".area-info").toggleClass("active");
  });
});
