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
    this._inputsList = Array.from(formElement.querySelectorAll(this._inputSelector));
    this._submitButtonElement = formElement.querySelector(this._submitButtonSelector);
    this.toggleButtonState(this._inactiveButtonClass);
    this._inputsList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(formElement, inputElement);
        this.toggleButtonState(this._inactiveButtonClass);
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
    return this._inputsList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  toggleButtonState (inactiveButtonClass) {
    if (this._hasInvalidInput()) {
      this._submitButtonElement.classList.add(inactiveButtonClass);
      this._submitButtonElement.setAttribute('disabled', '');
    }
    else {
      this._submitButtonElement.classList.remove(inactiveButtonClass);
      this._submitButtonElement.removeAttribute('disabled', '');
    };
  };
}
