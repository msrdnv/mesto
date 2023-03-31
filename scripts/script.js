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

const popupContainers = document.querySelectorAll('.popup__container');
const popupEditNameContainer = popupContainers[0];
const popupAddCardContainer = popupContainers[1];

const fullImageWindow = document.querySelector('.popup__full-image-window');

const popupForms = document.querySelectorAll('.popup__form');
const popupEditNameForm = popupForms[0];
const popupAddCardForm = popupForms[1];

const popupInputs = document.querySelectorAll('.popup__input');
const popupEditNameFormInput = [popupInputs[0], popupInputs[1]];
const popupAddCardFormInput = [popupInputs[2], popupInputs[3]];

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
};

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
    openAddFadeIn(popup);
    openAddFadeIn(fullImageWindow);
    popup.classList.add('popup_dark');
    popup.querySelector('.popup__full-image').src = cardImage.src;
    popup.querySelector('.popup__full-image-caption').textContent = cardImage.nextElementSibling.textContent;
  });
};

function openEditNameContainer() {
  openAddFadeIn(popup);
  openAddFadeIn(popupEditNameContainer);
};

function openAddCardContainer() {
  openAddFadeIn(popup);
  openAddFadeIn(popupAddCardContainer);
  popupAddCardFormInput[0].value = null;
  popupAddCardFormInput[1].value = null;
};

function openAddFadeIn (element) {
  element.classList.add('element-opened', 'fade-in');
};

function removeFadeIn (element) {
  element.classList.remove('fade-in');
};

function addFadeOut (element) {
  element.classList.add('fade-out');
};

function closeRemoveFadeOut(element) {
  element.classList.remove('element-opened', 'fade-out');
};

popup.addEventListener('animationend', function (event) {
  if (event.animationName === 'fade-in') {
    [popup, ...popup.children].forEach(function (item) {
      removeFadeIn(item);
    });
  };
});

function closeAllWindows() {
  [popup, ...popup.children].forEach(function (item) {
    addFadeOut(item);
  });
};

popup.addEventListener('animationend', function (event) {
  if (event.animationName === 'fade-out') {
    [popup, ...popup.children].forEach(function (item) {
      closeRemoveFadeOut(item);
    });
    popup.classList.remove('popup_dark');
  };
});

const editButton = document.querySelector('.profile__edit-button');
editButton.addEventListener('click', function () {
  popupEditNameFormInput[0].value = profileName.textContent;
  popupEditNameFormInput[1].value = profileAbout.textContent;
  openEditNameContainer();
});

const addButton = document.querySelector('.profile__add-button');
addButton.addEventListener('click', openAddCardContainer);

const closeIcons = document.querySelectorAll('.popup__close-icon');
closeIcons.forEach(function (item) {
  item.addEventListener('click', closeAllWindows);
});

function submitEditNameForm (event) {
  event.preventDefault();
  profileName.textContent = popupEditNameFormInput[0].value;
  profileAbout.textContent = popupEditNameFormInput[1].value;
  closeAllWindows();
};

function submitAddCardForm (event) {
  event.preventDefault();
  const newCard = {
    name: popupAddCardFormInput[0].value,
    link: popupAddCardFormInput[1].value,
  };
  addCardPrepend(newCard);
  closeAllWindows();
};

popupEditNameForm.addEventListener('submit', submitEditNameForm);
popupAddCardForm.addEventListener('submit', submitAddCardForm);
