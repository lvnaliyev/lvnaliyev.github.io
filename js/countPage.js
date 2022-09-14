window.onload = function () {
  cntpage.innerHTML = "1 / 3";
  subtextbox.innerHTML =
    '<object type="text/html" style="overflow:hidden; width: 100%; height: 100%" data="/page1.html"></object>';
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

    if (resultcunt == "0") {
      cntpage.innerHTML = "1 / 3";
      subtextbox.innerHTML =
        '<object type="text/html" style="overflow:hidden; width: 100%; height: 100%" data="/page1.html"></object>';
      element.className = "line";
    } else if (resultcunt == "1") {
      cntpage.innerHTML = "2 / 3";
      subtextbox.innerHTML =
        '<object type="text/html" style="overflow:hidden; width: 100%; height: 100%" data="/page2.html"></object>';
      element.className = "line20";
    } else if (resultcunt == "2") {
      cntpage.innerHTML = "3 / 3";
      subtextbox.innerHTML =
        '<object type="text/html" style="overflow:hidden; width: 100%; height: 100%" data="/page3.html"></object>';
      element.className = "line40";
    } else {
      cntpage.innerHTML = "1 / 3";
      subtextbox.innerHTML =
        '<object type="text/html" style="overflow:hidden; width: 100%; height: 100%" data="/page1.html"></object>';
      element.className = "line";
      var cecktest = "";
    }
  }, 100);
});
