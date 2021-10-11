const tagsBox = document.querySelector(".form__tags");
const inputTag = document.querySelector(".form__input-tag");
let whatTags = [];

const deleteTag = (e) => {
  let targetTag = e.target;
  
  // tag 배열에서 target text 잘라내기
  for(let i = 0; i < whatTags.length; i++) {
    if(whatTags[i] === e.target.innerText)  {
      whatTags.splice(i, 1);
      i--;
    }
  }
  // tag 제거
  targetTag.remove();
};

const addTag = (e) => {
  e.preventDefault();
  const inputValue = e.target.value;
  // 엔터일 경우만
  if(e.keyCode !== 13) return;
  // 빈 값일 경우, 리턴
  if(inputValue === "") return;
  // 이미 있는 값일 경우, 리턴
  if(whatTags.includes(inputValue)) return;

  const tag = document.createElement("span");
  tag.setAttribute("class", "form__tag");
  tag.innerText = inputValue;
  tag.addEventListener("click", e => deleteTag(e));

  tagsBox.prepend(tag);
  whatTags.push(inputValue);
  inputTag.value = "";
};

const init = () => {
  inputTag.addEventListener("keyup", e => addTag(e));
};

init();