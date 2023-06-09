export class FormValidator {
  constructor(data, formElement) {
    this._formElement = formElement;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._inputsList = Array.from(formElement.querySelectorAll(this._inputSelector));
    this._submitButtonElement = formElement.querySelector(this._submitButtonSelector);
  }

  enableValidation () {
    this._setEventListeners(this._formElement);
  };

  _setEventListeners (formElement) {
    this._toggleButtonState();
    this._inputsList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(formElement, inputElement);
        this._toggleButtonState();
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

  _hasInvalidInput () {
    return this._inputsList.some((inputElement) => !inputElement.validity.valid);
  };

  _toggleButtonState () {
    if (this._hasInvalidInput()) {
      this._submitButtonElement.classList.add(this._inactiveButtonClass);
      this._submitButtonElement.setAttribute('disabled', '');
    }
    else {
      this._submitButtonElement.classList.remove(this._inactiveButtonClass);
      this._submitButtonElement.removeAttribute('disabled', '');
    };
  };

  resetValidation() {
    this._toggleButtonState();
    this._inputsList.forEach((inputElement) => {
      this._hideInputError(this._formElement, inputElement)
    });
  };
}
