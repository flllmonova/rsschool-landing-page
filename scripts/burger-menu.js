'use strict';

const burgerMenu = document.getElementById('burger-menu-nav');
const burgerMenuLinks = document.querySelectorAll('.burger-link');
const burgerMenuBtn = document.getElementById('burger-menu-btn');
let isOpened = false;

burgerMenu.style.display = 'none';

burgerMenuBtn.addEventListener('click', () => {
  (isOpened) ? closeMenu() : showMenu();
})

function showMenu() {
  burgerMenu.setAttribute('aria-hidden', 'false');
  burgerMenu.style.display = 'flex';
  burgerMenu.classList.add('opened');
  burgerMenuBtn.classList.add('opened');
  burgerMenuBtn.setAttribute('aria-expanded', 'true');
  document.documentElement.style.overflowY = 'hidden';
  document.body.style.overflowY = 'hidden';
  isOpened = true;
}

function closeMenu() {
  burgerMenu.setAttribute('aria-hidden', 'true');
  burgerMenu.classList.remove('opened');
  burgerMenuBtn.classList.remove('opened');
  burgerMenuBtn.setAttribute('aria-expanded', 'false');
  document.documentElement.style.removeProperty('overflow-y');
  // document.body.style.removeProperty('overflow-y');
  isOpened = false;
}


/* hide the burger menu while link is clicked */
burgerMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  })
})

/* hide the burger menu on the desktop screen */
const mqMoveToDesktop = window.matchMedia('(min-width: 768px)');

mqMoveToDesktop.addEventListener('change', (event) => {
  if (event.matches) {
    closeMenu();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
})