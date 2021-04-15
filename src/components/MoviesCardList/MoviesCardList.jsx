import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import React, {useState} from "react";

const MoviesCardList = (props) => {
  const [width, setWidth] = useState(window.innerWidth)
  window.addEventListener('resize', () => {
    setTimeout(() => {
      setWidth(window.innerWidth)
    }, 1000);
  })


  const [num, setNum] = useState(() => {
    if (width > 1124) {
      return 12
    } else if (width < 1124 && width > 634) {
      return 8
    } else {
      return 5
    }
  })
  const handleAddMore = () => {
    if (width > 1124) {
      return setNum(num + 3)
    } else if (width < 1124 && width > 634) {
      return setNum(num + 2)
    } else {
      return setNum(num + 1)
    }
  }
  let cardsDisplay = props.cardsList.slice(0, num)
  return (
    <div>
      <div className="movies-card-list">
        {cardsDisplay.map((item, i) => {
          return <MoviesCard key={i} saveMovies={props.saveMovies} movieInfo={item}/>
        })
        }
      </div>
      {props.cardsList.length <= num ? null :
        <button onClick={handleAddMore} className="movies-card-list__more-button">Ещё</button>}

    </div>
  )

}

export default MoviesCardList