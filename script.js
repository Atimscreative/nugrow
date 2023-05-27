"use strict";

/*===== REMOVE NAVMENU WHEN USER CLICK EACH LINK =====*/
// let header = document.querySelector("#header");
const navLinks = document.querySelectorAll(".nav-link");
const offCanva = document.querySelector("#offcanvasWithBothOptions");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    offCanva.classList.remove("show");
    const offcanvasBackdrop = document.querySelector(".offcanvas-backdrop");
    offcanvasBackdrop.style.display = "none";
  });
});

/*===== PORTFOLIO FILTERING =====*/
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

/*===== PORTFOLIO LIGHTBOX =====*/
const gallery = document.querySelectorAll(".portfolio-wrap .img-fluid"),
  btnIcon = document.querySelectorAll("#view-img"),
  lightBox = document.querySelector(".lightbox"),
  lightBoxImg = document.querySelector(".img-box"),
  closeLightBox = document.querySelector(".close-box");

btnIcon.forEach((icon, i) => {
  icon.addEventListener("click", () => {
    const img = gallery[i].src;

    lightBox.classList.add("show-lightbox");
    lightBoxImg.src = img;
    console.log(lightBox);
  });

  // Closing lightbox
  closeLightBox.addEventListener("click", (e) => {
    lightBox.classList.remove("show-lightbox");
  });
});

/*===== BACK TO TOP BUTTON =====*/
let BackTop = document.getElementById("backTop");

// When User Scroll down 20px from top , show button
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    BackTop.style.display = "block";
  } else {
    BackTop.style.display = "none";
  }
}

//when User scroll to the top of the document,
BackTop.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
