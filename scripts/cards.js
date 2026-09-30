'use strict';

import { cardsData } from './card-data.js';

const priceFormatter = Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const cardContainer = document.getElementById('cards');
const tabs = document.querySelectorAll('.tab');
const cardPopupTemplate = document.getElementById("template");

let currentCategory = 'coffee';

updateCatalog()

function updateCatalog() {
  cardsData
    .filter(({ category }) => category === currentCategory) 
    .forEach(cardData => {
      const card = makeCard(cardData);
      cardContainer.appendChild(card);
    })

  tabs.forEach(tab => tab.classList.toggle('tab--selected', tab.dataset.category === currentCategory))
}

function makeCard(cardData) {
  const card = document.createElement('article');
  card.classList.add('card');
  card.dataset.id = cardData["id"];
  card.dataset.category = cardData["category"];

  const figure = document.createElement('figure');
  figure.classList.add("card__img-wrapper");

  const img = document.createElement('img');
  img.classList.add('card__img');
  img.style.width = "380";
  img.style.height = "380";
  img.setAttribute('src', cardData['src']);
  img.setAttribute('alt', cardData['alt']);

  figure.appendChild(img);
  card.appendChild(figure);

  const cardTextContent = document.createElement('div');
  cardTextContent.classList.add('card__text');

  const cardTitle = document.createElement('h3');
  cardTitle.classList.add('heading-h3');
  cardTitle.textContent = cardData["title"];

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('card__description', 'text-description');
  cardDescription.textContent = cardData['description'];

  const cardPrice = document.createElement('p');
  cardPrice.classList.add('card__price', 'heading-h3');
  cardPrice.textContent = `$${priceFormatter.format(cardData['priceInDollars'])}`;

  cardTextContent.append(cardTitle, cardDescription, cardPrice);

  card.appendChild(cardTextContent);
   
  return card;   
}

tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    const selectedCategory = e.currentTarget.dataset.category;

    if (currentCategory !== selectedCategory) {
      currentCategory = selectedCategory;
      clearCatalog();
      updateCatalog();
    }
  })
})

function clearCatalog() {
  while(cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
}

