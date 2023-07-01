export class Card {
  constructor({name, link, likes, _id, owner}, templateSelector, handleCardClick, handleLike, handleDeleteButton, handleDeleteConfirmation) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._id = _id;
    this._ownerId = owner._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLike = handleLike;
    this._handleDeleteButton = handleDeleteButton;
    this._handleDeleteConfirmation = handleDeleteConfirmation;
  };

  getCardId () {
    return this._id;
  }

  getCardOwnerId () {
    return this._ownerId;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
    return cardElement;
  };

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__name').textContent = this._name;
    this._elementImage = this._element.querySelector('.element__image');
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._deleteButton = this._element.querySelector('.element__delete-button');
    this._likeButton = this._element.querySelector('.element__like-button');
    this._checkMyLike();
    this._likeButton.nextElementSibling.textContent = this._likes.length;
    this._setEventListeners();
    return this._element;
  };

  deleteCard() {
    this._element.remove();
    this._element = null;
  };

  setDeleteButton () {
    this._deleteButton.classList.add('element__delete-button_visible');
    this._deleteButton.addEventListener('click', () => this._handleDeleteConfirmation(this));
  }

  _setEventListeners () {
    this._handleLikeButton();
    this._handleCardClick(this._elementImage);
    this._handleDeleteButton(this);
  };

  _handleLikeButton () {
    this._likeButton.addEventListener('click', () => this._handleLike(this));
  };

  checkLikeButton () {
    if (this._likeButton.classList.contains('element__like-button_activated')) {
      return true;
    }
  }

  _toggleLikeButton () {
    this._likeButton.classList.toggle('element__like-button_activated');
  }

  setLikes (data) {
    this._toggleLikeButton();
    this._likeButton.nextElementSibling.textContent = data.likes.length;
  };

  _checkMyLike () {
    if (this._likes.some(item => item._id === '776182348fc2690689a97f1a')) {
      this._toggleLikeButton();
    };
  };
};
