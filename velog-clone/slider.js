"use strict";

const slideList = document.querySelector('.main__slide-list');
const slideBtnPrev = document.querySelector('.main__slide-btn-prev');
const slideBtnNext = document.querySelector('.main__slide-btn-next');

const slideLen = 5;
let slideIndex = 0;

const goPrev = () => {
  if (slideIndex < 0) return;

  const slideWidth = document.querySelector('.main__slide-content').offsetWidth;
  
  slideList.style.transform = `translate3d(-${(slideWidth * slideIndex)}px, 0px, 0px)`;
  slideIndex--;
};

const goNext = () => {
  if (slideIndex > slideLen - 2) return;

  const slideWidth = document.querySelector('.main__slide-content').offsetWidth;
  
  slideList.style.transform = `translate3d(-${(slideWidth * (slideIndex + 1))}px, 0px, 0px)`;
  slideIndex++;
};

const initSlide = () => {
  slideBtnPrev.addEventListener('click', goPrev);
  slideBtnNext.addEventListener('click', goNext);
};

initSlide();