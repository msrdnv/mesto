let popup = document.querySelector('.popup');

let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

let editButton = document.querySelector('.profile__edit-button');
let closeIcon = document.querySelector('.popup__close-icon');

let popupForm = document.querySelector('.popup__container');

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
  popup.classList.remove('popup_opened');
}

popupForm.addEventListener('submit', handleFormSubmit);


