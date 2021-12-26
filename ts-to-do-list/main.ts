"use strict";

// [혁이 코드 참조] 타입 추론-단언???
const isHTMLElement = (someElement: Element): someElement is HTMLElement => {
  return someElement instanceof HTMLElement;
};

const isHTMLInputElement = (
  someElement: Element
): someElement is HTMLInputElement => {
  return "value" in someElement;
};

const safeQuerySelector = (selector: string) => {
  const element = document.querySelector(selector);
  
  // 예외 처리를 null로 지정하여 반환
  if (!element) return null;
  if (!isHTMLElement(element)) return null;
  
  return element;
};

const inputs = document.querySelectorAll(".todos__input");
const addBtns = document.querySelectorAll(".todos__add");
const items = document.querySelectorAll(".todos__items");

const onAdd = (index: number) => {
  const input = inputs[index];
  if(!isHTMLInputElement(input)) return;

  const li = document.createElement("li");
  const p = document.createElement("p");
  const deleteBtn = document.createElement("button");
  
  li.setAttribute("class", "todos__item");
  p.setAttribute("class", "todos__name");
  deleteBtn.setAttribute("class", "todos__delete");
  
  deleteBtn.innerText = "❌";
  p.innerText = input.value;
  
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
  
  items[index].appendChild(li);
  li.appendChild(p);
  li.appendChild(deleteBtn);
  
  input.value = "";
}

addBtns.forEach((addBtn, index) => {
  if (!isHTMLElement(addBtn)) return false;
  addBtn.addEventListener("click", (e) => {
    onAdd(index);
  });
});

inputs.forEach((input, index) => {
  // 타입 단언???
  // input이 그냥 Element라면, e는 그냥 Event로 추론됨
  // 이 때, input을 InputElement로, "keyup" 이벤트 핸들러를 지정함으로써
  // e가 KeyboardEvent로 추론됨
  // 만약 "mouseUp" 이벤트 핸들러라면, MouseEvent로 추론됨
  if (!isHTMLInputElement(input)) return false;
  input.addEventListener("keyup", (e) => {
    if(!input.value) return;
    // 타입 단언???
    if (e.key === "Enter") {
      onAdd(index);
    }
  });
});

const nav = safeQuerySelector(".options");
const todos = document.querySelectorAll(".todos > section");

nav?.addEventListener("click", e => {
  if (!e.target) return false;
  // 타입 단언???
  if (!(e.target instanceof HTMLButtonElement)) return false;

  const targetClasses = e.target.classList;
  if(targetClasses.contains("options__today")) {
    todos[0].classList.add("open");
    todos[1].classList.remove("open");
  } else if(targetClasses.contains("options__tomorrow")) {
    todos[0].classList.remove("open");
    todos[1].classList.add("open");
  } else if(targetClasses.contains("options__both")) {
    todos[0].classList.add("open");
    todos[1].classList.add("open");
  }
});