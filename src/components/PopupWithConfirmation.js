import { Popup } from "./Popup.js";
import { handleDeleteCard } from "../utils/utils.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
  };

  open(cardId, element) {
    super.open();
    this.setConfirmationListener(cardId, element);
  };

  close() {
    super.close();
    this.removeConfirmationListener();
  };

  setConfirmationListener(cardId, element) {
    this._handler = (evt) => {
      evt.preventDefault();
      handleDeleteCard(cardId, element);
    };
    this._popupForm.addEventListener('submit', this._handler);
  };

  removeConfirmationListener() {
    this._popupForm.removeEventListener('submit', this._handler);
  };
};
