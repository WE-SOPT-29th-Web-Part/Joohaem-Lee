"use strict";
var inputs = document.querySelectorAll(".todos__input");
var addBtns = document.querySelectorAll(".todos__add");
var items = document.querySelectorAll(".todos__items");
// 리스트 추가 함수
var onAdd = function (index) {
    var input = inputs[index];
    // console.log(index);
    if (!input.value)
        return;
    // console.log(index);
    var li = document.createElement("li");
    var p = document.createElement("p");
    var deleteBtn = document.createElement("button");
    // class 지정
    li.setAttribute("class", "todos__item");
    p.setAttribute("class", "todos__name");
    deleteBtn.setAttribute("class", "todos__delete");
    // 텍스트
    deleteBtn.innerText = "❌";
    p.innerText = input.value;
    // 삭제 기능
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });
    // 추가
    items[index].appendChild(li);
    li.appendChild(p);
    li.appendChild(deleteBtn);
    // input 창 초기화
    input.value = "";
};
// 추가 버튼 클릭
addBtns.forEach(function (addBtn, index) { return addEventListener("click", function () {
    onAdd(index);
}); });
// 추가 버튼 Enter
inputs.forEach(function (input, index) { return addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        onAdd(index);
    }
}); });
var nav = document.querySelector(".options");
var todos = document.querySelectorAll(".todos > section");
nav.addEventListener("click", function (e) {
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
