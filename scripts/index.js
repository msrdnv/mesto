import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

export { imagePopup, fullImage, imageCaption, openPopup, toggleButtonState };

const popups = document.querySelectorAll('.popup');

const profilePopup = document.querySelector('.profile-popup');
const cardPopup = document.querySelector('.card-popup');
const imagePopup = document.querySelector('.image-popup');

const fullImage = document.querySelector('.popup__full-image');
const imageCaption = document.querySelector('.popup__image-caption');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeIcons = document.querySelectorAll('.popup__close-icon');

const profileForm = document.forms['profile-form'];
const cardForm = document.forms['card-form'];

const profileFormInputs = Array.from(profileForm.querySelectorAll('.popup__input'));
const profileFormSubmitButton = profileForm.querySelector('.popup__submit-button');

const cardFormInputs = Array.from(cardForm.querySelectorAll('.popup__input'));
const cardFormSubmitButton = cardForm.querySelector('.popup__submit-button');

const nameInput = profileForm.elements['name'];
const aboutInput = profileForm.elements['about'];
const cardNameInput = cardForm.elements['card-name'];
const cardLinkInput = cardForm.elements['card-link'];

const gallery = document.querySelector('.gallery');

const formSelectors = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const cardFormValidator = new FormValidator(formSelectors, cardForm);
const profileFormValidator = new FormValidator(formSelectors, profileForm);

const initialCards = [
  {
    name: 'Кронплатц',
    link: './images/01-kronplatz.jpg'
  },
  {
    name: 'Экрен',
    link: './images/02-ecrins.jpg'
  },
  {
    name: 'Солт-Лейк-Сити',
    link: './images/03-salt_lake.jpg'
  },
  {
    name: 'Сиуатанехо',
    link: './images/04-zihuatanejo.jpg'
  },
  {
    name: 'Бонньё',
    link: './images/05-bonnieux.jpg'
  },
  {
    name: 'Доломиты',
    link: './images/06-dolomites.jpg'
  },
];

function addCardPrepend(item) {
  const card = new Card(item, '.element-template');
  const cardElement = card.generateCard();
  gallery.prepend(cardElement);
};

for (let i = initialCards.length; i > 0; i--) {
  addCardPrepend(initialCards[i-1]);
};

function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
};

function closePopup(item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
};

function closeByEsc(event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

function closeByClick(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  };
};

popups.forEach((item) => {
  item.addEventListener('click', closeByClick);
});

function hasInvalidInput (inputsList) {
  return inputsList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

function toggleButtonState (inputsList, submitButtonElement, inactiveButtonClass) {
  if (hasInvalidInput(inputsList)) {
    submitButtonElement.classList.add(inactiveButtonClass);
    submitButtonElement.setAttribute('disabled', '');
  }
  else {
    submitButtonElement.classList.remove(inactiveButtonClass);
    submitButtonElement.removeAttribute('disabled', '');
  };
};

cardFormValidator.enableValidation();
profileFormValidator.enableValidation();

editButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  openPopup(profilePopup);
  toggleButtonState(profileFormInputs, profileFormSubmitButton, 'popup__submit-button_disabled');
});

addButton.addEventListener('click', () => {
  openPopup(cardPopup);
  toggleButtonState(cardFormInputs, cardFormSubmitButton, 'popup__submit-button_disabled');
});

closeIcons.forEach((item) => {
  item.addEventListener('click', () => {
    closePopup(item.closest('.popup'));
  });
});

function submitProfileForm (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(profilePopup);
};

function submitCardForm (event) {
  event.preventDefault();
  const newCard = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };
  addCardPrepend(newCard);
  event.target.reset();
  closePopup(cardPopup);
};

profileForm.addEventListener('submit', submitProfileForm);
cardForm.addEventListener('submit', submitCardForm);
