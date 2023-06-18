import './index.css';
import { openPopup, closePopup } from '../utils/utils.js';
import { initialCards } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';

const popups = document.querySelectorAll('.popup');

const profilePopup = document.querySelector('.profile-popup');
const cardPopup = document.querySelector('.card-popup');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeIcons = document.querySelectorAll('.popup__close-icon');

const profileForm = document.forms['profile-form'];
const cardForm = document.forms['card-form'];

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

function addCardPrepend(item) {
  const card = new Card(item, '.element-template');
  const cardElement = card.generateCard();
  gallery.prepend(cardElement);
};

for (let i = initialCards.length; i > 0; i--) {
  addCardPrepend(initialCards[i-1]);
};

function closeByClick(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  };
};

popups.forEach((item) => {
  item.addEventListener('click', closeByClick);
});

cardFormValidator.enableValidation();
profileFormValidator.enableValidation();

editButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  openPopup(profilePopup);
  profileFormValidator.toggleButtonState('popup__submit-button_disabled');
});

addButton.addEventListener('click', () => {
  openPopup(cardPopup);
  cardFormValidator.toggleButtonState('popup__submit-button_disabled');
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
