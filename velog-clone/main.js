"use strict";

// ----------------------- dropdown -----------------------
const navSorting = document.querySelector(".nav__sorting");
const navDropdown = document.querySelector(".nav__dropdown");
const navActiveSorting = document.querySelector(".nav__sorting--active");

const openDropdown = () => {
  navDropdown.classList.toggle("visible");  
}

const changeActive = (e) => {
  navActiveSorting.innerText = e.target.innerText;

navDropdown.children.forEach(item => item.classList.remove("active"));

  e.target.classList.add("active");
}

const initDropdown = () => {
  navSorting.addEventListener("click", openDropdown);
  navDropdown.addEventListener("click", changeActive);
}

initDropdown();

// ----------------------- modal pop-up -----------------------
const body = document.body;
const sections = document.querySelectorAll(".section.modal");
const closeBtns = document.querySelectorAll(".section__close-btn.modal");
const articles = document.querySelectorAll(".section__box.modal");

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
  articles.forEach((article, index) => 
    article.addEventListener("click", (e) => openModal(index, e)));
  closeBtns.forEach((btn, index) => 
    btn.addEventListener("click", (e) => closeModal(index, e)));
};

initModal();

// ----------------------- dark mode -----------------------

const checkDark = document.querySelector(".header__input-dark");

const changeChecked = e => {
  if (e.target.checked) {
    document.documentElement.setAttribute("color-theme", "dark");
    localStorage.setItem("color-theme", "dark");
  } else {
    document.documentElement.setAttribute("color-theme", "light");
    localStorage.setItem("color-theme", "light");
  }
};

const loadChecked = () => {
  const currentDarkMode = localStorage.getItem("color-theme");
  if(currentDarkMode === null) {
    localStorage.setItem("color-theme", "light");
  }
  else if(currentDarkMode === "dark") {
    document.documentElement.setAttribute("color-theme", "dark");
    checkDark.checked = true;
  }
  else {
    document.documentElement.setAttribute("color-theme", "light");
    checkDark.checked = false;
  }
};

const initDarkMode = () => {
  loadChecked();
  checkDark.addEventListener("click", changeChecked)
};

initDarkMode();