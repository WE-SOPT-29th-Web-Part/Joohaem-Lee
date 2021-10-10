"use strict";

const inputs = document.querySelectorAll(".todos__input");
const addBtns = document.querySelectorAll(".todos__add");
const items = document.querySelectorAll(".todos__items");

// 리스트 추가 함수
const onAdd = (index) => {
  const input = inputs[index];
  // console.log(index);
  if(!input.value) return;
  // console.log(index);
  const li = document.createElement("li");
  const p = document.createElement("p");
  const deleteBtn = document.createElement("button");

  // class 지정
  li.setAttribute("class", "todos__item");
  p.setAttribute("class", "todos__name");
  deleteBtn.setAttribute("class", "todos__delete");
  
  // 텍스트
  deleteBtn.innerText = "❌";
  p.innerText = input.value;

  // 삭제 기능
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // 추가
  items[index].appendChild(li);
  li.appendChild(p);
  li.appendChild(deleteBtn);

  // input 창 초기화
  input.value = "";
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


