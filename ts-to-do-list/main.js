"use strict";
// [혁이 코드 참조] 타입 추론-단언???
var isHTMLElement = function (someElement) {
    return someElement instanceof HTMLElement;
};
var isHTMLInputElement = function (someElement) {
    return "value" in someElement;
};
var safeQuerySelector = function (selector) {
    var element = document.querySelector(selector);
    if (!element)
        return null;
    if (!isHTMLElement(element))
        return null;
    return element;
};
var inputs = document.querySelectorAll(".todos__input");
var addBtns = document.querySelectorAll(".todos__add");
var items = document.querySelectorAll(".todos__items");
var onAdd = function (index) {
    var input = inputs[index];
    if (!isHTMLInputElement(input))
        return;
    var li = document.createElement("li");
    var p = document.createElement("p");
    var deleteBtn = document.createElement("button");
    li.setAttribute("class", "todos__item");
    p.setAttribute("class", "todos__name");
    deleteBtn.setAttribute("class", "todos__delete");
    deleteBtn.innerText = "❌";
    p.innerText = input.value;
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });
    items[index].appendChild(li);
    li.appendChild(p);
    li.appendChild(deleteBtn);
    input.value = "";
};
addBtns.forEach(function (addBtn, index) {
    if (!isHTMLElement(addBtn))
        return false;
    addBtn.addEventListener("click", function (e) {
        onAdd(index);
    });
});
inputs.forEach(function (input, index) {
    // 타입 단언???
    // input이 그냥 Element라면, e는 그냥 Event로 추론됨
    // 이 때, input을 InputElement로, "keyup" 이벤트 핸들러를 지정함으로써
    // e가 KeyboardEvent로 추론됨
    // 만약 "mouseUp" 이벤트 핸들러라면, MouseEvent로 추론됨
    if (!isHTMLInputElement(input))
        return false;
    input.addEventListener("keyup", function (e) {
        if (!input.value)
            return;
        // 타입 단언???
        if (e.key === "Enter") {
            onAdd(index);
        }
    });
});
var nav = safeQuerySelector(".options");
var todos = document.querySelectorAll(".todos > section");
nav === null || nav === void 0 ? void 0 : nav.addEventListener("click", function (e) {
    if (!e.target)
        return false;
    // 타입 단언???
    if (!(e.target instanceof HTMLButtonElement))
        return false;
    var targetClasses = e.target.classList;
    if (targetClasses.contains("options__today")) {
        todos[0].classList.add("open");
        todos[1].classList.remove("open");
    }
    else if (targetClasses.contains("options__tomorrow")) {
        todos[0].classList.remove("open");
        todos[1].classList.add("open");
    }
    else if (targetClasses.contains("options__both")) {
        todos[0].classList.add("open");
        todos[1].classList.add("open");
    }
});
