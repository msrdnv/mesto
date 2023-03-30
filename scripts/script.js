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
  handleLikeButton();
  handleDeleteButton();
};

for (let i = initialCards.length; i > 0; i--) {
  addCardPrepend(initialCards[i-1]);
}

function openEditNamePopup() {
  popup.classList.add('popup_opened');
  popupEditNameContainer.classList.add('popup__container_opened');
}

function openAddCardPopup() {
  popupAddCardFormInput[0].value = null;
  popupAddCardFormInput[1].value = null;
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
const popupAddCardContainer = popupTemplate.querySelector('.popup__container').cloneNode(true);
const popupEditNameContainer = popupTemplate.querySelector('.popup__container').cloneNode(true);

popupEditNameContainer.querySelector('.popup__title').textContent = 'Редактировать профиль';
popupEditNameContainer.querySelector('.popup__submit-button').textContent = 'Сохранить';

const popupEditNameForm = popupEditNameContainer.querySelector('.popup__form');
popupEditNameForm.name = 'popup-edit-name-form';

const popupEditNameFormInput = popupEditNameContainer.querySelectorAll('.popup__input');
popupEditNameFormInput[0].name = 'input-name';
popupEditNameFormInput[1].name = 'input-about';
popupEditNameFormInput[0].placeholder = 'Имя';
popupEditNameFormInput[1].placeholder = 'О себе';
popup.append(popupEditNameContainer);

popupAddCardContainer.querySelector('.popup__title').textContent = 'Новое место';
popupAddCardContainer.querySelector('.popup__submit-button').textContent = 'Создать';

const popupAddCardForm = popupAddCardContainer.querySelector('.popup__form');
popupAddCardForm.name = 'popup-add-card-form';

const popupAddCardFormInput = popupAddCardContainer.querySelectorAll('.popup__input');
popupAddCardFormInput[0].name = 'input-card-name';
popupAddCardFormInput[1].name = 'input-card-link';
popupAddCardFormInput[0].placeholder = 'Название';
popupAddCardFormInput[1].placeholder = 'Ссылка на картинку';
popup.append(popupAddCardContainer);

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

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
    event.target.parentNode.remove();
  });
};


