function showInputError (formElement, inputElement, errorMessage, objClassList) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(objClassList.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(objClassList.errorClass);
};

function hideInputError (formElement, inputElement, objClassList) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(objClassList.inputErrorClass);
  errorElement.classList.remove(objClassList.errorClass);
  errorElement.textContent = "";
};

function isValid (formElement, inputElement, objClassList) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, objClassList);
  }
  else if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, objClassList);
  };
};

function hasInvalidInput (inputList) {
  return inputList.some(function (inputElement) {
    return !inputElement.validity.valid;
  });
};

export function toggleButtonState (inputList, submitButtonElement, objClassList) {
  if (hasInvalidInput(inputList)) {
    submitButtonElement.classList.add(objClassList.inactiveButtonClass);
    submitButtonElement.setAttribute('disabled', '');
  }
  else {
    submitButtonElement.classList.remove(objClassList.inactiveButtonClass);
    submitButtonElement.removeAttribute('disabled', '');
  };
};

function setEventListeners (formElement, objClassList) {
  const inputList = Array.from(formElement.querySelectorAll(objClassList.inputSelector));
  const submitButtonElement = formElement.querySelector(objClassList.submitButtonSelector);
  toggleButtonState(inputList, submitButtonElement, objClassList);
  inputList.forEach(function (inputElement) {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement, objClassList);
      toggleButtonState(inputList, submitButtonElement, objClassList);
    });
  });
};

function enableValidation (objClassList) {
  const formList = Array.from(document.querySelectorAll(objClassList.formSelector));
  formList.forEach(function (formElement) {
    setEventListeners(formElement, objClassList);
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
