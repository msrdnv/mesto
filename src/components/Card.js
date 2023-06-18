import { imagePopup, fullImage, imageCaption} from '../utils/constants.js';
import { openPopup } from '../utils/utils.js';

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

  _setEventListeners () {
    this._handleDeleteButton();
    this._handleFullImage();
    this._handleLikeButton();
  };

  _handleDeleteButton () {
    const deleteButton = this._element.querySelector('.element__delete-button');
    deleteButton.addEventListener('click', (event) => {
      event.target.closest('.element').remove();
    });
  };

  _handleFullImage () {
    this._elementImage.addEventListener('click', () => {
      openPopup(imagePopup);
      fullImage.src = this._elementImage.src;
      fullImage.alt = this._elementImage.alt;
      imageCaption.textContent = this._elementImage.nextElementSibling.textContent;
    });
  };

  _handleLikeButton () {
    const likeButton = this._element.querySelector('.element__like-button');
    likeButton.addEventListener('click', (event) => {
      event.target.classList.toggle('element__like-button_activated');
    });
  };

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__name').textContent = this._name;
    this._elementImage = this._element.querySelector('.element__image');
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._setEventListeners();
    return this._element;
  };
}
