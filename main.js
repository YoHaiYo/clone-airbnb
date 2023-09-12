
/// 카테고리 넣기 
// Swiper 함수보다 먼저써야함! 나중에 쓰면 Swiper함수가 인식할 태그가 없음.
function htmlInsector(repeatNum) {
  const newList = [];
  let templet = "";
  for (let i = 1; i<=repeatNum; i++) {
    newList.push(`
    <div class="swiper-slide">
      <img class="category__icon" src="/images/category (${i}).jpg"/>
      <div class="category__icon-name">분류${i}</div>
    </div>
  `)
  }
  templet = newList.join('');
  document.getElementById('categoryInsect').innerHTML = templet;
}
htmlInsector(repeatNum=36);

const swiper = new Swiper('.swiper', {
  /// Optional parameters
  slidesPerView: 18, // 한번에 보여줄 슬라이드 개수
  // spaceBetween: 10, // 슬라이드 사이 여백
  slidesPerGroup: 7, // 동시에 움직일 슬라이드 개수
  centeredSlides: false, // 1번 슬라이드가 가운데 보이기
  direction: 'horizontal',
  loop: false,
  /// If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  /// And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

  