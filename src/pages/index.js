import './index.css';

import { profileName, profileAbout, editButton, addButton, initialCards } from '../utils/constants.js';
import { handleCardClick } from '../utils/utils';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';

const profileForm = document.forms['profile-form'];
const cardForm = document.forms['card-form'];

const nameInput = profileForm.elements['name'];
const aboutInput = profileForm.elements['about'];
const cardNameInput = cardForm.elements['card-name'];
const cardLinkInput = cardForm.elements['card-link'];

const formSelectors = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const cardFormValidator = new FormValidator(formSelectors, cardForm);
const profileFormValidator = new FormValidator(formSelectors, profileForm);

cardFormValidator.enableValidation();
profileFormValidator.enableValidation();

const cardList = new Section ({
  items: initialCards,
  renderer: (cardItem) => {
    const card = new Card(cardItem, '.element-template', handleCardClick);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
},
  '.gallery'
);

cardList.renderItems();

const submitProfileForm = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  profilePopup.close();
};

const submitCardForm = (evt) => {
  evt.preventDefault();
  const newCardData = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };
  const newCard = new Card(newCardData, '.element-template', handleCardClick);
  const newCardElement = newCard.generateCard();
  cardList.addItem(newCardElement);
  evt.target.reset();
  cardPopup.close();
};

const profilePopup = new PopupWithForm('.profile-popup', submitProfileForm);
profilePopup.setEventListeners();
const cardPopup = new PopupWithForm('.card-popup', submitCardForm);
cardPopup.setEventListeners();
export const imagePopup = new PopupWithImage('.image-popup');
imagePopup.setEventListeners();

editButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  profilePopup.open();
  profileFormValidator.toggleButtonState('popup__submit-button_disabled');
});

addButton.addEventListener('click', () => {
  cardPopup.open();
  cardFormValidator.toggleButtonState('popup__submit-button_disabled');
});
