import './index.css';

import { profileForm, cardForm, nameInput, aboutInput, cardNameInput, cardLinkInput, editButton, addButton, formSelectors, initialCards } from '../utils/constants.js';
import { handleCardClick } from '../utils/utils.js';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

const userInfo = new UserInfo({nameSelector : '.profile__name', aboutSelector : '.profile__about'});

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
  userInfo.setUserInfo();
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
  nameInput.value = userInfo.getUserInfo().name;
  aboutInput.value = userInfo.getUserInfo().about;
  profilePopup.open();
  profileFormValidator.toggleButtonState('popup__submit-button_disabled');
});

addButton.addEventListener('click', () => {
  cardPopup.open();
  cardFormValidator.toggleButtonState('popup__submit-button_disabled');
});
