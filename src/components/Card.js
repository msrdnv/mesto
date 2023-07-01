export class Card {
  constructor({name, link, likes, _id, owner}, templateSelector, handleCardClick, handleLike, handleDelete) {
    this._name = name;
    this._link = link;
    this.likes = likes;
    this._id = _id;
    this._ownerId = owner._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLike = handleLike;
    this._handleDelete = handleDelete;
  };

  getCardId () {
    return this._id;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
    return cardElement;
  };

  generateCard(userId) {
    this._element = this._getTemplate();
    this._element.querySelector('.element__name').textContent = this._name;
    this._elementImage = this._element.querySelector('.element__image');
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._deleteButton = this._element.querySelector('.element__delete-button');
    this._likeButton = this._element.querySelector('.element__like-button');
    this._userId = userId;
    this._checkMyLike();
    this.setLikeCounter(this);
    this._setEventListeners();
    return this._element;
  };

  _setEventListeners () {
    this._handleLikeButton();
    this._handleCardClick(this._elementImage);
    this._handleDeleteButton(this);
  };

  deleteCard() {
    this._element.remove();
    this._element = null;
  };

  _handleDeleteButton () {
    if (this._ownerId === this._userId) {
      this._deleteButton.classList.add('element__delete-button_visible');
      this._deleteButton.addEventListener('click', () => this._handleDelete(this));
    };
  };

  _handleLikeButton () {
    this._likeButton.addEventListener('click', () => this._handleLike(this));
  };

  checkLikeButton () {
    if (this._likeButton.classList.contains('element__like-button_activated')) {
      return true;
    }
  }

  toggleLikeButton () {
    this._likeButton.classList.toggle('element__like-button_activated');
  }

  setLikeCounter (data) {
    this._likeButton.nextElementSibling.textContent = data.likes.length;
  }

  _checkMyLike () {
    if (this.likes.some(user => user._id === this._userId)) {
      this.toggleLikeButton();
    };
  };
};
