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
