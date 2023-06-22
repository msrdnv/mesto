export const profileName = document.querySelector('.profile__name');
export const profileAbout = document.querySelector('.profile__about');

export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');

export const fullImage = document.querySelector('.popup__full-image');
export const imageCaption = document.querySelector('.popup__image-caption');

const imageKronplatz = new URL('../images/01-kronplatz.jpg', import.meta.url);
const imageEcrins = new URL('../images/02-ecrins.jpg', import.meta.url);
const imageSaltLake = new URL('../images/03-salt_lake.jpg', import.meta.url);
const imageZihuatanejo = new URL('../images/04-zihuatanejo.jpg', import.meta.url);
const imageBonnieux = new URL('../images/05-bonnieux.jpg', import.meta.url);
const imageDolomites = new URL('../images/06-dolomites.jpg', import.meta.url);

export const initialCards = [
  {
    name: 'Кронплатц',
    link: imageKronplatz
  },
  {
    name: 'Экрен',
    link: imageEcrins
  },
  {
    name: 'Солт-Лейк-Сити',
    link: imageSaltLake
  },
  {
    name: 'Сиуатанехо',
    link: imageZihuatanejo
  },
  {
    name: 'Бонньё',
    link: imageBonnieux
  },
  {
    name: 'Доломиты',
    link: imageDolomites
  },
];
