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

const gallery = document.querySelector('.gallery');
const cardTemplate = document.querySelector('#element').content;

initialCards.forEach(function(item) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = item.link;
  cardElement.querySelector('.element__name').textContent = item.name;
  gallery.append(cardElement);
});


let popup = document.querySelector('.popup');
let popupContainer = document.querySelectorAll('.popup__container');

let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');

let closeIcons = document.querySelectorAll('.popup__close-icon');
let closeIconEditContainer = closeIcons[0];
let closeIconAddContainer = closeIcons[1];

let popupForm = document.querySelector('.popup__form');

let popupInput = document.querySelectorAll('.popup__input');

editButton.addEventListener('click', function () {
  popup.classList.add('popup_opened');
  popupContainer[0].classList.add('popup__container_edit');
  popupInput[0].value = profileName.textContent;
  popupInput[1].value = profileAbout.textContent;
})

closeIconEditContainer.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
  popupContainer[0].classList.remove('popup__container_edit');
})

addButton.addEventListener('click', function () {
  popup.classList.add('popup_opened');
  popupContainer[1].classList.add('popup__container_add');
})

closeIconAddContainer.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
  popupContainer[1].classList.remove('popup__container_add');
})


function handleFormSubmit (event) {
  event.preventDefault();
  profileName.textContent = popupInput[0].value;
  profileAbout.textContent = popupInput[1].value;
  popupContainer[0].classList.remove('popup__container_edit');
  popupContainer[1].classList.remove('popup__container_add');
  popup.classList.remove('popup_opened');
}

popupForm.addEventListener('submit', handleFormSubmit);

