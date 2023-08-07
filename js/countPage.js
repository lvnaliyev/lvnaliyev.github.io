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

var currentPageIndex = 0;

window.onload = function () {
  var cntpage = document.getElementById("cntpage");
  var element = document.getElementById("target");
  var subtextbox = document.getElementById("subtextbox");

  var cecktest = "";

  updatePageTracking(currentPageIndex);
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

    var pageCount = 3; // Total number of pages/sections

    // Calculate the current page index considering looping
    var pageIndex;
    if (pageCount > 0) {
      pageIndex = parseInt(resultcunt) % pageCount;
      if (pageIndex < 0) {
        pageIndex = pageCount - 1;
      }
    } else {
      // Handle the case where pageCount is zero or negative
      pageIndex = 0; // Default to the first page
    }

    cntpage.innerHTML = pageIndex + 1 + " / " + pageCount;

    // Update the content based on the current page index
    subtextbox.innerHTML =
      '<object type="text/html" style="overflow:hidden; width: 100%; height: 100%" data="/page' +
      (pageIndex + 1) +
      '.html"></object>';

    // Update the class for styling
    element.className = "line line" + pageIndex * 20;
  }, 100);
});

function updatePageTracking(index) {
  var pageCount = 3; // Total number of pages/sections

  if (pageCount <= 0) {
    return; // Avoid division by zero
  }

  var pageIndex = index % pageCount;
  if (pageIndex < 0) {
    pageIndex = pageCount - 1;
  }

  var cntpage = document.getElementById("cntpage");
  var element = document.getElementById("target");
  var subtextbox = document.getElementById("subtextbox");

  cntpage.innerHTML = pageIndex + 1 + " / " + pageCount;

  // Update the content based on the current page index
  subtextbox.innerHTML =
    '<object type="text/html" style="overflow:hidden; width: 100%; height: 100%" data="/page' +
    (pageIndex + 1) +
    '.html"></object>';

  // Update the class for styling
  element.className = "line line" + pageIndex * 20;

  // Update the current page index
  currentPageIndex = pageIndex;

  // Scroll to the appropriate section after page tracking is updated
  scrollToSection(pageIndex);
}

function scrollToSection(index) {
  $.fn.horizon("scrollTo", index);
}
