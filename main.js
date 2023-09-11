const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 18, // 한번에 보여줄 슬라이드 개수
  // spaceBetween: 10, // 슬라이드 사이 여백
  slidesPerGroup: 6, // 동시에 움직일 슬라이드 개수
  centeredSlides: false, // 1번 슬라이드가 가운데 보이기
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

/// 카테고리 넣기
function categoryInsect(categoryNum){
  for (let i = 1; i <= categoryNum; i++) {
    document.write(`
      <div class="swiper-slide">
        <img class="category__icon" src="/images/category (${i}).jpg"/>
        <div class="category__icon-name">Category ${i}</div>
      </div>
    `);
  }
}
categoryInsect(36);
  