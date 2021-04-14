import React from "react";

class Api extends React.Component {
  constructor(config) {
    super()
    this._baseUrl = config.url;
    this._headers = config.headers;
  }

// Обработка ошибок в запросах
  _controlError(promise) {
    return promise.then((res) => {
      if (!res.ok) {
        alert(res.statusText)
        return Promise.reject(`Ошибка: ${res.status}`);
      } else {
        return res.json()
      }
    })
  }


// Регистрация нового пользователя
  signUp(data) {
    const promise = fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password
      })
    })
    return this._controlError(promise)
  }

// Вход
  signIn(data) {
    const promise = fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(
        {
          email: data.email,
          password: data.password
        }
      )
    })
    return this._controlError(promise)
  }

  /**
   * Добавление фильма к себе в избранное
   * @param token
   * @returns {*}
   */
  addMovie(data) {
    const promise = fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(
        {
          country: data.country,
          director: data.director,
          duration: data.duration,
          year: data.year,
          description: data.description,
          image: data.image,
          trailer: data.trailer,
          nameRU: data.nameRU,
          nameEN: data.nameEN,
          thumbnail: data.thumbnail,
          owner: data.user,
          movieId: data.movieId,
        }
      )
    })
    return this._controlError(promise)
  }

// Проверка валидности токена
  checkToken(token) {
    const promise = fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    return this._controlError(promise)

  }
}


const api = new Api({
  url: "https://trasco006.ml",
  headers: {
    'Accept': 'application/json',
    "Content-Type": "application/json",
    'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
  }
})

export default api