window.onload = function () {
  cntpage.innerHTML = "1 / 3";
  subtextbox.innerHTML =
    "<div class='p0cover'> <div class='bg'><div class='apBg apBg01'></div><div class='apBg apBg02'></div><div class='apBg apBg03'></div><div class='apBg apBg04'></div><div class='apBg apBg05'></div><div class='apBg apBg06'></div><div class='apBg apBg07'></div></div></div><div class='scrolldown'></div><div class='dot'></div></div>";
  element.className = "line";
  var cecktest = ""; //text
};

// スクロールイベントを設定
//スクロールされた時
var timer = false;
$(window).scroll(function () {
  if (timer !== false) {
    clearTimeout(timer);
  }

  timer = setTimeout(function () {
    console.log("scroll");
    // 何らかの処理

    var cntpage = document.getElementById("cntpage");
    var element = document.getElementById("target");
    var subtextbox = document.getElementById("subtextbox");

    cecktest = document.getElementById("hoge").innerHTML;
    var resultcunt = cecktest;
    console.log(typeof resultcunt);
    console.log(resultcunt);

    if (resultcunt == "0") {
      cntpage.innerHTML = "1 / 3";
      subtextbox.innerHTML =
        "<div class='p0cover'><div class='bg'><div class='apBg apBg01'></div><div class='apBg apBg02'></div><div class='apBg apBg03'></div><div class='apBg apBg04'></div><div class='apBg apBg05'></div><div class='apBg apBg06'></div><div class='apBg apBg07'></div></div></div><div class='scrolldown'></div><div class='dot'></div></div>";
      element.className = "line";
    } else if (resultcunt == "1") {
      //alert("1です");
      cntpage.innerHTML = "2 / 3";
      subtextbox.innerHTML =
        "<div class='p10'><div class='p1'><div class='p1box'><div class='p1t'><span class='pi'>P</span><span class='ar'>R</span><span class='ou'>O</span><span class='jay'>J</span><span class='ee'>E</span><span class='si'>C</span><span class='ti'>T</span><span class='es'>S</span></div><p><a href='https://moraine.co.jp/wp0820/'>Moraine Corporation </a> </br> <a href='https://horizon.ac.jp/'>Horizon Japan Int'l School </a> </br> <a href='http://www.hibiscus.edu.my/'> Hibiscus Int'l School </a> </br> <a href='https://enishi.ac.jp/'> Enishi Int'l School </a> </br> <a href='https://gasanet.org/'> GASA </a></p></div></div><div class='scrolldown'></div><div class='dot'></div></div>";
      element.className = "line20";
    } else if (resultcunt == "2") {
      //alert("1です");
      cntpage.innerHTML = "3 / 3";
      subtextbox.innerHTML =
        "<div class='p20'><div class='p20p1'> <h1 class='certif'> My Certificates </h1> <div class='cmenu'><label for='menu_bar01'>Coding for Visual Learners - P5.js</label><input type='checkbox' id='menu_bar01' class='accordion' /><ul id='links01'><li><img src='/img/p5js.jpg'/></li></ul><label for='menu_bar02'>JavaScript Essential Training 2017</label><input type='checkbox' id='menu_bar02' class='accordion' /><ul id='links02'><li><img src='/img/JSessential2017.jpg'/></li></ul><label for='menu_bar03'>React - Creating and Hosting Full-Stack Site</label><input type='checkbox' id='menu_bar03' class='accordion'/><ul id='links03'><li><img src='/img/full_react.jpg'/></li></ul><label for='menu_bar04'>REACT: Building an Interface </label><input type='checkbox' id='menu_bar04' class='accordion' /><ul id='links04'><li><img src='/img/react_bi.jpg'/></li></ul><label for='menu_bar05'>Vue.js for Web Designers</label><input type='checkbox' id='menu_bar05' class='accordion' /><ul id='links05'><li><img src='/img/vue_web.jpg'/></li></ul><label for='menu_bar06'>Vue Essential Training</label><input type='checkbox' id='menu_bar06' class='accordion' /><ul id='links06'><li><img src='/img/vuesential.jpg'/></li></ul><label for='menu_bar07'>Building modern user interfaces with React</label><input type='checkbox' id='menu_bar07' class='accordion' /><ul id='links07'><li><img src=''/></li></ul></div>  </div>   <div class='scrolldown'></div><div class='dot'></div></div>";
      element.className = "line40";
    }
  }, 100);
});
