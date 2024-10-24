const toggler = document.querySelector("#checkbox");
const body = document.body;
const navTitle = document.querySelector(".nav-title");
const Hcards = document.querySelectorAll(".card");
const followNum = document.querySelectorAll(".followerNum");
const Mcards = document.querySelectorAll(".content");
const secTitle = document.querySelector(".title");
const viewsNum = document.querySelectorAll(".viewsNum");

toggler.addEventListener("click", () => {
  body.classList.toggle("body-dark");
  navTitle.classList.toggle("nav-titleDark");
  Hcards.forEach((card) => card.classList.toggle("cardinDark"));
  followNum.forEach((Num) => Num.classList.toggle("followerNum-Dark"));
  Mcards.forEach((card) => card.classList.toggle("content-Dark"));
  secTitle.classList.toggle("title-Dark");
  viewsNum.forEach((Num) => Num.classList.toggle("viewsNum-Dark"));
});
