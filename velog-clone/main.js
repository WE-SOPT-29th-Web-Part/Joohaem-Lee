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
const articles = document.querySelectorAll(".section__box");

const closeModal = (btnNode, articleNode, sectionNode) => {
  btnNode.classList.remove("active");
  articleNode.classList.remove("active");
  sectionNode.classList.remove("active");
  body.classList.remove("no-scroll");
}

const openModal = (e) => {
  // 이벤트 위임 사용자 정의
  let articleBox = e.target;
  while(!articleBox.classList.contains("section__box"))
  articleBox = articleBox.parentNode;
  
  // overlay
  const section = articleBox.parentNode;
  // 모달창 닫기 button
  const deleteBtn = section.lastElementChild;

  // active
  articleBox.classList.add("active");
  section.classList.add("active");
  deleteBtn.classList.add("active");
  body.classList.add("no-scroll");

  // 버튼 이벤트
  deleteBtn.addEventListener("click", (e) => 
    closeModal(e.currentTarget, articleBox, section));
}

const initModal = () => {
  articles.forEach(() => addEventListener("click", openModal));
};

initModal();

// on & off tags