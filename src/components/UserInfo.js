import { nameInput, aboutInput } from "../utils/constants.js";

export class UserInfo {
  constructor ({ nameSelector, aboutSelector }) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
  };

  getUserInfo() {
    this._formValues = {};
    this._formValues.name = this._name.textContent;
    this._formValues.about = this._about.textContent;
    return this._formValues;
  };

  setUserInfo() {
    this._formValues = {name: nameInput.value, about: aboutInput.value};
    this._name.textContent = this._formValues.name;
    this._about.textContent = this._formValues.about;
  };
}
