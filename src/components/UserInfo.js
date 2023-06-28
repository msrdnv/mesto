export class UserInfo {
  constructor ({ usernameSelector, aboutSelector }) {
    this._username = document.querySelector(usernameSelector);
    this._about = document.querySelector(aboutSelector);
  };

  getUserInfo() {
    this._formValues = {};
    this._formValues.username = this._username.textContent;
    this._formValues.about = this._about.textContent;
    return this._formValues;
  };

  setUserInfo(username, about) {
    this._username.textContent = username;
    this._about.textContent = about;
  };
}
