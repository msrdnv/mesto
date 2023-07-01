export class UserInfo {
  constructor ({ nameSelector, aboutSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
    this._avatar = document.querySelector(avatarSelector);
  };

  getUserInfo() {
    this._formValues = {};
    this._formValues.name = this._name.textContent;
    this._formValues.about = this._about.textContent;
    return this._formValues;
  };

  setUserInfo({name, about, avatar, _id}) {
    this._name.textContent = name;
    this._about.textContent = about;
    this._avatar.src = avatar;
    this.id = _id;
  };
}
