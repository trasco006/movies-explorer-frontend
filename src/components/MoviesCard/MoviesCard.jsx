import './MoviesCard.css'
import {useState} from "react";

const MoviesCard = (props) => {
  const [isCardLiked, setCardLiked] = useState(false)
  const handleCardLike = () => {
    setCardLiked(!isCardLiked)
  }
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
          <div onClick={handleCardLike} className={`movies-card__like-button ${isCardLiked===true? 'movies-card__like-button_on' : "movies-card__like-button_off"}`}/>
        </div>
        <p className="movies-card__duration">{props.movieInfo.duration}</p>
      </div>
    </div>
  )
}
export default MoviesCard