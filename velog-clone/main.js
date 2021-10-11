"use strict";

const navSorting = document.querySelector(".nav__sorting");
const navDropdown = document.querySelector(".nav__dropdown");
const navActiveSorting = document.querySelector(".nav__sorting--active");

const onDropdown = () => {
  navDropdown.classList.toggle("visible");  
}

const changeActive = (e) => {
  navActiveSorting.innerText = e.target.innerText;

  Array.from(navDropdown.children)
    .filter((list) => list.classList.contains("active"))[0]
    .classList.remove("active");

  e.target.classList.add("active");
}

const init = () => {
  navSorting.addEventListener("click", onDropdown);
  navDropdown.addEventListener("click", changeActive);
}

init();