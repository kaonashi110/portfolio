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

// swiper.js