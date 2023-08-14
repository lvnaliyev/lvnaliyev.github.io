document.addEventListener("DOMContentLoaded", function () {
  const cntpage = document.getElementById("cntpage");
  const subtextbox = document.getElementById("subtextbox");
  const element = document.getElementById("target");
  let cecktest = 0; // Initialize with the first page

  function updateContent(pageNum) {
    const pages = ["page1.html", "page2.html", "page3.html"];

    fetch(pages[pageNum])
      .then((response) => response.text())
      .then((content) => {
        cntpage.innerHTML = `${pageNum + 1} / 3`;
        subtextbox.innerHTML = content;
        element.className = `line${pageNum * 20}`;
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
      });
  }

  function scrollToNextPage() {
    cecktest = (cecktest + 1) % 3; // Wrap around to page 1 after page 3
    updateContent(cecktest);
  }

  let timer = null;
  window.addEventListener("scroll", function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      console.log("scroll");
      cecktest = document.getElementById("hoge").innerHTML;
      updateContent(parseInt(cecktest) || 0);
    }, 100);
  });

  // Trigger scroll to the next page when reaching the end of the current page
  subtextbox.addEventListener("scroll", function () {
    if (
      subtextbox.scrollTop + subtextbox.clientHeight >=
      subtextbox.scrollHeight
    ) {
      scrollToNextPage();
    }
  });

  // Initial content load
  updateContent(cecktest);
});
