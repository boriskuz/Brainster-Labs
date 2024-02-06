'use strict';

document.querySelector('#filterMarketing').addEventListener('change', filterMarketing);
document.querySelector('#filterCoding').addEventListener('change', filterCoding);
document.querySelector('#filterDesign').addEventListener('change', filterDesign);
const windowWidth = window.innerWidth;

function mainFilter(id, cardClass, filterUncheckedOne, filterUncheckedTwo) {
  if (document.querySelector(id).checked) {
    const cards = document.querySelectorAll(cardClass);
    for (const element of cards) {
      element.style.display = 'block';
    }
    document.querySelector(filterUncheckedOne).checked = false;
    document.querySelector(filterUncheckedTwo).checked = false;
    loadCards(cards);
  } else {
    if (windowWidth <= 425) {
      let cards = document.querySelectorAll('.info-card');
      loadCards(cards);
    } else {
      showAllCards();
    }
  }
}

function hideAllCards() {
  const allCards = document.querySelectorAll('.info-card');
  allCards.forEach((card) => {
    card.style.display = 'none';
  });
}

function showAllCards() {
  const allCards = document.querySelectorAll('.info-card');
  allCards.forEach((card) => {
    card.style.display = 'block';
  });
}

function filterMarketing() {
  hideAllCards();

  mainFilter('#filterMarketing', '.card-marketing', '#filterCoding', '#filterDesign');
}

function filterCoding() {
  hideAllCards();

  mainFilter('#filterCoding', '.card-coding', '#filterMarketing', '#filterDesign');
}

function filterDesign() {
  hideAllCards();

  mainFilter('#filterDesign', '.card-design', '#filterMarketing', '#filterCoding');
}

/////////////////////// MOBILE VIEW ///////////////////////

const loadMoreButton = document.querySelector('#loadMore');
let cards = document.querySelectorAll('.info-card');

function loadCards(filterCards) {
  let currentItems = 6;
  if (filterCards) {
    cards = filterCards;
    loadMoreButton.setAttribute('style', 'display: inline-block !important;');
    if (cards.length <= currentItems) {
      loadMoreButton.setAttribute('style', 'display: none !important;');
    }
  }
  if (windowWidth <= 425) {
    hideAllCards();
    for (let i = 0; i < currentItems; i++) {
      if (i >= cards.length) {
        loadMoreButton.setAttribute('style', 'display: none !important;');
        return;
      }
      cards[i].style.display = 'block';
    }

    loadMoreButton.addEventListener('click', () => {
      for (let i = currentItems; i < currentItems + 6; i++) {
        if (i >= cards.length) {
          loadMoreButton.setAttribute('style', 'display: none !important;');
          return (currentItems = 6);
        }
        cards[i].style.display = 'block';
      }
      currentItems += 6;
    });
  }
}
loadCards();
