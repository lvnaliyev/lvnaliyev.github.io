window.onload = function () {
  cntpage.innerHTML = "1 / 3";
  subtextbox.innerHTML =
    "<div class='p0cover'> <div class='bg'><div class='apBg apBg01'><p>JavaScript</p></div><div class='apBg apBg02'><p>HTML</p></div><div class='apBg apBg03'><p>CSS/SCSS</p></div><div class='apBg apBg04'><p>jQuery</p></div><div class='apBg apBg05'><p>React</p></div><div class='apBg apBg06'><p>React-Native</p></div><div class='apBg apBg07'><p>Vue</p></div></div></div><div class='scrolldown'></div><div class='dot'></div></div>";
  element.className = "line";
  var cecktest = "";
};

var timer = false;
$(window).scroll(function () {
  if (timer !== false) {
    clearTimeout(timer);
  }

  timer = setTimeout(function () {
    console.log("scroll");

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
      cntpage.innerHTML = "2 / 3";
      subtextbox.innerHTML =
        "<div class='p10'><div class='p1'><div class='p1box'><div class='p1t'><span class='pi'>P</span><span class='ar'>R</span><span class='ou'>O</span><span class='jay'>J</span><span class='ee'>E</span><span class='si'>C</span><span class='ti'>T</span><span class='es'>S</span></div><p><a href='https://moraine.co.jp/wp0820/'>Moraine Corporation </a> </br> <a href='https://horizon.ac.jp/'>Horizon Japan Int'l School </a> </br> <a href='http://www.hibiscus.edu.my/'> Hibiscus Int'l School </a> </br> <a href='https://enishi.ac.jp/'> Enishi Int'l School </a> </br> <a href='https://gasanet.org/'> GASA </a></p></div></div><div class='scrolldown'></div><div class='dot'></div></div>";
      element.className = "line20";
    } else if (resultcunt == "2") {
      cntpage.innerHTML = "3 / 3";
      subtextbox.innerHTML =
        "<object type='text/html' data='page3.html'> </object>";
      element.className = "line40";
    }
  }, 100);
});
