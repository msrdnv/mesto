import './index.css';
import { openPopup, closePopup } from '../utils/utils.js';
import { initialCards } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';

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

const formSelectors = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const cardFormValidator = new FormValidator(formSelectors, cardForm);
const profileFormValidator = new FormValidator(formSelectors, profileForm);


const cardList = new Section ({
  items: initialCards,
  renderer: (cardItem) => {
    const card = new Card(cardItem, '.element-template');
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
},
  '.gallery'
);

cardList.renderItems();

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
  const newCardData = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };
  const newCard = new Card(newCardData, '.element-template');
  const newCardElement = newCard.generateCard();
  cardList.addItem(newCardElement);
  event.target.reset();
  closePopup(cardPopup);
};

profileForm.addEventListener('submit', submitProfileForm);
cardForm.addEventListener('submit', submitCardForm);
