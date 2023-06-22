export class Card {
  constructor({name, link}, templateSelector, handleCardClick ) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
    this._handleCardClick(this._elementImage);
    this._handleLikeButton();
  };

  _handleDeleteButton () {
    const deleteButton = this._element.querySelector('.element__delete-button');
    deleteButton.addEventListener('click', (event) => {
      event.target.closest('.element').remove();
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
