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

function openEditFormPopup() {
  popup.classList.add('popup_opened');
  popupEditFormContainer.classList.add('popup__container_opened');
}

function openAddCardPopup() {
  popup.classList.add('popup_opened');
  popupAddCardContainer.classList.add('popup__container_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
  popupEditFormContainer.classList.remove('popup__container_opened');
  popupAddCardContainer.classList.remove('popup__container_opened');
}

const popup = document.querySelector('.popup');
const popupTemplate = document.querySelector('#popup-container').content;

const popupEditFormContainer = popupTemplate.querySelector('.popup__container').cloneNode(true);
const popupEditFormCloseIcon = popupEditFormContainer.querySelector('.popup__close-icon');
popupEditFormContainer.querySelector('.popup__title').textContent = 'Редактировать профиль';
const popupEditForm = popupEditFormContainer.querySelector('.popup__form');
popupEditForm.name = 'popup-edit-form';
const popupEditInput = popupEditFormContainer.querySelectorAll('.popup__input');
popupEditInput[0].name = 'input-name';
popupEditInput[1].name = 'input-about';
popupEditInput[0].placeholder = 'Имя';
popupEditInput[1].placeholder = 'О себе';
popupEditFormContainer.querySelector('.popup__submit-button').textContent = 'Сохранить';
popup.append(popupEditFormContainer);

const popupAddCardContainer = popupTemplate.querySelector('.popup__container').cloneNode(true);
const popupAddCardCloseIcon = popupAddCardContainer.querySelector('.popup__close-icon');
popupAddCardContainer.querySelector('.popup__title').textContent = 'Новое место';
const popupAddCardForm = popupAddCardContainer.querySelector('.popup__form');
popupAddCardForm.name = 'popup-add-card-form';
const popupAddInput = popupAddCardContainer.querySelectorAll('.popup__input');
popupAddInput[0].name = 'input-card-name';
popupAddInput[1].name = 'input-card-link';
popupAddInput[0].placeholder = 'Название';
popupAddInput[1].placeholder = 'Ссылка на картинку';
popupAddCardContainer.querySelector('.popup__submit-button').textContent = 'Создать';
popup.append(popupAddCardContainer);

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

editButton.addEventListener('click', function () {
  popupEditInput[0].value = profileName.textContent;
  popupEditInput[1].value = profileAbout.textContent;
  openEditFormPopup();
});

addButton.addEventListener('click', function() {
  openAddCardPopup();
});

popupAddCardCloseIcon.addEventListener('click', function() {
  closePopup();
})

popupEditFormCloseIcon.addEventListener('click', function() {
  closePopup();
})

function submitEditForm (event) {
  event.preventDefault();
  profileName.textContent = popupEditInput[0].value;
  profileAbout.textContent = popupEditInput[1].value;
  closePopup();
};

function submitAddCard (event) {
  event.preventDefault();
  const newCard = {
    name: popupAddInput[0].value,
    link: popupAddInput[1].value,
  };
  addCardPrepend(newCard);
  closePopup();
}

popupEditForm.addEventListener('submit', submitEditForm);
popupAddCardForm.addEventListener('submit', submitAddCard);
