'use strict';
const themeButtonLight = document.querySelector('.theme-button--light');
const themeButtonDark = document.querySelector('.theme-button--dark');
const themeButtons = [themeButtonLight, themeButtonDark];

let isDark = false;

themeButtonDark.addEventListener('click', () => {
  if (!isDark) {
    document.body.classList.add('theme-dark');
    toggleCurrentThemeClass();
  }
  isDark = true;
});

themeButtonLight.addEventListener('click', () => {
  if (isDark) {
    document.body.classList.remove('theme-dark');
    toggleCurrentThemeClass();
  }
  isDark = false;
});

function toggleCurrentThemeClass() {
  themeButtonDark.classList.toggle('theme-button--current');
  themeButtonLight.classList.toggle('theme-button--current'); 
}