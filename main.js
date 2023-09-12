
/// 카테고리 넣기 
// Swiper 함수보다 먼저써야함! 나중에 쓰면 Swiper함수가 인식할 태그가 없음.
function categoryInsector(repeatNum) {
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
categoryInsector(repeatNum=36);

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

/// ContentsCard 넣기
function contentsInsector(repeatNum) {
  const newList = [];
  let templet = "";
  for (let i = 1; i<=repeatNum; i++) {
    newList.push(`
    <div class="contests-card">
      <img class="contests-card__image" src="/images/room-01.jpeg" alt="room-01">      
      <div class="contests-card__bookmark">
        <i class="fa-regular fa-heart"></i>
      </div>
      <div class="contests-card__title">
        <div class="contests-card__title__area">성동구, </div>
        <div class="contests-card__title__nation">한국</div>
        <div class="contests-card__title__grade">★ 4.52</div>
      </div>
      <div class="contests-card__distance">12km 거리</div>
      <div class="contests-card__date">9월 21일~26일</div>
      <div class="contests-card__price">₩107,318 /박</div>
    </div>
  `)
  }
  templet = newList.join('');
  document.getElementById('contentsInsect').innerHTML = templet;
}
contentsInsector(repeatNum=24);

  