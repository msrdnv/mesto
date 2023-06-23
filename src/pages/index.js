import './index.css';

import { profileForm, cardForm, nameInput, aboutInput, profilePopupOpenButton, cardPopupOpenButton, formSelectors, initialCards } from '../utils/constants.js';
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

const createCard = (cardData) => {
  const card = new Card(cardData, '.element-template', handleCardClick);
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
}

const cardList = new Section ({
  items: initialCards,
  renderer: (cardData) => {
    createCard(cardData);
  },
},
  '.gallery'
);

cardList.renderItems();

const submitProfileForm = (evt, inputValues) => {
  evt.preventDefault();
  userInfo.setUserInfo(inputValues.name, inputValues.about);
  profilePopup.close();
};

const submitCardForm = (evt, inputValues) => {
  evt.preventDefault();
  createCard(inputValues);
  evt.target.reset();
  cardPopup.close();
};

const profilePopup = new PopupWithForm('.profile-popup', submitProfileForm);
profilePopup.setEventListeners();
const cardPopup = new PopupWithForm('.card-popup', submitCardForm);
cardPopup.setEventListeners();
export const imagePopup = new PopupWithImage('.image-popup');
imagePopup.setEventListeners();

profilePopupOpenButton.addEventListener('click', () => {
  nameInput.value = userInfo.getUserInfo().name;
  aboutInput.value = userInfo.getUserInfo().about;
  profilePopup.open();
  profileFormValidator.toggleButtonState();
});

cardPopupOpenButton.addEventListener('click', () => {
  cardPopup.open();
  cardFormValidator.toggleButtonState();
});
