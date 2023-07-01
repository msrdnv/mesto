import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._submitButton = this._popup.querySelector('.popup__submit-button');
    this._submitButtonText = this._submitButton.textContent;
    this._inputList = this._popupForm.querySelectorAll('.popup__input');
  };

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  };

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => this._handleSubmitForm(evt, this._getInputValues()));
  };

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  };

  renderLoading(isLoading, loadingText = 'Сохранение...') {
    if (isLoading === true) {
      this._submitButton.textContent = loadingText;
    } else if (isLoading === false) {
      this._submitButton.textContent = this._submitButtonText;
    };
  }
};
