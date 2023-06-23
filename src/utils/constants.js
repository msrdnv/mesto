export const profileForm = document.forms['profile-form'];
export const cardForm = document.forms['card-form'];

export const nameInput = profileForm.elements['name'];
export const aboutInput = profileForm.elements['about'];

export const profilePopupOpenButton = document.querySelector('.profile__edit-button');
export const cardPopupOpenButton = document.querySelector('.profile__add-button');

export const fullImage = document.querySelector('.popup__full-image');
export const imageCaption = document.querySelector('.popup__image-caption');

export const formSelectors = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const imageKronplatz = new URL('../images/01-kronplatz.jpg', import.meta.url);
const imageEcrins = new URL('../images/02-ecrins.jpg', import.meta.url);
const imageSaltLake = new URL('../images/03-salt_lake.jpg', import.meta.url);
const imageZihuatanejo = new URL('../images/04-zihuatanejo.jpg', import.meta.url);
const imageBonnieux = new URL('../images/05-bonnieux.jpg', import.meta.url);
const imageDolomites = new URL('../images/06-dolomites.jpg', import.meta.url);

export const initialCards = [
  {
    description: 'Кронплатц',
    link: imageKronplatz
  },
  {
    description: 'Экрен',
    link: imageEcrins
  },
  {
    description: 'Солт-Лейк-Сити',
    link: imageSaltLake
  },
  {
    description: 'Сиуатанехо',
    link: imageZihuatanejo
  },
  {
    description: 'Бонньё',
    link: imageBonnieux
  },
  {
    description: 'Доломиты',
    link: imageDolomites
  },
];
