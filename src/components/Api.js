export class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  };

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse)
  };

  getUserData() {
    return this._request(`${this._baseUrl}/users/me`, { method: 'GET', headers: this._headers });
  };

  editUserData (data) {
    return this._request(`${this._baseUrl}/users/me`, { method: 'PATCH', headers: this._headers, body: JSON.stringify(data) });
  };

  getCards () {
    return this._request(`${this._baseUrl}/cards`, { method: 'GET', headers: this._headers });
  };

  postNewCard (data) {
    return this._request(`${this._baseUrl}/cards`, { method: 'POST', headers: this._headers, body: JSON.stringify(data) });
  };

  putLikeCard (cardId) {
    return this._request(`${this._baseUrl}/cards/${cardId}/likes`, { method: 'PUT', headers: this._headers });
  };

  deleteLikeCard (cardId) {
    return this._request(`${this._baseUrl}/cards/${cardId}/likes`, { method: 'DELETE', headers: this._headers });
  };

  deleteCard (cardId) {
    return this._request(`${this._baseUrl}/cards/${cardId}`, { method: 'DELETE', headers: this._headers });
  };

  editUserAvatar (data) {
    return this._request(`${this._baseUrl}/users/me/avatar`, { method: 'PATCH', headers: this._headers, body: JSON.stringify(data) });
  };
};

