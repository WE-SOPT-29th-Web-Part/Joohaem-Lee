"use strict";

const inputs = document.querySelectorAll(".todos__input");
const addBtns = document.querySelectorAll(".todos__add");
const items = document.querySelectorAll(".todos__items");

// 리스트 추가 함수
const onAdd = (index) => {
  // console.log(index);
  if(!inputs[index].value) return;
  // console.log(index);
  const li = document.createElement("li");
  const p = document.createElement("p");
  const deleteBtn = document.createElement("button");

  li.setAttribute("class", "todos__item");
  p.setAttribute("class", "todos__name");
  deleteBtn.setAttribute("class", "todos__delete");

  deleteBtn.innerText = "❌";
  p.innerText = inputs[index].value;

  items[index].appendChild(li);
  li.appendChild(p);
  li.appendChild(deleteBtn);

  inputs[index].value = "";
}

// 추가 버튼 클릭
addBtns.forEach((addBtn, index) => addEventListener("click", () => {
  onAdd(index);
}));

// 추가 버튼 Enter
inputs.forEach((input, index) => addEventListener("keyup", event => {
  if(event.key === "Enter") {
    onAdd(index); 
  }
}));


// deleteBtn.addEventListener("click", () => {
  
// });
