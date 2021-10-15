"use strict";

const slideList = document.querySelector('.main__slide-list');
const slideBtnPrev = document.querySelector('.main__slide-btn-prev');
const slideBtnNext = document.querySelector('.main__slide-btn-next');

const slideLen = document.querySelectorAll(".main__slide-content").length;
let slideIndex = 0;

const goPrev = () => {
  if (slideIndex <= 0) return;

  const slideWidth = document.querySelector('.main__slide-content').offsetWidth;
  
  slideIndex--;
  slideList.style.transform = `translate3d(-${(slideWidth * slideIndex)}px, 0px, 0px)`;
};

const whatMaxIndex = () => {
  const browserWidth = window.innerWidth;

  if(browserWidth < 768) return slideLen - 1;
  else if(browserWidth < 1024) return slideLen - 2;
  else return slideLen - 3;
}

const goNext = () => {
  if (slideIndex >= whatMaxIndex()) return;

  const slideWidth = document.querySelector('.main__slide-content').offsetWidth;
  
  slideIndex++;
  slideList.style.transform = `translate3d(-${(slideWidth * (slideIndex))}px, 0px, 0px)`;
};

const initSlide = () => {
  slideBtnPrev.addEventListener('click', goPrev);
  slideBtnNext.addEventListener('click', goNext);
};

initSlide();