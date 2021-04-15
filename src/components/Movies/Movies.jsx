import "./Movies.css"
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Preloader from "../Preloader/Preloader";
import "../../images/card.jpg"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Movies = (props) => {
  return (
    <div>
      <Header isBurgerMenuOpen={props.isBurgerMenuOpen}
              handleOpenBurgerMenu={props.handleOpenBurgerMenu}
              handleCloseBurgerMenu={props.handleCloseBurgerMenu}
              handleLoggin={props.handleLogIn}
              loggedIn={props.loggedIn}/>
      <SearchForm handleSubmit={props.handleGetMoviesData}
                  handleCheckboxSet={props.handleCheckboxSet}/>
      <Preloader isLoading={props.isLoading}/>
      {(props.cardsList.length === 0 && props.isLoading === false) ?
        <p className='loading__results'>Ничего не найдено</p> :
        <MoviesCardList saveMovies={props.saveMovies}
                        cardsList={props.cardsList}/>}
      <Footer/>
    </div>
  )
}
export default Movies