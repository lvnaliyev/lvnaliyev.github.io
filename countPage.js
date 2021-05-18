window.onload = function () {
  cntpage.innerHTML = "1 / 3";
  subtextbox.innerHTML =
    "<div class='p0cover'> <div id='myself'>ELVIN ALIYEV </br> Front end Developer</div>   <div class='bg'><div class='apBg apBg01'></div><div class='apBg apBg02'></div><div class='apBg apBg03'></div><div class='apBg apBg04'></div><div class='apBg apBg05'></div><div class='apBg apBg06'></div><div class='apBg apBg07'></div></div></div><div class='scrolldown'></div><div class='dot'></div></div>";
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
        "<div class='p0cover'><div id='myself'>ELVIN ALIYEV </br> Front end Developer</div><div class='bg'><div class='apBg apBg01'></div><div class='apBg apBg02'></div><div class='apBg apBg03'></div><div class='apBg apBg04'></div><div class='apBg apBg05'></div><div class='apBg apBg06'></div><div class='apBg apBg07'></div></div></div><div class='scrolldown'></div><div class='dot'></div></div>";
      element.className = "line";
    } else if (resultcunt == "1") {
      //alert("1です");
      cntpage.innerHTML = "2 / 3";
      subtextbox.innerHTML =
        "<div class='p10'><div class='p1'><div class='p1box'><div class='p1t'><span class='pi'>P</span><span class='ar'>R</span><span class='ou'>O</span><span class='jay'>J</span><span class='ee'>E</span><span class='si'>C</span><span class='ti'>T</span><span class='es'>S</span></div><p><a href='https://moraine.co.jp/wp0820/'>Moraine Corporation </a> </br> <a href='https://horizon.ac.jp/'>Horizon Japan Int'l School </a> </br> <a href='http://www.hibiscus.edu.my/'> Hibiscus Int'l School </a> </p></div></div><div class='scrolldown'></div><div class='dot'></div></div>";
      element.className = "line20";
    } else if (resultcunt == "2") {
      //alert("1です");
      cntpage.innerHTML = "3 / 3";
      subtextbox.innerHTML =
        "<div class='p20'><div class='p20p1'> <div class='skills'> <h1> Front end Developer </h1> <h2> Programming Skills </h2><ul> <li id='first' data-tooltip-first='2 years experience'> JavaScript </li> <li id='second' data-tooltip-second='5 years experience' > HTML, CSS </li><li id='third' data-tooltip-third='2 years experience'> jQuery </li> <li id='fourth' data-tooltip-fourth='7 month experience'> React Native </li> </ul>  <h2> Designing Skills </h2> <ul> <li id='five' data-tooltip-five='5 years experience'> Adobe Photoshop </li><li id='six' data-tooltip-six='5 years experience'> Adobe Illustrator </li></ul> </div></div><div class='scrolldown'></div><div class='dot'></div></div>";
      element.className = "line40";
    }
  }, 100);
});
