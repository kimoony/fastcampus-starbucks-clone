// SEARCH CLCICK EVENT
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// BADGE
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener(
  "scroll",
  // _.throttle(함수, 시간(ms))
  _.throttle(function () {
    // console.log(window.scrollY);
    if (window.scrollY > 500) {
      // badge 숨기기
      // gsap.to(요소, 지속시간(s), 옵션)
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      // 상단 버튼 보이기
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      // badge 나타내기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 상단 버튼 숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);
// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
    scrollTo: 0,
  });
});

// VISUAL IMAGE(FADE IN)
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간(s), 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// SWIPER NOTICE
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

// SWIPER PROMOTION
new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, // 한 번에 보여줄 슬라드 수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드 가운데
  loop: true, // 반복 재생
  autoplay: {
    delay: 4000, // ms
  },
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});
// SWIPER AWARDS
new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleEl = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleEl.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김
    promotionEl.classList.add("hide");
  } else {
    // 보이기
    promotionEl.classList.remove("hide");
  }
});

// YOUTUBE

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    {
      // 옵션
      y: size,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: random(0, delay),
    }
  );
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

// ScrollMagic
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

// 올해가 몇 년도인지 계산
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
