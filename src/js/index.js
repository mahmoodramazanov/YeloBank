// #MOBILE-TOP START
const mobileTop = document.querySelector("#mobile-top");
const fictiveMobileTop = document.querySelector(".fictive-mobile-top");
const mobileTopBtn = document.querySelector(".btn-side button");
mobileTopBtn.addEventListener("click", () => {
  mobileTop.style.top = "-100%";
  fictiveMobileTop.style.height = "0";
});
// #MOBILE-TOP FINISHED

// HEADER START

//languages start
const selectedLang = document.querySelector(".lang-selected");
const selectedLangName = document.querySelector(".lang-selected p");
let selected = document.querySelector(".selected");
const langsDiv = document.querySelector(".lang-options");
const langOptions = document.querySelectorAll(".lang-options ul li");

selectedLang.addEventListener("click", () => {
  langsDiv.style.display = "block";
});

langOptions.forEach((el) => {
  el.addEventListener("click", () => {
    selected.classList.remove("selected");
    el.classList.add("selected");
    selected = document.querySelector(".selected");
    selectedLangName.textContent = `${selected.textContent}`;
    langsDiv.style.display = "none";
  });
});
// languages finished
// slider starts
const slider = document.querySelector(".slide-items");
const slideItems = document.querySelectorAll(".slide-item");
const slideDots = document.querySelectorAll(".slide-dot");

function toLeft1(arr) {
  const arrtest = [];
  const arr0 = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arrtest[i] = arr[i + 1];
    arrtest[4] = arr0;
  }
  return arrtest;
}

function writeInSlider(arr) {
  slider.innerHTML = "";
  arr.forEach((el) => {
    slider.innerHTML += el.outerHTML;
  });
}

// console.log(slideItems[0].outerHTML)
let step = 0;
setInterval(() => {
  // const sIndex = (+el.dataset.slideindex + interval) % 4;
  // if (sIndex == 4) sIndex = -1;
  // slideItems[(4 + interval) % 4].style.zIndex = -1;
  // slideItems[(4 + interval) % 4 - 1].style.zIndex = 0;
  // el.style.transform = `translateX(${sIndex * 100}%)`;
  switch (step) {
    case 0:
      slideItems[3].style.zIndex = "-1";
      slideItems[2].style.zIndex = "1";

      slideItems[0].style.transform = "translateX(0)";
      slideItems[1].style.transform = "translateX(100%)";
      slideItems[2].style.transform = "translateX(200%)";
      slideItems[3].style.transform = "translateX(-100%)";
      break;
    case 1:
      slideItems[0].style.zIndex = "-1";
      slideItems[3].style.zIndex = "1";

      slideItems[0].style.transform = "translateX(-100%)";
      slideItems[1].style.transform = "translateX(0)";
      slideItems[2].style.transform = "translateX(100%)";
      slideItems[3].style.transform = "translateX(200%)";
      break;
    case 2:
      slideItems[1].style.zIndex = "-1";
      slideItems[0].style.zIndex = "1";

      slideItems[0].style.transform = "translateX(200%)";
      slideItems[1].style.transform = "translateX(-100%)";
      slideItems[2].style.transform = "translateX(0)";
      slideItems[3].style.transform = "translateX(100%)";
      break;
    case 3:
      slideItems[2].style.zIndex = "-1";
      slideItems[1].style.zIndex = "1";

      slideItems[0].style.transform = "translateX(100%)";
      slideItems[1].style.transform = "translateX(200%)";
      slideItems[2].style.transform = "translateX(-100%)";
      slideItems[3].style.transform = "translateX(0)";
  }
  step++;
  step %= 4;
}, 3  000);

// el.style.transform = `translateX(${+el.dataset.slideindex * 100}%)`;

//slider finished
// HEADER FINISHED
