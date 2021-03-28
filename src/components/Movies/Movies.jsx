import "./Movies.css"
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Preloader from "../Preloader/Preloader";
const Movies = (props) => {
  // ________________________CARD-DEVELOP-INFO
  const movieInfo = {
    link: 'https://kinogo.la/uploads/cache/a/0/a/d/7/f/1/3/3/1616446644_134621-135x300.jpg',
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