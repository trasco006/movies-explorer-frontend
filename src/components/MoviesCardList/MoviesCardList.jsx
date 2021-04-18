import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import React, {useState} from "react";
import {CurrentUser} from "../../contexts/CurrentUserContext";

const MoviesCardList = (props) => {
  const currentUser = React.useContext(CurrentUser);

  /**
   * Стейт переменная разрешения окна
   */
  const [width, setWidth] = useState(window.innerWidth)

  /**
   * Обработчик, устанавливающий текущее разрешение окна в стейт
   */
  window.addEventListener('resize', () => {
    setTimeout(() => {
      setWidth(window.innerWidth)
    }, 1000);
  })

  /**
   * Устанавливает количество отображаемых карточек при монтаже компонента
   */
  const [num, setNum] = useState(() => {
    if (width > 1124) {
      return 12
    } else if (width < 1124 && width > 634) {
      return 8
    } else {
      return 5
    }
  })

  /**
   * Устанавливает количество добавляемых по нажатию карточек и добавляет их
   */
  const handleAddMore = () => {
    if (width > 1124) {
      return setNum(num + 3)
    } else if (width < 1124 && width > 634) {
      return setNum(num + 2)
    } else {
      return setNum(num + 1)
    }
  }

  /**
   * Массив с нужных количеством карточек
   */
  let cardsDisplay = props.cardsList.slice(0, num)
  return (
    <div>
      <div className="movies-card-list">
        {cardsDisplay.map((item, i) => {
          console.log(item)
          return <MoviesCard key={i}
                             saveMovies={props.saveMovies}
                             movieInfo={item}
          />
        })
        }
      </div>
      {props.cardsList.length <= num ? null :
        <button onClick={handleAddMore} className="movies-card-list__more-button">Ещё</button>}

    </div>
  )

}

export default MoviesCardList