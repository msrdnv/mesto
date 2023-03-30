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

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const popup = document.querySelector('.popup');

const popupContainer = document.querySelectorAll('.popup__container');
const popupEditNameContainer = popupContainer[0];
const popupAddCardContainer = popupContainer[1];

const popupForm = document.querySelectorAll('.popup__form');
const popupEditNameForm = popupForm[0];
const popupAddCardForm = popupForm[1];

const popupInput = document.querySelectorAll('.popup__input');
const popupEditNameFormInput = [popupInput[0], popupInput[1]];
const popupAddCardFormInput = [popupInput[2], popupInput[3]];

const fullImageWindow = document.querySelector('.popup__full-image-window');

const gallery = document.querySelector('.gallery');
const cardTemplate = document.querySelector('#element').content;

function addCardPrepend(object) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = object.link;
  cardElement.querySelector('.element__name').textContent = object.name;
  gallery.prepend(cardElement);
  handleLikeButton();
  handleDeleteButton();
  handleFullImage();
};

for (let i = initialCards.length; i > 0; i--) {
  addCardPrepend(initialCards[i-1]);
}

function openPopup() {
  popup.classList.add('popup_opened');
}

function openEditNamePopup() {
  openPopup();
  popupEditNameContainer.classList.add('popup__container_opened');
}

function openAddCardPopup() {
  popupAddCardFormInput[0].value = null;
  popupAddCardFormInput[1].value = null;
  openPopup();
  popupAddCardContainer.classList.add('popup__container_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
  popup.classList.remove('popup_dark');
  popupEditNameContainer.classList.remove('popup__container_opened');
  popupAddCardContainer.classList.remove('popup__container_opened');
  fullImageWindow.classList.remove('popup__full-image-window_opened');
}

const editButton = document.querySelector('.profile__edit-button');
editButton.addEventListener('click', function () {
  popupEditNameFormInput[0].value = profileName.textContent;
  popupEditNameFormInput[1].value = profileAbout.textContent;
  openEditNamePopup();
});

const addButton = document.querySelector('.profile__add-button');
addButton.addEventListener('click', openAddCardPopup);

const closeIcon = document.querySelectorAll('.popup__close-icon');
closeIcon.forEach(function (item) {
  item.addEventListener('click', closePopup);
});

function submitEditNameForm (event) {
  event.preventDefault();
  profileName.textContent = popupEditNameFormInput[0].value;
  profileAbout.textContent = popupEditNameFormInput[1].value;
  closePopup();
};

function submitAddCardForm (event) {
  event.preventDefault();
  const newCard = {
    name: popupAddCardFormInput[0].value,
    link: popupAddCardFormInput[1].value,
  };
  addCardPrepend(newCard);
  closePopup();
}

popupEditNameForm.addEventListener('submit', submitEditNameForm);
popupAddCardForm.addEventListener('submit', submitAddCardForm);

function handleLikeButton () {
  const likeButton = document.querySelector('.element__like-button');
  likeButton.addEventListener('click', function (event) {
    event.target.classList.toggle('element__like-button_activated');
  });
};

function handleDeleteButton () {
  const deleteButton = document.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', function (event) {
    event.target.parentElement.remove();
  });
};

function handleFullImage () {
  const cardImage = document.querySelector('.element__image');
  cardImage.addEventListener('click', function () {
    openPopup();
    popup.classList.add('popup_dark');
    fullImageWindow.classList.add('popup__full-image-window_opened');
    popup.querySelector('.popup__full-image').src = cardImage.src;
    popup.querySelector('.popup__full-image-caption').textContent = cardImage.nextElementSibling.textContent;
  });
};

