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

function addCardPrepend(object) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = object.link;
  cardElement.querySelector('.element__name').textContent = object.name;
  gallery.prepend(cardElement);
};

for (let i = initialCards.length; i > 0; i--) {
  addCardPrepend(initialCards[i-1]);
}

function openEditNamePopup() {
  popup.classList.add('popup_opened');
  popupEditNameContainer.classList.add('popup__container_opened');
}

function openAddCardPopup() {
  popup.classList.add('popup_opened');
  popupAddCardContainer.classList.add('popup__container_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
  popupEditNameContainer.classList.remove('popup__container_opened');
  popupAddCardContainer.classList.remove('popup__container_opened');
}

const popup = document.querySelector('.popup');
const popupTemplate = document.querySelector('#popup-container').content;

const popupEditNameContainer = popupTemplate.querySelector('.popup__container').cloneNode(true);
const popupEditNameCloseIcon = popupEditNameContainer.querySelector('.popup__close-icon');
popupEditNameContainer.querySelector('.popup__title').textContent = 'Редактировать профиль';
const popupEditNameForm = popupEditNameContainer.querySelector('.popup__form');
popupEditNameForm.name = 'popup-edit-name-form';
const popupEditNameFormInput = popupEditNameContainer.querySelectorAll('.popup__input');
popupEditNameFormInput[0].name = 'input-name';
popupEditNameFormInput[1].name = 'input-about';
popupEditNameFormInput[0].placeholder = 'Имя';
popupEditNameFormInput[1].placeholder = 'О себе';
popupEditNameContainer.querySelector('.popup__submit-button').textContent = 'Сохранить';
popup.append(popupEditNameContainer);

const popupAddCardContainer = popupTemplate.querySelector('.popup__container').cloneNode(true);
const popupAddCardCloseIcon = popupAddCardContainer.querySelector('.popup__close-icon');
popupAddCardContainer.querySelector('.popup__title').textContent = 'Новое место';
const popupAddCardForm = popupAddCardContainer.querySelector('.popup__form');
popupAddCardForm.name = 'popup-add-card-form';
const popupAddCardFormInput = popupAddCardContainer.querySelectorAll('.popup__input');
popupAddCardFormInput[0].name = 'input-card-name';
popupAddCardFormInput[1].name = 'input-card-link';
popupAddCardFormInput[0].placeholder = 'Название';
popupAddCardFormInput[1].placeholder = 'Ссылка на картинку';
popupAddCardContainer.querySelector('.popup__submit-button').textContent = 'Создать';
popup.append(popupAddCardContainer);

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

editButton.addEventListener('click', function () {
  popupEditNameFormInput[0].value = profileName.textContent;
  popupEditNameFormInput[1].value = profileAbout.textContent;
  openEditNamePopup();
});

addButton.addEventListener('click', function() {
  openAddCardPopup();
});

popupAddCardCloseIcon.addEventListener('click', function() {
  closePopup();
})

popupEditNameCloseIcon.addEventListener('click', function() {
  closePopup();
})

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
