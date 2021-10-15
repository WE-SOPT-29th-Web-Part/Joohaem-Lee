"use strict";

const slideList = document.querySelector('.main__slide-list');
const slideBtnPrev = document.querySelector('.main__slide-btn-prev');
const slideBtnNext = document.querySelector('.main__slide-btn-next');

const slideLen = 5;
let slideIndex = 0;

const goPrev = () => {
  const slideWidth = document.querySelector('.main__slide-content').offsetWidth;
  if (slideIndex >= 0) {
    slideList.style.transform = `translate3d(-${(slideWidth * slideIndex)}px, 0px, 0px)`;
    slideIndex--;
  }
  console.log(slideWidth, slideIndex);
};

const goNext = () => {
  const slideWidth = document.querySelector('.main__slide-content').offsetWidth;
  if (slideIndex < slideLen - 1) {
    slideList.style.transform = `translate3d(-${(slideWidth * (slideIndex + 1))}px, 0px, 0px)`;
    slideIndex++;
  }
  console.log(slideLen, slideIndex);
};

const initSlide = () => {
  slideBtnPrev.addEventListener('click', goPrev);
  slideBtnNext.addEventListener('click', goNext);
};

initSlide();