(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };
});

//Get The Button
let BackTop = document.getElementById("backTop");

// When User Scroll down 20px from top , show button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    BackTop.style.display = "block";
  } else {
    BackTop.style.display = "none";
  }

  // if (
  //   document.body.scrollTop > 30 ||
  //   (document.documentElement.scrollTop > 30 && navLinks)
  // ) {
  //   header.style.background = "#fff";
  //   header.style.boxShadow = "0px 4px 30px -6px rgba(0,0,0,0.1)";
  // } else {
  //   header.style.background = "#3a376f";
  //   header.style.boxShadow = "none";
  // }
}

//when User scroll to the top of the document,
BackTop.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let header = document.querySelector("#header");
let navLinks = document.querySelectorAll(".nav-link");

/**/
let list = document.querySelectorAll(".filter-btn");
let itemBox = document.querySelectorAll(".filter-item");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < itemBox.length; k++) {
      itemBox[k].classList.remove("active");
      itemBox[k].classList.add("hide");

      if (
        itemBox[k].getAttribute("data-category") == dataFilter ||
        dataFilter == "all"
      ) {
        itemBox[k].classList.remove("hide");
        itemBox[k].classList.add("active");
      }
    }
  });
}
