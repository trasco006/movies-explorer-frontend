import "./Movies.css"
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Preloader from "../Preloader/Preloader";
import "../../images/card.jpg"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Movies = (props) => {
  // ________________________CARD-DEVELOP-INFO
  const movieInfo = {
    link: '/card.jpg',
    title: 'Сила Грома',
    duration: '134'
  }

  return (
    <div>
      <Header isBurgerMenuOpen={props.isBurgerMenuOpen}
              handleOpenBurgerMenu={props.handleOpenBurgerMenu}
              handleCloseBurgerMenu={props.handleCloseBurgerMenu}
              handleLoggin={props.handleLogIn}
              loggedIn={props.loggedIn}/>
      <SearchForm handleCheckboxSet={props.handleCheckboxSet}/>
      <MoviesCardList saveMovies={props.saveMovies} movieInfo={movieInfo}/>
      <Preloader/>
      <Footer/>
    </div>
  )
}
export default Movies