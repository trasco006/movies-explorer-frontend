import './MoviesCard.css'
import React, {useState} from "react";
import {CurrentUser} from "../../contexts/CurrentUserContext";
import api from "../../utils/MainApi";

const MoviesCard = (props) => {
  const [isCardLiked, setCardLiked] = useState(props.movieInfo.isLiked === true)
  const currentUser = React.useContext(CurrentUser);


  /**
   * Собирает данные с карточки для отправки на сервер
   * @type {{duration, trailer: *, country: *, image, nameRU: *, thumbnail, year: *, director: *, description, movieId, nameEN: *}}
   */
  let data = {}
  if (props.saveMovies === true) {
    data = {
      country: props.movieInfo.country,
      director: props.movieInfo.director,
      duration: props.movieInfo.duration,
      year: props.movieInfo.year,
      description: props.movieInfo.description,
      image: props.movieInfo.image,
      trailer: props.movieInfo.trailerLink,
      nameRU: props.movieInfo.nameRU,
      nameEN: props.movieInfo.nameEN,
      thumbnail: props.movieInfo.thumbnail,
      movieId: props.movieInfo.id
    }
  } else {
    data = {
      country: props.movieInfo.country,
      director: props.movieInfo.director,
      duration: props.movieInfo.duration,
      year: props.movieInfo.year,
      description: props.movieInfo.description,
      image: `${props.movieInfo.image ? props.movieInfo.image.url : null}`,
      trailer: props.movieInfo.trailerLink,
      nameRU: props.movieInfo.nameRU,
      nameEN: props.movieInfo.nameEN,
      thumbnail: `${props.movieInfo.image ? props.movieInfo.image.formats.thumbnail.url : null}`,
      movieId: props.movieInfo.id
    }
  }

  const handleCardLike = () => {
    if (props.saveMovies === true) {
      api.removeMovie(props.movieInfo._id).then(res => console.log(res))
      setCardLiked(false)
    } else {

      if (isCardLiked === false) {
        api.addMovie(data).then(res => {
          setCardLiked(true)
        })

      } else {
        api.removeMovie(props.movieInfo._id).then(res => console.log(res))
        setCardLiked(false)
      }
    }
  }

  const durationFormat = (data) => {
    let a = props.movieInfo.duration;
    let hours = Math.floor(a / 60)
    let minutes = a % 60
    if (hours === 0) {
      return minutes + 'м'
    } else {
      return hours + ' ч ' + minutes + 'м'
    }
  }
  if (props.saveMovies === false) {
    return (
      <div className="movies-card">
        <div className="movies-card__image-container">
          {props.movieInfo.image ?
            <a href={props.movieInfo.trailerLink} target='_blank'>
              <img src={`https://api.nomoreparties.co${props.movieInfo.image.url}`}
                   alt={props.movieInfo.nameRU}
                   className="movies-card__image"/></a> : null}
        </div>
        <div className="movies-card__about">
          <div className="movies-card__container">
            <p className="movies-card__title">{props.movieInfo.nameRU}</p>
            <div onClick={handleCardLike}
                 className={`movies-card__like-button ${isCardLiked === true ? 'movies-card__like-button_on' : "movies-card__like-button_off"}`}/>
          </div>
          <p className="movies-card__duration">{durationFormat()}</p>
        </div>
      </div>
    )
  } else {
    console.log(props)
    return (
      <div className="movies-card">
        <div className="movies-card__image-container">
          <img src={props.movieInfo.link}
               alt={props.movieInfo.title}
               className="movies-card__image"/>
        </div>
        <div className="movies-card__about">
          <div className="movies-card__container">
            <p className="movies-card__title">{props.movieInfo.title}</p>
            <button className='movie-card__close-button movie-card__close-button_hidden'/>
          </div>
          <p className="movies-card__duration">{props.movieInfo.duration}</p>
        </div>
      </div>
    )
  }
}
export default MoviesCard