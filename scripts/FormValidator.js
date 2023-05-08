import { toggleButtonState } from "./index.js";

export class FormValidator {
  constructor(data, formElement) {
    this._formElement = formElement;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
  }

  enableValidation () {
    this._setEventListeners(this._formElement);
  };

  _setEventListeners (formElement) {
    const inputsList = Array.from(formElement.querySelectorAll(this._inputSelector));
    const submitButtonElement = formElement.querySelector(this._submitButtonSelector);
    toggleButtonState(inputsList, submitButtonElement, this._inactiveButtonClass);
    inputsList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(formElement, inputElement);
        toggleButtonState(inputsList, submitButtonElement, this._inactiveButtonClass);
      });
    });
  };

  _isValid (formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    }
    else if (inputElement.validity.valid) {
      this._hideInputError(formElement, inputElement);
    };
  };

  _showInputError (formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError (formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  };
}
