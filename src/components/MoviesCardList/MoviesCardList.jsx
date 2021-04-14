import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import {useState} from "react";

const MoviesCardList = (props) => {

  if (props.cardsList.length !== 0) {
    return (
      <div>
        <div className="movies-card-list">
          {props.cardsList.map((  item, index) =>{
            return <MoviesCard key={index} saveMovies={props.saveMovies} movieInfo={item}/>
          })}
        </div>
        <button className="movies-card-list__more-button">Ещё</button>
      </div>
    )
  } else {
    return null
  }

}

export default MoviesCardList