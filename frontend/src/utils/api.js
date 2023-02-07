import { baseUrl } from './constants';

class Api {
  constructor({ url, headers}) {
    this._url = url;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    })
      .then((res) => {
        return this._checkResponse(res);
      })
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    })
      .then((res) => {
        return this._checkResponse(res);
      })
  }

  saveUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: `${data.name}`,
        about: `${data.about}`
      })
    })
      .then((res) => {
        return this._checkResponse(res);
      })
  }

  saveAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: `${data.avatar}`
      })
    })
      .then((res) => {
        return this._checkResponse(res);
      })
  }

  addNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: `${data.title}`,
        link: `${data.link}`
      })
    })
      .then((res) => {
        return this._checkResponse(res);
      })
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
      .then((res) => {
        return this._checkResponse(res);
      })
  }

  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: (isLiked) ? 'PUT' : 'DELETE',
      headers: this.headers
    })
      .then((res) => {
        return this._checkResponse(res);
      })
  }
}

const api = new Api({
  url: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  }
});

export default api;
