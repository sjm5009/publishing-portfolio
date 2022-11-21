/* Swiper 전역변수 선언 */
let mainAdSwiper;
let bannerSwiper;
let goodsSwiper;
let styleSwiper;
let styleGoodsSwiper;
let videoSwiper;
$(function () {
  /* Header */
  // Header Scroll Event
  $(window).scroll(function (e) {
    let scrollY = window.scrollY;
    if (scrollY > 50) {
      $(".main-menu").addClass("active");
      $(".top-btn").addClass("active");
    } else {
      $(".main-menu").removeClass("active");
      $(".top-btn").removeClass("active");
    }
  });
  $(".main-menu").mouseenter(function () {
    $(".main-menu").removeClass("active");
  });
  // 메뉴 마우스오버시 서브메뉴 노출, 검색폼 비노출
  $(".menu a").mouseenter(function (e) {
    e.stopPropagation;
    let tabEle = $(this);
    showSubMenu(tabEle);
    hideSearchForm();
  });
  // 서브메뉴 마우스리브시 서브메뉴 비노출
  $(".sub-menu-box").mouseleave(function () {
    hideSubMenu();
  });
  // 로고, 유틸메뉴 마우스오버시 서브메뉴 비노출
  $(".util-menu, .logo").mouseenter(function () {
    hideSubMenu();
  });
  // 검색폼 마우스리브시 서브메뉴 비노출
  $(".search-area").mouseleave(function () {
    hideSearchForm();
  });
  // 검색폼 인풋박스 클린버튼 클릭시 텍스트 지우기
  $("#clear-btn").click(function () {
    $(".search-text").val("");
  });
  $(".menu-gnb-title.prev").click(function () {
    // 상위 메뉴로 슬라이드
    let parentWidth = $(".menu-view").innerWidth();
    // 하위 메뉴 활성화 초기화 id
    let activeItem = $(this).parent().attr("id");
    $(".menu-steps").animate(
      {
        left: `+=${parentWidth}`,
      },
      {
        duration: 300,
        done: function () {
          $(`#${activeItem}`).removeClass("active");
        },
      }
    );
  });
  // 하위메뉴 클릭 이벤트
  $(".mobile-menu-item").click(function () {
    // 하위 메뉴로 슬라이드
    let parentWidth = $(".menu-view").innerWidth();
    $(".menu-steps").animate(
      {
        left: `-=${parentWidth}`,
      },
      300
    );
    // 해당 하위 메뉴 생성
    let dataPath = $(this).attr("data-path");
    $(`#${dataPath}`).addClass("active");
  });
  // 메뉴 모달 열고닫기 버튼 클릭 이벤트
  $(".trigger").click(function () {
    $(this).toggleClass("active");
    $(".mobile-menu").toggleClass("active");
    $(".menu-step.step1 .mobile-menu-items-list").toggleClass("active");
    let flag = $(this).hasClass("active");
    if (flag) {
      hideSearchForm();
    } else {
      $(".menu-step.step2 .mobile-menu-items-list").removeClass("active");
      $(".menu-step.step3 .mobile-menu-items-list").removeClass("active");
      $(".menu-steps").css({ left: 0 });
    }
  });

  /* Section : Main-ad */
  // Main-ad Swiper
  mainAdSwiper = new Swiper(".main-ad-swiper", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
  // Main-ad Swiper 시작/멈춤 단추 추가 &작동 이벤트
  $(".main-ad-swiper .swiper-pagination").append('<i id="btn-play-pause"></i>');
  $("#btn-play-pause").click(function () {
    $(this).toggleClass("active");
    let flag = $(this).hasClass("active");
    if (flag) {
      stopMainAdSwiper();
    } else {
      startMainAdSwiper();
    }
  });
  // Main-ad Typing
  new TypeIt("#main-type-1", {
    strings: ["#업라이트", "'UPRIGHT'"],
    speed: 20,
    waitUntilVisible: true,
  }).go();
  new TypeIt("#main-type-2", {
    strings: ["올라운드 다운", "'쿠치다운'"],
    speed: 20,
    waitUntilVisible: true,
  }).go();
  new TypeIt("#main-type-3", {
    strings: ["CAMPING", "WEEK"],
    speed: 20,
    waitUntilVisible: true,
  }).go();

  /* Section : Main-banner Swiper */
  bannerSwiper = new Swiper(".banner-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".banner-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".banner-next-btn",
      prevEl: ".banner-prev-btn",
    },
    rewind: true,
    effect: "fade",
  });

  /* Section : Collection */
  // Collection Swiper
  goodsSwiper = new Swiper(".goods-swiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
    },
    slidesPerView: "auto",
    spaceBetween: 10,
    freeMode: true,
    breakpoints: {
      768: {
        spaceBetween: 35,
      },
    },
  });
  // Collection 섹션 탭 버튼 클릭
  $("#outer").show();
  $(".collection .tab-btns a").click(function (e) {
    e.preventDefault();
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    let tabDataAlt = $(this).attr("data-alt");
    $(".collection-item").removeClass("active");
    $(`#${tabDataAlt}`).addClass("active");
  });

  /* Section : Styling */
  // Styling 메인 Swiper
  styleSwiper = new Swiper(".style-swiper", {
    navigation: {
      nextEl: ".style-next-btn",
      prevEl: ".style-prev-btn",
    },
    pagination: {
      el: ".style-pagination",
      clickable: true,
    },
    rewind: true,
  });
  // Styling 서브 Swiper - 모바일
  styleGoodsSwiper = new Swiper(".style-goods-swiper", {
    scrollbar: {
      el: ".style-goods-scrollbar",
      hide: false,
      draggable: true,
    },
    slidesPerView: "auto",
    spaceBetween: 10,
    freeMode: true,
    breakpoints: {
      768: {
        spaceBetween: 35,
      },
    },
  });

  /* Section : Video Swiper */
  videoSwiper = new Swiper(".video-swiper", {
    slidesPerView: "auto",
    spaceBetween: 80,
    centeredSlides: true,
    navigation: {
      nextEl: ".video-next-btn",
      prevEl: ".video-prev-btn",
    },
  });

  /* Footer */
  // Select 박스 열고닫기
  $(".footer-select").click(function () {
    $(this).toggleClass("active");
  });
  // 모바일 회사 정보 박스 열고닫기
  $(".mobile-comp-name").click(function () {
    $(this).toggleClass("active");
    $("address").toggleClass("active");
  });
});

