import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = (props) => {
  return (
    <div>
      <div className="movies-card-list">
        <MoviesCard saveMovies={props.saveMovies} movieInfo={props.movieInfo}/>
        <MoviesCard saveMovies={props.saveMovies}  movieInfo={props.movieInfo}/>
        <MoviesCard saveMovies={props.saveMovies}  movieInfo={props.movieInfo}/>
        <MoviesCard saveMovies={props.saveMovies}  movieInfo={props.movieInfo}/>
        <MoviesCard saveMovies={props.saveMovies}  movieInfo={props.movieInfo}/>
        <MoviesCard saveMovies={props.saveMovies}  movieInfo={props.movieInfo}/>
        <MoviesCard saveMovies={props.saveMovies}  movieInfo={props.movieInfo}/>
        <MoviesCard saveMovies={props.saveMovies}  movieInfo={props.movieInfo}/>
        <MoviesCard saveMovies={props.saveMovies}  movieInfo={props.movieInfo}/>
        <MoviesCard saveMovies={props.saveMovies}  movieInfo={props.movieInfo}/>
        <MoviesCard saveMovies={props.saveMovies}  movieInfo={props.movieInfo}/>
        <MoviesCard saveMovies={props.saveMovies}  movieInfo={props.movieInfo}/>
      </div>
      <button className="movies-card-list__more-button">Ещё</button>
    </div>
  )
}

export default MoviesCardList