
/// 카테고리 넣기 
// Swiper 함수보다 먼저써야함! 나중에 쓰면 Swiper함수가 인식할 태그가 없음.
const categoryNameKr = [
  '방','컨테이너','캠프', '바다뷰', '수영장', '나무위','풍차', '커피'
  ,'숲속', '골프', '저택', '예술', '눈꽃', '섬', '피아노', '속세탈출',
  '해수욕', '캠핑카', '성', '리조트', '볼링', '관광명소', '요리', '신규' 
];
// unsplash의 url 뒤에 한글은 겅색안됨. 어쩔 수 없이 영어검색용을 따로만든것.
const categoryNameEn = [
  'Room,interior','Container','Camping', 'Sea,interior', 'Pool,hotel', 'Tree,house','Windmill', 'Coffee,cafe'
  ,'Forest,house', 'Golf,hotel', 'Mansion', 'Art,home', 'Snow,house', 'Island,hotel', 'Piano', 'adventure,house',
  'Seaside,hotel', 'Camper,Van', 'Castle', 'resort,hotel', 'Bowling', 'Tourist Attraction', 'Cooking', 'New' 
];

/// contents-card에 들어갈 내용 함수
{ 
  function getMinMaxNum(min, max, tofixed) {
  return ((Math.random() * (max - min)) + min).toFixed(tofixed);
};

function getArea() {
  const areaArray = [
    'Gangnam-gu, South Korea', 'Shinjuku, Japan', 'Tuscany, Italy', 'Bondi Beach, Australia', 
    'Copacabana, Brazil', 'Giza, Egypt', 'Manhattan, United States', 'Red Square, Russia',
    'Taj Mahal, Agra', 'Machu Picchu, Peru', 'Santorini, Greece', 'Venice, Italy', 
    'Rio de Janeiro, Brazil', 'Dubai, United Arab Emirates', 'Kyoto, Japan', 'Cusco, Peru', 
    'Amsterdam, Netherlands', 'Plitvice Lakes National Park, Croatia', 'Cappadocia, Turkey', 'Sapa, Vietnam'
    ];
  const randomIndex = Math.floor(Math.random() * areaArray.length);
  return areaArray[randomIndex];
};

function formatCurrency(amount) {
  // 숫자를 반올림하여 정수로 만듭니다.
  const roundedAmount = Math.round(amount);
  // 반올림된 숫자를 통화 형식의 문자열로 변환합니다.
  return '₩' + roundedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

function getRandomDate() {

  function formatDateToMonthDay(date) {
    const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
    const day = date.getDate();
    return `${month}월 ${day}일`;
  }
  
  const currentDate = new Date();
  const oneWeekInMillis = 7 * 24 * 60 * 60 * 1000;
  const oneMonthInMillis = 30 * 24 * 60 * 60 * 1000;
  
  const randomOffsetA = Math.random() * oneWeekInMillis;
  const randomDateA = new Date(currentDate.getTime() + randomOffsetA);
  
  const randomOffsetB = Math.random() * oneMonthInMillis;
  const randomDateB = new Date(randomDateA.getTime() + randomOffsetB);
  
  return formatDateToMonthDay(randomDateA)+' ~ '+formatDateToMonthDay(randomDateB)
}
}
  
/// ContentsCard 넣기함수 정의
function contentsInsector(totalNum,imgThema) {
  const newList = [];
  let templet = "";
  let imgUrl = `https://source.unsplash.com/featured/?${imgThema}`;
  for (let i = 1; i<=totalNum; i++) {
    // imageUrl 뒤에 구분용 숫자(i) 넣어줘야 전부 다른이미지로 나옴 !!    
    newList.push(`
    <div class="contents-card">
      <img class="contents-card__image" src="${imgUrl} + ',' + ${i}" alt="${imgThema} + ${i}">      
      <div class="contents-card__bookmark">
        
      </div>
      <div class="contents-card__title">
        <div class="contents-card__title__area">${getArea()}</div>
        <div class="contents-card__title__grade">★ ${getMinMaxNum(min=3,max=5,tofixed=2)}</div>
      </div>
      <div class="contents-card__distance">${getMinMaxNum(min=25,max=500,tofixed=0)}km 거리</div>
      <div class="contents-card__date">${getRandomDate()}</div>
      <div class="contents-card__price">${formatCurrency(getMinMaxNum(min=50000,max=500000,tofixed=0))} /박</div>
    </div>
  `)
  }
  templet = newList.join('');
  document.getElementById('contentsInsect').innerHTML = templet;
}
/// 페이지 로드시 최소 실행될 카테고리.
contentsInsector(24,'Room,interior');

/// categoryInsector : header-bottom의 카테고리 이름넣기 함수.
(function categoryInsector(repeatNum=24) {
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
})();

/// 카테고리 메뉴 클릭후 실행할 함수
function categoryLoad(i) {const myElement = document.getElementById(categoryNameKr[i]);
myElement.addEventListener("click", function() {

// ContentsCard 넣기함수 실행. 이미지 url에는 영어 배열이 들어감.
contentsInsector(totalNum=24, imgThema=categoryNameEn[i]);
})};

/// 각 카테고리 클릭마다 함수실행
for (let i=0; i<categoryNameKr.length; i++){
  categoryLoad(i);
}

/// SWIPER
const swiper = new Swiper('.swiper', {
  /// Optional parameters
  slidesPerView: 16, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  slidesPerGroup: 4, // 동시에 움직일 슬라이드 개수
  // 미디어쿼리적용
  breakpoints: {
    100: { slidesPerView: 1 },
    200: { slidesPerView: 2 },
    300: { slidesPerView: 3 },
    400: { slidesPerView: 4 },
    500: { slidesPerView: 5 },
    600: { slidesPerView: 6 },
    700: { slidesPerView: 7 },
    800: { slidesPerView: 8 },
    900: { slidesPerView: 9 },
    1000: { slidesPerView: 10 },
    1100: { slidesPerView: 11 },
    1200: { slidesPerView: 12 },
    1300: { slidesPerView: 13 },
    1400: { slidesPerView: 14 },
    1500: { slidesPerView: 15 }
  },
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

