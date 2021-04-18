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
          image: "https://api.nomoreparties.co" + data.image,
          trailer: data.trailer,
          nameRU: data.nameRU,
          nameEN: data.nameEN,
          thumbnail: "https://api.nomoreparties.co" + data.thumbnail,
          movieId: data.movieId,
        }
      )
    })
    return this._controlError(promise)
  }

  /**
   * Получение сохранённых фильмов
   * @param token
   * @returns {*}
   */
  getMovies() {
    const promise = fetch(`${this._baseUrl}/movies`, {
        method: "GET",
        headers: this._headers,
      }
    )
    return this._controlError(promise)
  }

  /**
   * Дизлайк
   * @param token
   * @returns {*}
   */
  removeMovie(movieId){
    const promise = fetch(`${this._baseUrl}/movies/${movieId}`, {
        method: "DELETE",
        headers: this._headers,
      }
    )
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