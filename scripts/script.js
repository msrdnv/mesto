const popups = document.querySelectorAll('.popup');

const imagePopup = document.querySelector('.image-popup');
const profilePopup = document.querySelector('.profile-popup');
const cardPopup = document.querySelector('.card-popup');

const fullImage = document.querySelector('.popup__full-image');
const imageCaption = document.querySelector('.popup__image-caption');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const profileForm = document.forms['profile-form'];
const cardForm = document.forms['card-form'];

const nameInput = profileForm.elements['name'];
const aboutInput = profileForm.elements['about'];
const cardNameInput = cardForm.elements['card-name'];
const cardLinkInput = cardForm.elements['card-link'];

const gallery = document.querySelector('.gallery');
const cardTemplate = document.querySelector('#element').content;

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

for (let i = initialCards.length; i > 0; i--) {
  addCardPrepend(initialCards[i-1]);
};

function addCardPrepend(item) {
  const card = createCard(item);
  gallery.prepend(card);
};

function createCard(item) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  cardElement.querySelector('.element__name').textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;
  handleLikeButton(cardElement);
  handleDeleteButton(cardElement);
  handleFullImage(cardImage);
  return cardElement;
}

function handleLikeButton (item) {
  const likeButton = item.querySelector('.element__like-button');
  likeButton.addEventListener('click', function (event) {
    event.target.classList.toggle('element__like-button_activated');
  });
};

function handleDeleteButton (item) {
  const deleteButton = item.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', function (event) {
    event.target.closest('.element').remove();
  });
};

function handleFullImage (item) {
  item.addEventListener('click', function () {
    openPopup(imagePopup);
    fullImage.src = item.src;
    fullImage.alt = item.alt;
    imageCaption.textContent = item.nextElementSibling.textContent;
  });
};

function openPopup(item) {
  item.classList.add('popup_opened');
}

function closePopup(item) {
  item.classList.remove('popup_opened');
}

const editButton = document.querySelector('.profile__edit-button');
editButton.addEventListener('click', function () {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  openPopup(profilePopup);
});

const addButton = document.querySelector('.profile__add-button');
addButton.addEventListener('click', function () {
  openPopup(cardPopup);
});

const closeIcons = document.querySelectorAll('.popup__close-icon');
closeIcons.forEach(function (item) {
  item.addEventListener('click', function () {
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


document.addEventListener('keyup', function (event) {
  popups.forEach(function (item) {
    if (item.classList.contains('popup_opened') && event.key === 'Escape') {
      closePopup(item);
    };
  });
});

document.addEventListener('click', function (event) {
  popups.forEach(function (item) {
    if (item.classList.contains('popup_opened') && event.target === item) {
      closePopup(item);
    };
  });
});
