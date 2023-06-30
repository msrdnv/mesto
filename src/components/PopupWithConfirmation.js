import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleConfirmation) {
    super(popupSelector);
    this._handleConfirmation = handleConfirmation;
    this._popupForm = this._popup.querySelector('.popup__form');
  };

  setConfirmationListener(cardId, element) {
    this._popupForm.addEventListener('submit', (evt) => {
      this._handleConfirmation(evt, cardId, element);
    }, {once: true});
  };
};
