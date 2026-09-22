'use strict';

const body = document.querySelector('body');
const buttonLightTheme = document.getElementById('button-theme-light');
const buttonDarkTheme = document.getElementById('button-theme-dark');

// localStorage.remove();

/* save theme setting when page is reloaded */
const selectedTheme = localStorage.getItem('theme');
if (selectedTheme === 'light') body.classList.remove('dark-theme');
if (selectedTheme === 'dark') body.classList.add('dark-theme');

/* theme changer */
buttonLightTheme.addEventListener('click', () => {
  body.classList.remove('dark-theme');
  localStorage.setItem('theme', 'light');
});

buttonDarkTheme.addEventListener('click', () => {
  body.classList.add('dark-theme');
  localStorage.setItem('theme', 'dark');
});