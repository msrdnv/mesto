import { Popup } from "./Popup.js";
import { handleDeleteCard } from "../utils/utils.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
  };

  open(card) {
    super.open();
    this._setConfirmationListener(card);
  };

  close() {
    super.close();
    this._removeConfirmationListener();
  };

  _setConfirmationListener(card) {
    this._handler = (evt) => {
      evt.preventDefault();
      handleDeleteCard(card);
    };
    this._popupForm.addEventListener('submit', this._handler);
  };

  _removeConfirmationListener() {
    this._popupForm.removeEventListener('submit', this._handler);
  };
};
