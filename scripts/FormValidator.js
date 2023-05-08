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
    /*const formList = Array.from(document.querySelectorAll(this._formSelector)); */
    /*formList.forEach(function (formElement) {
      this._setEventListeners(formElement);
    });*/
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

/* function showInputError (formElement, inputElement, errorMessage, objClassList) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(objClassList.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(objClassList.errorClass);
}; */

/* function hideInputError (formElement, inputElement, objClassList) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(objClassList.inputErrorClass);
  errorElement.classList.remove(objClassList.errorClass);
  errorElement.textContent = "";
}; */

/*function isValid (formElement, inputElement, objClassList) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, objClassList);
  }
  else if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, objClassList);
  };
}; */

/* function hasInvalidInput (inputList) {
  return inputList.some(function (inputElement) {
    return !inputElement.validity.valid;
  });
}; */

/* export function toggleButtonState (inputList, submitButtonElement, objClassList) {
  if (hasInvalidInput(inputList)) {
    submitButtonElement.classList.add(objClassList.inactiveButtonClass);
    submitButtonElement.setAttribute('disabled', '');
  }
  else {
    submitButtonElement.classList.remove(objClassList.inactiveButtonClass);
    submitButtonElement.removeAttribute('disabled', '');
  };
}; */

/* function setEventListeners (formElement, objClassList) {
  const inputList = Array.from(formElement.querySelectorAll(objClassList.inputSelector));
  const submitButtonElement = formElement.querySelector(objClassList.submitButtonSelector);
  toggleButtonState(inputList, submitButtonElement, objClassList);
  inputList.forEach(function (inputElement) {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement, objClassList);
      toggleButtonState(inputList, submitButtonElement, objClassList);
    });
  });
}; */

/* function enableValidation (objClassList) {
  const formList = Array.from(document.querySelectorAll(objClassList.formSelector));
  formList.forEach(function (formElement) {
    setEventListeners(formElement, objClassList);
  });
}; */

/* enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}); */
