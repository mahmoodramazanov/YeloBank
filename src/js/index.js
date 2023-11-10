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


// HEADER FINISHED
