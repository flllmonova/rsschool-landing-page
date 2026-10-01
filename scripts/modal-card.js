'use strict';

import { cardsData } from './card-data.js';

const cardContainer = document.getElementById('cards');
const modal = document.getElementById('modal');

const priceFormatter = Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

cardContainer.addEventListener('click', (event) => {
  const card = event.target.closest('.card');

  if (!card) return;

  const cardId = Number(card.dataset.id);
  openModal(cardId);
})

function openModal(cardId) {
  const cardData = cardsData.find((card) => card.id === cardId);
  
  const img = modal.querySelector('.modal-card__img');
  img.setAttribute('src', cardData['src']);
  img.setAttribute('alt', cardData['alt']);

  const title = modal.querySelector('.modal-card__title');
  title.textContent = cardData['title'];

  const description = modal.querySelector('.modal-card__description');
  description.textContent = cardData['description'];

  const price = modal.querySelector('.modal-card__price');
  price.textContent = `$${priceFormatter.format(cardData['priceInDollars'])}`;
  
  const optionButtons = modal.querySelectorAll('.modal-option__button', );

  
  optionButtons.forEach((button) => {
    
    button.classList.remove('modal-option__button--selected');
    if (button.dataset.key === 'S' && button.dataset.option === "sizes") {
      button.classList.add('modal-option__button--selected');
    }

    button.addEventListener('click', function() {
      
      const option = this.dataset.option;

      optionButtons.forEach(button => {
        if (button.dataset.option === option) button.classList.remove('modal-option__button--selected')
      });
      
      this.classList.add('modal-option__button--selected');
      
      const selectedOptionButtons = modal.querySelectorAll('.modal-option__button--selected');
      let additionalPrice = 0;
      selectedOptionButtons.forEach(button => {
        const option = button.dataset.option;
        const key = button.dataset.key;
        additionalPrice += cardData[option][key]['price'];
      })

      price.textContent = `$${priceFormatter.format(cardData['priceInDollars'] + additionalPrice)}`;
    })
  })
  
  const optionSizeButtonSpans = modal.querySelectorAll('.modal-option-size__button span:last-child');

  for (let button of optionSizeButtonSpans) {
    const key = button.dataset.key;
    button.textContent = cardData['sizes'][key]['size'];
  }

  const optionAdditivesButtonSpans = modal.querySelectorAll('.modal-option-additives__button span:last-child');

  for (let button of optionAdditivesButtonSpans) {
    const key = button.dataset.key;
    button.textContent = cardData['additives'][key]['additive'];
  }

  modal.setAttribute('aria-hidden', false);
  document.documentElement.classList.add('no-scroll');
}

function closeModal() {
  modal.setAttribute('aria-hidden', true);
  document.documentElement.classList.remove('no-scroll');
}

modal.addEventListener('click', (event) => {
  if (event.target.closest('.modal-overlay')) closeModal();
  if (event.target.closest('.modal-card__button-close')) closeModal();
})

document.addEventListener('keydown', () => closeModal());