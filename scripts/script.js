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

let cardsLinks = document.querySelectorAll('.element__image');
cardsLinks.forEach(function(item, index) {
  item.src = initialCards[index].link;
});

let cardsNames = document.querySelectorAll('.element__name');
cardsNames.forEach(function(item, index) {
  item.textContent = initialCards[index].name;
});


let popup = document.querySelector('.popup');

let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

let editButton = document.querySelector('.profile__edit-button');
let closeIcon = document.querySelector('.popup__close-icon');

let popupForm = document.querySelector('.popup__form');

let popupInput = document.querySelectorAll('.popup__input');

editButton.addEventListener('click', function () {
  popup.classList.add('popup_opened');
  popupInput[0].value = profileName.textContent;
  popupInput[1].value = profileAbout.textContent;
})

closeIcon.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
})

function handleFormSubmit (event) {
  event.preventDefault();
  profileName.textContent = popupInput[0].value;
  profileAbout.textContent = popupInput[1].value;
  popup.classList.remove('popup_opened');
}

popupForm.addEventListener('submit', handleFormSubmit);

