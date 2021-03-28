import './MoviesCard.css'

const MoviesCard = (props) => {
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
          <div className="movies-card__like-button movies-card__like-button_off"/>
        </div>
        <p className="movies-card__duration">{props.movieInfo.duration}</p>
      </div>
    </div>
  )
}
export default MoviesCard