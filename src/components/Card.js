export class Card {
  constructor({name, link, likes, _id, owner}, templateSelector, handleCardClick, handleServerLike, handleDeleteButton) {
    this._name = name;
    this._link = link;
    this._likes = likes.length;
    this._id = _id;
    this._ownerId = owner._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleServerLike = handleServerLike;
    this._handleDeleteButton = handleDeleteButton;
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
    this._handleLikeButton();
    this._handleCardClick(this._elementImage);
    this._handleDeleteButton(this._element, this._ownerId, this._id);
  };

  _handleLikeButton () {
    this._likeButton = this._element.querySelector('.element__like-button');
    this._likeButton.addEventListener('click', () => {
      this.toggleLikeButton();
      this._handleServerLike(this._likeButton, this._id);
    });
  };

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__name').textContent = this._name;
    this._elementImage = this._element.querySelector('.element__image');
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._element.querySelector('.element__like-counter').textContent = this._likes;
    this._setEventListeners();
    return this._element;
  };

  toggleLikeButton () {
    this._likeButton.classList.toggle('element__like-button_activated');
  };
};
