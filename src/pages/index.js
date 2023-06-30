import './index.css';

import { profileForm, cardForm, usernameInput, aboutInput, profilePopupOpenButton, cardPopupOpenButton, formSelectors } from '../utils/constants.js';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';

const cardFormValidator = new FormValidator(formSelectors, cardForm);
const profileFormValidator = new FormValidator(formSelectors, profileForm);

cardFormValidator.enableValidation();
profileFormValidator.enableValidation();

const userInfo = new UserInfo({usernameSelector : '.profile__name', aboutSelector : '.profile__about'});
const api = new Api();

api.getInitialCards()
.then((res) => {
  return res;
})
.then((data) => {
  console.log(data);
  cardListRenderer.renderItems(data);
})
.catch((err) => {
  console.log(err);
});

api.getUserData()
.then((res) => {
  return res;
})
.then((data) => {
  console.log(data);
  userInfo.setUserInfo(data.name, data.about);
})
.catch((err) => {
  console.log(err);
});

const handleCardClick = (elementImage) => {
  elementImage.addEventListener('click', () => {
    imagePopup.open(elementImage);
  });
};

const handleServerLike = (likeButton, cardId) => {
  if (likeButton.classList.contains('element__like-button_activated')) {
    api.putLikeCard(cardId)
    .then((res) => {
      return res;
    })
    .then((data) => {
      likeButton.nextElementSibling.textContent = data.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
  } else {
    api.deleteLikeCard(cardId)
    .then((res) => {
      return res;
    })
    .then((data) => {
      likeButton.nextElementSibling.textContent = data.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
  }
};

const createCard = (cardData) => {
  const card = new Card(cardData, '.element-template', handleCardClick, handleServerLike);
  const cardElement = card.generateCard();
  cardListRenderer.addItem(cardElement);
}

const cardListRenderer = new Section ({
  renderer: (cardData) => {
    createCard(cardData);
  },
},
  '.gallery'
);

const submitProfileForm = (evt, inputValues) => {
  evt.preventDefault();
  userInfo.setUserInfo(inputValues.username, inputValues.about);
  api.editUserData({name : inputValues.username, about: inputValues.about});
  profilePopup.close();
};

const submitCardForm = (evt, inputValues) => {
  evt.preventDefault();
  api.postNewCard(inputValues)
    .then((res) => {
      return res;
    })
    .then((data) => {
      createCard({name: inputValues.name, link: inputValues.link, likes: data.likes, _id : data._id});
    })
    .catch((err) => {
      console.log(err);
    });
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
  usernameInput.value = userInfo.getUserInfo().username;
  aboutInput.value = userInfo.getUserInfo().about;
  profilePopup.open();
  profileFormValidator.toggleButtonState();
});

cardPopupOpenButton.addEventListener('click', () => {
  cardPopup.open();
  cardFormValidator.toggleButtonState();
});
