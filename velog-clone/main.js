"use strict";

// dropdown
const navSorting = document.querySelector(".nav__sorting");
const navDropdown = document.querySelector(".nav__dropdown");
const navActiveSorting = document.querySelector(".nav__sorting--active");

const openDropdown = () => {
  navDropdown.classList.toggle("visible");  
}

const changeActive = (e) => {
  navActiveSorting.innerText = e.target.innerText;

  Array.from(navDropdown.children)
    .filter((list) => list.classList.contains("active"))[0]
    .classList.remove("active");

  e.target.classList.add("active");
}

const initDropdown = () => {
  navSorting.addEventListener("click", openDropdown);
  navDropdown.addEventListener("click", changeActive);
}

initDropdown();

// modal pop-up
// 왜 body가 클릭되는 거지??????????????
const body = document.body;
const sections = document.querySelectorAll(".section");
const articles = document.querySelectorAll(".section__box");
const closeBtns = document.querySelectorAll(".section__close-btn")

const closeModal = (index, e) => {
  // 클릭한 index 검사
  if(closeBtns[index] !== e.target) return;

  // inactive
  sections[index].classList.remove("active");
  articles[index].classList.remove("active");
  closeBtns[index].classList.remove("active");
  body.classList.remove("no-scroll");
}

const openModal = (index, e) => {
  // 이벤트 위임 사용자 정의
  let targetArticle = e.target;
  while(!targetArticle.classList.contains("section__box"))
    targetArticle = targetArticle.parentNode;

  // 클릭한 index 검사
  if(articles[index] !== targetArticle) return;

  // active
  articles[index].classList.add("active");
  sections[index].classList.add("active");
  closeBtns[index].classList.add("active");
  body.classList.add("no-scroll");
}

const initModal = () => {
  articles.forEach((a, index) => 
    addEventListener("click", (e) => openModal(index, e)));
  closeBtns.forEach((c, index) => 
    addEventListener("click", (e) => closeModal(index, e)));
};

initModal();

// on & off tags