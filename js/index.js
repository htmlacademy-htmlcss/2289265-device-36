const tabButtons = document.querySelectorAll('.tab-link');
const tabContent = document.querySelectorAll('.tab-content');
console.log(tabContent);

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
