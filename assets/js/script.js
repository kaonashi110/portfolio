// wow.js
new WOW().init();

// rellax.js
new Rellax('.js-rellax', {
  speed: -2, //速度
  center: true, //センタリング
  wrapper: null, //スクロールを監視する要素 指定しない場合はbodyになる
  round: true, //公式に説明がない・・・若干、止まるときにイーズが効くような？
  vertical: true, //縦パララックス
  horizontal: false //横パララックス
});

// Swiper.js
var bar = document.querySelector('.progressbar_in');
var speed = 5500;
window.onload = function() {
  // Swiper
  const slideLength = document.querySelectorAll('.swiper-container .swiper-slide').length
  if (slideLength > 4) {
    var swiper = new Swiper('.js-swiper-works', {
      spaceBetween: 50,
      slidesPerView: 1.5,
      centeredSlides: true,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 80,
        },
      },
      loop: true,
      autoplay: {
        delay: speed,
        disableOnInteraction: false,
      },
      loopAdditionalSlides: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          // let num = index + 1;
          return (
            '<div class="' +
            className +
            " circle-pagination" +
            '"><div class="circle-pagination_inner"></div></div>'
          );
        },
      },
    });
  } else {
    var swiper = new Swiper('.js-swiper-works', {
      spaceBetween: 50,
      slidesPerView: 1.5,
      centeredSlides: false,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 80,
        },
      },
    });
  }
}

const header = document.getElementById('header');
const content = document.getElementById('content');
const pageTop = document.getElementById('pageTop');

// header
function contentShow() {
  const contentTop = content.getBoundingClientRect().top + window.scrollY;
  const scrollY = window.scrollY;
  
  if (scrollY >= contentTop) {
    header.classList.add('is-show');
    pageTop.classList.add('is-show');
  } else {
    header.classList.remove('is-show');
    pageTop.classList.remove('is-show');
  }
}
// ページトップへスクロール
function scrollPageTop() {
  pageTop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// テキストポップアップアニメーション
const animationTargetElements = document.querySelectorAll(".js-text-popup");
for( let i =0; i < animationTargetElements.length; i++ ){
  const targetElement = animationTargetElements[i]
  texts = targetElement.textContent;
  textsArray = [];

  targetElement.textContent = "";

  for(let j =0; j < texts.split("").length; j++){
  textsArray.push('<span><span style="animation-delay: '+ ((j+12) * 0.18) +'s" >' + texts.split("")[j] + '<span></span>')
  }
  for(let k =0; k < textsArray.length; k++){
    targetElement.innerHTML += textsArray[k];
  }
}
// テキストタイピングアニメーション
var id = ['a']; //指定するidを全て配列で渡す
var tx = [];
var txCount = [];
var txSp = 60; // テキストの表示速度
var dly = 0; // 次の文章までの待ち時間
var count = 0;

function countSet(){ // 文字数カウントの初期設定
  for(n=0;n<id.length;n++){
    txCount[n] = 0;
  }
}
function kamikakushi(){ // 要素を取得して非表示（opacity:0;）にする
  for(i=0;i<id.length;i++){
    id[i] = document.getElementById(id[i]);
    tx[i] = id[i].firstChild.nodeValue; // 初期の文字列
    id[i].innerHTML = '';
  }
}
function itimozi(){ //　一文字ずつ表示
    id[count].innerHTML = tx[count].substr( 0, ++txCount[count] ); // テキストの指定した数の間の要素を表示
  if(tx[count].length != txCount[count]){ // Count が初期の文字列の文字数と同じになるまでループ
    setTimeout("itimozi()",txSp); // 次の文字へ進む
  }else{
  id[count].innerHTML = tx[count].substr( 0, ++txCount[count] ); // テキストの指定した数の間の要素を表示
    count++; // 次の段落に進む為のカウントアップ
    if(count != id.length){ // id数が最後なら終了
    setTimeout("itimozi()",dly); // 次の段落へ進む
    }
  }
}

// init
document.addEventListener("DOMContentLoaded", () => {
  contentShow();
  scrollPageTop();
  
  // テキストタイピングアニメーション
  kamikakushi();
  countSet();
  itimozi()

  window.addEventListener("scroll", contentShow);
  window.addEventListener("touchmove", contentShow);
});