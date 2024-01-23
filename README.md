## Preview
![airbnb_preview](https://github.com/YoHaiYo/clone-airbnb/assets/124754510/5f7b0e4f-61d8-4dab-ba44-72630ce632f4)

## 배포용 링크
https://yohayo-airbnb.netlify.app/

## 소개
에어비앤비의 주요 기능을 모방한 웹 애플리케이션입니다. 이 프로젝트는 웹 프론트엔드 개발 기술을 시연하기 위해 제작되었으며, 반응형 디자인과 동적 이미지 처리를 특징으로 합니다.

## 프로젝트 특징
1. Unsplash의 API를 사용하여 동적으로 카테고리에 맞는 이미지를 가져와서 숙소 이미지로 사용합니다. 
2. 가격, 별점, 날짜 등 숙소 데이터들을 js를 통해 랜덤으로 제시하여 사이트의 단조로움을 줄였습니다.
3. 반응형 웹 디자인을 통해 모든기기 화면사이즈에서 사용자 경험을 개선합니다.

## 사용 package
- swiper 10

## unsplash 활용코드

1. 랜덤이미지 가져오기. 랜덤이미지 밖에 못가져옴.
```html
<img src="https://source.unsplash.com/random/300x400" alt="unsplash_img>;
```  
2. 원하는 주제이미지 가져오기 (사이즈 변경은 안됨.)
```html
<img src="https://source.unsplash.com/featured/?banana" alt="unsplash_img">
```
3. 원하는 주제이미지 가져오기 (사이즈 변경은 style로.)
```html
<img src="https://source.unsplash.com/featured/?apple" alt="unsplash_img" style="height: 300px; width: 300px;">
```
