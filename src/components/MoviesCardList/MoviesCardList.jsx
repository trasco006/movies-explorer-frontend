import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import {useState} from "react";

const MoviesCardList = (props) => {
  const [data, setData] = useState([])

  if (data.length === 0) {
    return (
      <div>
        <div className="movies-card-list">
          <MoviesCard saveMovies={props.saveMovies} movieInfo={props.movieInfo}/>
          <MoviesCard saveMovies={props.saveMovies} movieInfo={props.movieInfo}/>
          <MoviesCard saveMovies={props.saveMovies} movieInfo={props.movieInfo}/>
          <MoviesCard saveMovies={props.saveMovies} movieInfo={props.movieInfo}/>
          <MoviesCard saveMovies={props.saveMovies} movieInfo={props.movieInfo}/>
          <MoviesCard saveMovies={props.saveMovies} movieInfo={props.movieInfo}/>
          <MoviesCard saveMovies={props.saveMovies} movieInfo={props.movieInfo}/>
          <MoviesCard saveMovies={props.saveMovies} movieInfo={props.movieInfo}/>
          <MoviesCard saveMovies={props.saveMovies} movieInfo={props.movieInfo}/>
          <MoviesCard saveMovies={props.saveMovies} movieInfo={props.movieInfo}/>
          <MoviesCard saveMovies={props.saveMovies} movieInfo={props.movieInfo}/>
          <MoviesCard saveMovies={props.saveMovies} movieInfo={props.movieInfo}/>
        </div>
        <button className="movies-card-list__more-button">Ещё</button>
      </div>
    )
  } else {
    return null
  }

}

export default MoviesCardList