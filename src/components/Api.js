export class Api {
  constructor() {
  }

  getUserData () {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-69/users/me', {
      method: 'GET',
      headers: {
      authorization: '8b924108-8ca1-4711-b126-8a96bbad8ecc',
      'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    });
  };

  editUserData (data) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-69/users/me', {
      method: 'PATCH',
      headers: {
        authorization: '8b924108-8ca1-4711-b126-8a96bbad8ecc',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    });
  };

  getInitialCards () {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-69/cards' , {
      method: 'GET',
      headers:  {
        authorization: '8b924108-8ca1-4711-b126-8a96bbad8ecc',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    });
  };

  postNewCard (data) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-69/cards' , {
      method: 'POST',
      headers:  {
        authorization: '8b924108-8ca1-4711-b126-8a96bbad8ecc',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    });
  };

  putLikeCard (cardId) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-69/cards/${cardId}/likes` , {
      method: 'PUT',
      headers:  {
        authorization: '8b924108-8ca1-4711-b126-8a96bbad8ecc',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    });
  }

  deleteLikeCard (cardId) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-69/cards/${cardId}/likes` , {
      method: 'DELETE',
      headers:  {
        authorization: '8b924108-8ca1-4711-b126-8a96bbad8ecc',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    });
  }

  deleteCard (cardId) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-69/cards/${cardId}` , {
      method: 'DELETE',
      headers:  {
        authorization: '8b924108-8ca1-4711-b126-8a96bbad8ecc',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    });
  }

  editUserAvatar (data) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-69/users/me/avatar` , {
      method: 'PATCH',
      headers:  {
        authorization: '8b924108-8ca1-4711-b126-8a96bbad8ecc',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    });
  }
};

