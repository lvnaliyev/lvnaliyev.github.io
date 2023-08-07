window.onload = function () {
  updateContent(0); // Initialize with the first page
};

var timer = false;
$(window).scroll(function () {
  if (timer !== false) {
    clearTimeout(timer);
  }

  timer = setTimeout(function () {
    console.log("scroll");

    updateContent(getCurrentPage());
  }, 100);
});

function getCurrentPage() {
  // Calculate the current page based on scroll position and content height
  var windowHeight = $(window).height();
  var scrollTop = $(window).scrollTop();
  var pageHeight = windowHeight; // Assuming each page has the height of the window

  return Math.floor(scrollTop / pageHeight);
}

function updateContent(pageIndex) {
  var cntpage = document.getElementById("cntpage");
  var element = document.getElementById("target");
  var subtextbox = document.getElementById("subtextbox");

  var pageCount = 3; // Total number of pages

  // Loop the pageIndex if it's out of bounds
  if (pageIndex < 0) {
    pageIndex = pageCount - 1;
  } else if (pageIndex >= pageCount) {
    pageIndex = 0;
  }

  // Update content based on pageIndex
  cntpage.innerHTML = pageIndex + 1 + " / " + pageCount;
  var pagePath = "/page" + (pageIndex + 1) + ".html"; // Assuming the HTML pages are named as "page1.html", "page2.html", etc.
  subtextbox.innerHTML =
    '<object type="text/html" style="overflow:hidden; width: 100%; height: 100%" data="' +
    pagePath +
    '"></object>';

  // Update class based on pageIndex
  var className = "line" + pageIndex * 20;
  element.className = className;
}

// window.onload = function () {
//   cntpage.innerHTML = "1 / 3";
//   subtextbox.innerHTML =
//     '<object type="text/html" style="overflow:hidden; width: 100%; height: 100%" data="/page1.html"></object>';
//   element.className = "line";
//   var cecktest = "";
// };

// var timer = false;
// $(window).scroll(function () {
//   if (timer !== false) {
//     clearTimeout(timer);
//   }

//   timer = setTimeout(function () {
//     console.log("scroll");

//     var cntpage = document.getElementById("cntpage");
//     var element = document.getElementById("target");
//     var subtextbox = document.getElementById("subtextbox");

//     cecktest = document.getElementById("hoge").innerHTML;
//     var resultcunt = cecktest;

//     if (resultcunt == "0") {
//       cntpage.innerHTML = "1 / 3";
//       subtextbox.innerHTML =
//         '<object type="text/html" style="overflow:hidden; width: 100%; height: 100%" data="/page1.html"></object>';
//       element.className = "line";
//     } else if (resultcunt == "1") {
//       cntpage.innerHTML = "2 / 3";
//       subtextbox.innerHTML =
//         '<object type="text/html" style="overflow:hidden; width: 100%; height: 100%" data="/page2.html"></object>';
//       element.className = "line20";
//     } else if (resultcunt == "2") {
//       cntpage.innerHTML = "3 / 3";
//       subtextbox.innerHTML =
//         '<object type="text/html" style="overflow:hidden; width: 100%; height: 100%" data="/page3.html"></object>';
//       element.className = "line40";
//     }
//   }, 100);
// });
