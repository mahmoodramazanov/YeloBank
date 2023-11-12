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

/*
slideItems.forEach((el, i)=> {
              el.style.transform = `translateX(-${(100)}%)`;
});
slideDots.forEach((dot, index)=>{
  dot.addEventListener('click',()=>{
    if()
  })
});

function toLeft(arr){
  while (!arr[2].classList.contains('active-slide')){
    const arr0 = arr[0];
    for (let i=0; i<arr.length()-1; i++){
      arr[i] =arr[i+1];
      arr[arr.length()] = arr0;
    }
  };
}
*/
// console.log(slideItems[0])

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

console.log(toLeft1(slideItems));
writeInSlider(slideItems);

// console.log(slideItems[0].outerHTML)

let interval = 0;

// setInterval(() => {
//   // const arr0 = slideItems[0];
//   // for (let i=0; i<slideItems.length-1; i++){
//   //   slideItems[i] =slideItems[i+1];
//   //   slideItems[slideItems.length-1] = arr0;
//   // }
//   slideItems.forEach((el)=> {
//     el.style.transform = `translateX(${((+el.dataset.slideindex+interval)%4)*100}%)`;
//   });
//   interval++;
//   interval %= 4;
// }, 200000);

//slider finished
// HEADER FINISHED
