'use strict';
const themeButtonLight = document.querySelector('.theme-button--light');
const themeButtonDark = document.querySelector('.theme-button--dark');

setSelectedTheme();

themeButtonDark.addEventListener('click', setDarkTheme);

themeButtonLight.addEventListener('click', setLightTheme);

function setLightTheme() {
  document.body.classList.remove('theme-dark');
  localStorage.setItem('theme', 'light');
  themeButtonLight.classList.add('theme-button--current');
  themeButtonDark.classList.remove('theme-button--current');
}

function setDarkTheme() {
  document.body.classList.add('theme-dark');
  themeButtonLight.classList.remove('theme-button--current');
  themeButtonDark.classList.add('theme-button--current');
  localStorage.setItem('theme', 'dark');
}
function setSelectedTheme() {
  const selectedTheme = localStorage.getItem('theme') || 'light';
  (selectedTheme === 'light') ? setLightTheme() : setDarkTheme();
}