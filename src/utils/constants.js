export const cardForm = document.forms['card-form'];
export const profileForm = document.forms['profile-form'];
export const avatarForm = document.forms['avatar-form'];

export const usernameInput = profileForm.elements['username'];
export const aboutInput = profileForm.elements['about'];

export const profilePopupOpenButton = document.querySelector('.profile__edit-button');
export const cardPopupOpenButton = document.querySelector('.profile__add-button');
export const avatarPopupOpenButton = document.querySelector('.profile__avatar-update-icon');

export const avatarImage = document.querySelector('.profile__avatar');
export const fullImage = document.querySelector('.popup__full-image');
export const imageCaption = document.querySelector('.popup__image-caption');

export const formSelectors = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
