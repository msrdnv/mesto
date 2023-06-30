import './index.css';

import { cardForm, profileForm, avatarForm, usernameInput, aboutInput, profilePopupOpenButton, cardPopupOpenButton, avatarPopupOpenButton, avatarImage, formSelectors } from '../utils/constants.js';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';

export const api = new Api();
export const imagePopup = new PopupWithImage('.image-popup');
imagePopup.setEventListeners();

const cardFormValidator = new FormValidator(formSelectors, cardForm);
const profileFormValidator = new FormValidator(formSelectors, profileForm);
const avatarFormValidator = new FormValidator(formSelectors, avatarForm);

cardFormValidator.enableValidation();
profileFormValidator.enableValidation();
avatarFormValidator.enableValidation();

const userInfo = new UserInfo({usernameSelector : '.profile__name', aboutSelector : '.profile__about'});

const setAvatar = (data) => {
  avatarImage.src = data.avatar;
}

api.getUserData()
.then((res) => {
  return res;
})
.then((data) => {
  console.log(data);
  setAvatar(data);
  userInfo.setUserInfo(data.name, data.about);
})
.catch((err) => {
  console.log(err);
});

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

const handleDeleteButton = (element, ownerId, cardId) => {
  if (ownerId === '776182348fc2690689a97f1a') {
    element.firstElementChild.classList.add('element__delete-button_visible');
    element.firstElementChild.addEventListener('click', () => {
      confirmationPopup.open();
      confirmationPopup.setConfirmationListener(cardId, element);
    });
  };
};

const createCard = (cardData) => {
  const card = new Card(cardData, '.element-template', handleCardClick, handleServerLike, handleDeleteButton);
  const cardElement = card.generateCard();
  cardListRenderer.addItem(cardElement);
};

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
      createCard({name: inputValues.name, link: inputValues.link, likes: data.likes, _id: data._id, owner: {_id: data.owner._id}});
    })
    .catch((err) => {
      console.log(err);
    });
  evt.target.reset();
  cardPopup.close();
};

const submitAvatarForm = (evt, inputValues) => {
  console.log(inputValues);
  evt.preventDefault();
  api.editUserAvatar({avatar: inputValues.avatar})
  .then((res) => {
    return res;
  })
  .then((data) => {
    console.log(data);
    setAvatar(data);
  })
  .catch((err) => {
    console.log(err);
  });
  avatarPopup.close();
};

const handleConfirmation = (evt, cardId, element) => {
  evt.preventDefault();
  api.deleteCard(cardId)
  .then((res) => {
    return res;
  })
  .then(() => {
    element.remove();
    element = null;
  })
  .catch((err) => {
    console.log(err);
  });
  confirmationPopup.close();
};

const profilePopup = new PopupWithForm('.profile-popup', submitProfileForm);
profilePopup.setEventListeners();
const cardPopup = new PopupWithForm('.card-popup', submitCardForm);
cardPopup.setEventListeners();
const avatarPopup = new PopupWithForm('.avatar-popup', submitAvatarForm);
avatarPopup.setEventListeners();
const confirmationPopup = new PopupWithConfirmation('.confirmation-popup', handleConfirmation);
confirmationPopup.setEventListeners();


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

avatarPopupOpenButton.addEventListener('click', () => {
  avatarPopup.open();
  cardFormValidator.toggleButtonState();
});
