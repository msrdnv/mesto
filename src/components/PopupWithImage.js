import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._fullImage = this._popup.querySelector('.popup__full-image');
    this._imageCaption = this._popup.querySelector('.popup__image-caption');
  }

  open(elementImage) {
    super.open();
    this._fullImage.src = elementImage.src;
    this._fullImage.alt = elementImage.alt;
    this._imageCaption.textContent = elementImage.nextElementSibling.textContent;
  }
};
