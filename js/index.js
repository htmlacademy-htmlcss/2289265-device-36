const tabButtons = document.querySelectorAll('.tab-link');
const tabContent = document.querySelectorAll('.tab-content');

tabButtons.forEach((button, index) => {
button.addEventListener('click', () => {
  document.querySelector('.tab-link-current').classList.remove('tab-link-current');
  button.classList.add('tab-link-current');
  document.querySelector('.tab-content-current').classList.remove('tab-content-current');
  tabContent[index].classList.add('tab-content-current');
})
});

// Slider

const sliderTabButtons = document.querySelectorAll('.slider-pagination-button');
const slides = document.querySelectorAll('.slide');
const  buttonPrevious = document.querySelector('.button-previous-slide');
const  buttonNext = document.querySelector('.button-next-slide');
let counter = 0;

const clearClasses = () => {
  document.querySelector('.shown-slide').classList.remove('shown-slide');
  document.querySelector('.slider-pagination-current').classList.remove('slider-pagination-current');
};

sliderTabButtons.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    clearClasses();
    counter = index;
    slides[index].classList.add('shown-slide');
    tab.classList.add('slider-pagination-current');
  });
});

buttonPrevious.addEventListener('click', () => {
  clearClasses();
  counter = counter -1;
  if(counter < 0 ) {
    counter = slides.length -1;
  }
  
  slides[counter].classList.add('shown-slide');
  sliderTabButtons[counter].classList.add('slider-pagination-current');
});

buttonNext.addEventListener('click', () => {
  clearClasses();
  counter = counter + 1;
  if(counter > slides.length - 1) {
    counter = 0;
  }
  slides[counter].classList.add('shown-slide');
  sliderTabButtons[counter].classList.add('slider-pagination-current');
});
