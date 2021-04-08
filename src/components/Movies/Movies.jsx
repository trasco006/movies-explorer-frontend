import "./Movies.css"
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Preloader from "../Preloader/Preloader";
import "../../images/card.jpg"
const Movies = (props) => {
  // ________________________CARD-DEVELOP-INFO
  const movieInfo = {
    link: '/card.jpg',
    title: 'Сила Грома',
    duration: '134'
  }

  return (
    <div>
      <SearchForm handleCheckboxSet={props.handleCheckboxSet}/>
      <MoviesCardList movieInfo={movieInfo}/>
      <Preloader/>
    </div>
  )
}
export default Movies