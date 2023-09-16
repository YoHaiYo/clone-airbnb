
/// 카테고리 넣기 
// Swiper 함수보다 먼저써야함! 나중에 쓰면 Swiper함수가 인식할 태그가 없음.
const categoryNameKr = [
  '방','컨테이너','캠프', '바다뷰', '수영장', '나무위','풍차', '커피'
  ,'숲속', '골프', '저택', '예술', '눈꽃', '무인도', '피아노', '속세탈출',
  '해수욕', '캠핑카', '성', '리조트', '볼링', '관광명소', '요리', '신규' 
];
// unsplash의 url 뒤에 한글은 겅색안됨. 어쩔 수 없이 영어검색용을 따로만든것.
const categoryNameEn = [
  'Room,interior','Container','Camping', 'Sea,interior', 'Pool,hotel', 'Tree,house','Windmill', 'Coffee,cafe'
  ,'Forest,house', 'Golf,hotel', 'Mansion', 'Art,home', 'Snow,house', 'Island,hotel', 'Piano', 'adventure,house',
  'Seaside,hotel', 'Camper,Van', 'Castle', 'resort,hotel', 'Bowling', 'Tourist Attraction', 'Cooking', 'New' 
];

/// categoryInsector : header-bottom의 카테고리 이름넣기 함수.
function categoryInsector(repeatNum) {
  const newList = [];
  let templet = "";
  for (let i = 1; i<=repeatNum; i++) {
    newList.push(`
    <div id=${categoryNameKr[i-1]} class="swiper-slide">
      <img class="category__icon" src="/images/category (${i}).jpg"/>
      <div class="category__icon-name">${categoryNameKr[i-1]}</div>
    </div>
  `)
  }
  templet = newList.join('');
  document.getElementById('categoryInsect').innerHTML = templet;
}
categoryInsector(repeatNum=24);

/// 카테고리 메뉴 클릭후 실행할 함수
function categoryLoad(i) {const myElement = document.getElementById(categoryNameKr[i]);
myElement.addEventListener("click", function() {

/// ContentsCard 넣기함수 정의
function contentsInsector(totalNum,imgThema) {
  const newList = [];
  let templet = "";
  let imgUrl = `https://source.unsplash.com/featured/?${imgThema}`;
  for (let i = 1; i<=totalNum; i++) {
    // imageUrl 뒤에 구분용 숫자(i) 넣어줘야 전부 다른이미지로 나옴 !!    
    newList.push(`
    <div class="contests-card">
      <img class="contests-card__image" src="${imgUrl} + ',' + ${i}" alt="${imgThema} + ${i}">      
      <div class="contests-card__bookmark">
        <i class="fa-regular fa-heart"></i>
      </div>
      <div class="contests-card__title">
        <div class="contests-card__title__area">성동구</div>
        <div class="contests-card__title__nation">, 한국</div>
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

// ContentsCard 넣기함수 실행. 이미지 url에는 영어 배열이 들어감.
contentsInsector(totalNum=24, imgThema=categoryNameEn[i]);
})};
/// 각 카테고리 클릭마다 함수실행
for (let i=0; i<categoryNameKr.length; i++){
  categoryLoad(i);
}

const swiper = new Swiper('.swiper', {
  /// Optional parameters
  slidesPerView: 16, // 한번에 보여줄 슬라이드 개수
  // spaceBetween: 10, // 슬라이드 사이 여백
  slidesPerGroup: 4, // 동시에 움직일 슬라이드 개수
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

/// 페이지 첫로드시 ContentsCard 넣기
function contentsInsector(totalNum,imgThema) {
  const newList = [];
  let templet = "";
  let imgUrl = `https://source.unsplash.com/featured/?${imgThema}`;
  for (let i = 1; i<=totalNum; i++) {
    // imageUrl 뒤에 구분용 숫자(i) 넣어줘야 전부 다른이미지로 나옴 !!    
    newList.push(`
    <div class="contests-card">
      <img class="contests-card__image" src="${imgUrl} + ',' + ${i}" alt="${imgThema} + ${i}">      
      <div class="contests-card__bookmark">
        <i class="fa-regular fa-heart"></i>
      </div>
      <div class="contests-card__title">
        <div class="contests-card__title__area">성동구</div>
        <div class="contests-card__title__nation">, 한국</div>
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
contentsInsector(totalNum=24, imgThema='Room,interior');
