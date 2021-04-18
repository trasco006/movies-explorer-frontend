import "./Movies.css"
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Preloader from "../Preloader/Preloader";
import "../../images/card.jpg"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Movies = (props) => {

  if (props.saveMovies === false) {
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
                          likedMoviesList={props.likedMoviesList}
                          handleGetLikedMovies={props.handleGetLikedMovies}
                          isBurgerMenuOpen={props.isBurgerMenuOpen}
                          cardsList={props.cardsList}/>}
        <Footer/>
      </div>
    )
  } else {
    return (
      <div>
        <Header isBurgerMenuOpen={props.isBurgerMenuOpen}
                handleOpenBurgerMenu={props.handleOpenBurgerMenu}
                handleCloseBurgerMenu={props.handleCloseBurgerMenu}
                handleLoggin={props.handleLogIn}
                loggedIn={props.loggedIn}/>
        <SearchForm handleCheckboxSet={props.handleCheckboxSet}/>
        <Preloader isLoading={props.isLoading}/>
        {(props.likedMoviesList.length === 0) ?
          <p className='loading__results'>Ничего не найдено</p> :
          <MoviesCardList saveMovies={props.saveMovies}
                          likedMoviesList={props.likedMoviesList}
                          isBurgerMenuOpen={props.isBurgerMenuOpen}
                          cardsList={props.likedMoviesList}/>}
        <Footer/>
      </div>
    )
  }
}
export default Movies