/* 공통 함수 */
// 서브메뉴 노츌
function showSubMenu(tabEle) {
  tabEle.siblings().removeClass("active");
  tabEle.addClass("active");
  let tabId = tabEle.attr("data-alt");
  $(".sub-menu-box").removeClass("active");
  $(`#${tabId}`).addClass("active");
  let height = $(".sub-menu-box.active").innerHeight();
  $(".sub-menu").addClass("active");
  $(".sub-menu.active").css("height", height + 60);
}
// 서브메뉴 비노출
function hideSubMenu() {
  $(".menu a").removeClass("active");
  $(".sub-menu-box").removeClass("active");
  $(".sub-menu").removeClass("active");
  $(".sub-menu").css("height", 0);
}
// 검색모달 노출
function showSearchForm() {
  $(".search-area").toggleClass("active");
  toggleBodyScroll();
}
// 검색모달 비노출
function hideSearchForm() {
  $(".search-area").removeClass("active");
  toggleBodyScroll();
}
// body 스크롤
function toggleBodyScroll() {
  let flag = $(".search-area").hasClass("active");
  if (flag) {
    $("body").addClass("active");
  } else {
    $("body").removeClass("active");
  }
}
// Main-ad Swiper 시작
function startMainAdSwiper() {
  mainAdSwiper.autoplay.start();
}
// Main-ad Swiper 멈충
function stopMainAdSwiper() {
  mainAdSwiper.autoplay.stop();
}
