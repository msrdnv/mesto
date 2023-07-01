import './index.css';

import { profilePopupOpenButton, cardPopupOpenButton, avatarPopupOpenButton, formSelectors } from '../utils/constants.js';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
  headers: {
    authorization: '8b924108-8ca1-4711-b126-8a96bbad8ecc',
    'Content-Type': 'application/json'
  }
});

export const confirmationPopup = new PopupWithConfirmation('.confirmation-popup');
confirmationPopup.setEventListeners();

const formValidators = {}

const enableValidation = (formSelectors) => {
  const formList = Array.from(document.querySelectorAll(formSelectors.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(formSelectors, formElement)
    const formName = formElement.getAttribute('name')
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(formSelectors);

const userInfo = new UserInfo({nameSelector: '.profile__name', aboutSelector: '.profile__about', avatarSelector: '.profile__avatar'});

Promise.all([api.getUserData(), api.getCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData)
    cardListRenderer.renderItems(cards)
  })
  .catch(console.error);

const handleCardClick = (elementImage) => elementImage.addEventListener('click', () => imagePopup.open(elementImage));

const handleLike = (card) => {
  if (card.checkLikeButton()) {
    api.deleteLikeCard(card.getCardId())
    .then((res) => {
      card.toggleLikeButton();
      card.setLikeCounter(res);
    })
    .catch(console.error)
  } else {
    api.putLikeCard(card.getCardId())
    .then((res) => {
      card.toggleLikeButton();
      card.setLikeCounter(res);
    })
    .catch(console.error)
  }
};

const handleDelete = (card) => confirmationPopup.open(card);

const getCard = (cardData) => {
  const cardElement = new Card(cardData, '.element-template', handleCardClick, handleLike, handleDelete);
  return cardElement.generateCard(userInfo.id);
};

const createCard = (cardData) => {
  const cardElement = getCard(cardData);
  cardListRenderer.addItem(cardElement);
};

const cardListRenderer = new Section ({
  renderer: createCard,
},
  '.gallery'
);

const submitProfileForm = (evt, inputValues) => {
  evt.preventDefault();
  profilePopup.renderLoading(true);
  api.editUserData({name : inputValues.name, about: inputValues.about})
  .then((res) => res)
  .then((data) => {
    userInfo.setUserInfo(data);
    profilePopup.close();
  })
  .catch(console.error)
  .finally(() => profilePopup.renderLoading(false));
};

const submitCardForm = (evt, inputValues) => {
  evt.preventDefault();
  cardPopup.renderLoading(true);
  api.postNewCard(inputValues)
  .then((res) => res)
  .then((data) => {
    createCard({name: inputValues.name, link: inputValues.link, likes: data.likes, _id: data._id, owner: {_id: data.owner._id}});
    cardPopup.close();
  })
  .catch(console.error)
  .finally(() => cardPopup.renderLoading(false));
};

const submitAvatarForm = (evt, inputValues) => {
  evt.preventDefault();
  avatarPopup.renderLoading(true);
  api.editUserAvatar({avatar: inputValues.avatar})
  .then((res) => res)
  .then((data) => {
    userInfo.setUserInfo(data);
    avatarPopup.close();
  })
  .catch(console.error)
  .finally(() => avatarPopup.renderLoading(false));
};

const profilePopup = new PopupWithForm('.profile-popup', submitProfileForm);
profilePopup.setEventListeners();
const cardPopup = new PopupWithForm('.card-popup', submitCardForm);
cardPopup.setEventListeners();
const avatarPopup = new PopupWithForm('.avatar-popup', submitAvatarForm);
avatarPopup.setEventListeners();
const imagePopup = new PopupWithImage('.image-popup');
imagePopup.setEventListeners();

profilePopupOpenButton.addEventListener('click', () => {
  profilePopup.setInputValues(userInfo.getUserInfo());
  profilePopup.open();
  formValidators['profile-form'].resetValidation()
});

cardPopupOpenButton.addEventListener('click', () => {
  cardPopup.open();
  formValidators['card-form'].resetValidation()
});

avatarPopupOpenButton.addEventListener('click', () => {
  avatarPopup.open();
  formValidators['avatar-form'].resetValidation()
});
