'use strict';

const slider = document.querySelector('.slider__track');
const sliderDots = document.querySelectorAll('.slider__dot');
const sliderLeftButton = document.querySelector('.slider-arrow-left');
const sliderRightButton = document.querySelector('.slider-arrow-right');

const slidesAmount = sliderDots.length;
let currentIndex = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${slider.clientWidth * currentIndex}px)`;
  sliderDots.forEach((dot, dotIndex) => {
    dot.classList.toggle('slider__dot--current', dotIndex === currentIndex);
  });
}

function goToSlide(index) {
  currentIndex = (index + slidesAmount) % slidesAmount;
  updateSlider();
}

sliderLeftButton.addEventListener('click', () => goToSlide(currentIndex - 1));
sliderRightButton.addEventListener('click', () => goToSlide(currentIndex + 1));

sliderDots.forEach((dot, dotIndex) => {
  dot.addEventListener('click', () => {
    goToSlide(dotIndex);
  });
});

window.addEventListener('resize', () => {
  currentIndex = 0;
  updateSlider();
})