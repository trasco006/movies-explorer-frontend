import './MoviesCard.css'
import {useState} from "react";

const MoviesCard = (props) => {
  const [isCardLiked, setCardLiked] = useState(false)
  const handleCardLike = () => {
    setCardLiked(!isCardLiked)
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
            <img src={`https://api.nomoreparties.co${props.movieInfo.image.url}`}
                 alt={props.movieInfo.nameRU}
                 className="movies-card__image"/> : null}
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