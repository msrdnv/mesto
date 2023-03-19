let editButton = document.querySelector('.profile__edit-button');
let closeIcon = document.querySelector('.popup__close-icon');
let popup = document.querySelector('.popup');

let popupForm = document.querySelector('.popup__container');

let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let popupNameInput = document.querySelector('.popup__name');
let popupAboutInput = document.querySelector('.popup__about');


editButton.addEventListener('click', function () {
  popup.classList.add('popup_opened');
  popupNameInput.value = profileName.textContent;
  popupAboutInput.value = profileAbout.textContent;
})

closeIcon.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
})

function handleFormSubmit (event) {
  event.preventDefault();
  profileName.textContent = popupNameInput.value;
  profileAbout.textContent = popupAboutInput.value;
}

popupForm.addEventListener('submit', handleFormSubmit);


