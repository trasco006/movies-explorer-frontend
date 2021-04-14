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
        return Promise.reject(`Ошибка: ${res.status}`);
      } else {
        return res.json()
      }
    })
  }


  /**
   * Получение данных с сервера
   * @param searchRequest - объект данных по которым ищет в базе данные
   * @returns {*}
   */
  getData() {
    const promise = fetch(`${this._baseUrl}/`, {
      method: "GET",
      headers: this._headers,
    })
    return this._controlError(promise)
  }
}


const moviesApi = new Api({
  url: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    'Accept': 'application/json',
    "Content-Type": "application/json",
  }
})

export default moviesApi