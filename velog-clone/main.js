"use strict";

const navSorting = document.querySelector(".nav__sorting");
const navDropdown = document.querySelector(".nav__dropdown");

const onDropdown = () => {
  navDropdown.classList.toggle("visible");  
}

const init = () => {
  navSorting.addEventListener("click", onDropdown);
}

init();