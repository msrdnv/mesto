import { imagePopup, fullImage, imageCaption, openPopup} from './index.js';

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  };

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
    return cardElement;
  };

  _handleLikeButton (item) {
    const likeButton = item.querySelector('.element__like-button');
    likeButton.addEventListener('click', (event) => {
      event.target.classList.toggle('element__like-button_activated');
    });
  };

  _handleDeleteButton (item) {
    const deleteButton = item.querySelector('.element__delete-button');
    deleteButton.addEventListener('click', (event) => {
      event.target.closest('.element').remove();
    });
  };

  _handleFullImage (item) {
    item.addEventListener('click', () => {
      openPopup(imagePopup);
      fullImage.src = item.src;
      fullImage.alt = item.alt;
      imageCaption.textContent = item.nextElementSibling.textContent;
    });
  };

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__name').textContent = this._name;
    const cardImage = this._element.querySelector('.element__image');
    cardImage.src = this._link;
    cardImage.alt = this._name;
    this._handleLikeButton(this._element);
    this._handleDeleteButton(this._element);
    this._handleFullImage(cardImage);
    return this._element;
  };
}
