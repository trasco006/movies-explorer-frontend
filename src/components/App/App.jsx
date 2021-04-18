import './App.css';
import React, {useEffect, useState} from 'react';
import "./App.css"
import Header from "../Header/Header";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Error from "../Error/Error";
import Profile from "../Profile/Profile";
import {Route, Switch} from 'react-router-dom'
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import api from "../../utils/MainApi";
import {BurgerMenu} from "../BurgerMenu/BurgerMenu";
import ProtectedRoute from "../ProtectedRoute";
import moviesApi from "../../utils/MoviesApi";
import {CurrentUser} from "../../contexts/CurrentUserContext"

function App() {
  const [cardsList, setCardsList] = useState([])
  const [userData, setUserData] = useState({})
  const [loggedIn, setIsLogin] = useState(false);
  const [filterCheckboxValue, setFilterChechboxValue] = useState(false)
  const [isBurgerMenuOpen, setBurgerMenuOpened] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [likedMoviesList, setLikedMoviesList] = useState([])

  /**
   * Получение списка фильмов с сервера и запись в стейт
   */
  const handleGetMoviesData = (param) => {
    setLoading(true)
    setCardsList([])
    setLikedMoviesList([])
    handleGetUserMovies()
    let a = []
    moviesApi.getData()
      .then(res => {
        res.map(item => {
          likedMoviesList.filter(e => {
            if (e.nameRU === item.nameRU) {
              item._id = e._id
              item.isLiked = true
            }
          })
          param = param.toLowerCase()
          if (item.nameRU !== null && item.nameRU.toLowerCase().includes(param) || item.nameEN !== null && item.nameEN.toLowerCase().includes(param)) {
            handleDurationSort(item, 40, a)
          }
        })
        setCardsList(a)
      })
      .catch(() => alert("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"))
      .finally(
        () => {
          setLoading(false)
        }
      )
  }

  /**
   * Функция проверки подходит ли элемент под длительность
   * @param item проверяемый элемент
   * @param value параметр длительности с которым сравнивается аргумент
   * @param a массив в который записывается результат
   * @returns {*}
   */
  const handleDurationSort = (item, value, a) => {
    if (filterCheckboxValue === true) {
      if (item.duration <= value) {
        a.push(item)
      }
    } else {
      a.push(item)
    }
  }

  /**
   * Получение списка лайкнутых фильмов
   */
  const handleGetUserMovies = () => {
    api.getMovies()
      .then(res => {
        res.map(item => {
          return likedMoviesList.push(item)
        })
      })
  }

  /**
   * Ручное открытие бургерного меню
   */
  const handleOpenBurgerMenu = () => {
    setBurgerMenuOpened(true)
  }

  /**
   * Ручное закрытие бургерного меню
   */
  const handleCloseBurgerMenu = () => {
    setBurgerMenuOpened(false)
  }

  /**
   * Эффект при изменении жизненного цикла
   */
  useEffect(() => {
    handleTokenCheck()
    handleGetUserMovies()
  }, [])

  /**
   * Ручная проверка валидности токена
   */
  const handleTokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      api.checkToken(jwt).then((res) => {
        setIsLogin(true)
        setUserData({
          email: res.email,
          name: res.name,
          id: res._id
        })
      })
        .catch((err) => {
          alert(err.message);
        })
    }
  }

  /**
   * Запрос к серверу с параметрами входа, возвращает токен и проверяет его
   * @param obj - {email : "email", password: "password"}
   */
  const handleLogIn = (obj) => {
    api.signIn(obj)
      .then((res) => {
          setIsLogin(true)
          localStorage.setItem('jwt', res.token);
          handleTokenCheck();
        }
      )
      .catch(() => {
        setIsLogin(false)
      })
  }

  /**
   * Удаляет токен из localstorage, устанавливает isLogin на flase
   */
  const handleLogOut = () => {
    localStorage.removeItem('jwt')
    setIsLogin(false)
  }

  /**
   * Делает запрос к серверу с параметрами для регистрации
   * @param obj
   */
  const handleRegister = (obj) => {
    api.signUp(obj)
      .then(res => {
        alert('Вы успешно зарегистрированы!')
      })
  }

  /**
   * Ручной переключатель чекбокса
   * @param item
   */
  const handleSetFilterCheckboxValue = (item) => {
    setFilterChechboxValue(!filterCheckboxValue)
  }
  return (
    <CurrentUser.Provider value={userData}>
      <div className="app">
        <div className="page">
          {(isBurgerMenuOpen === true) ? <BurgerMenu closeBurgerMenu={handleCloseBurgerMenu}/> : null}
          <Switch>
            {(loggedIn !== true) ? (<Route path="/sign-in">
              <Login isLogin={loggedIn}
                     handleLogIn={handleLogIn}/>
            </Route>) : null}

            {(loggedIn !== true) ? (<Route path="/sign-up">
              <Register
                handleRegister={handleRegister}
                isLogin={loggedIn}/>
            </Route>) : null}

            <Route path="/movies">
              <ProtectedRoute component={Movies}
                              isLoading={isLoading}
                              cardsList={cardsList}
                              likedMoviesList={likedMoviesList}
                              handleGetMoviesData={handleGetMoviesData}
                              handleGetLikedMovies={handleGetUserMovies}
                              saveMovies={false}
                              isBurgerMenuOpen={isBurgerMenuOpen}
                              handleOpenBurgerMenu={handleOpenBurgerMenu}
                              handleCloseBurgerMenu={handleCloseBurgerMenu}
                              handleLoggin={handleLogIn} loggedIn={loggedIn}
                              handleCheckboxSet={handleSetFilterCheckboxValue}/>
            </Route>

            <Route path="/saved-movies">
              <ProtectedRoute component={Movies}
                              saveMovies={true}
                              handleGetLikedMovies={handleGetUserMovies}
                              likedMoviesList={likedMoviesList}
                              isBurgerMenuOpen={isBurgerMenuOpen}
                              handleOpenBurgerMenu={handleOpenBurgerMenu}
                              handleCloseBurgerMenu={handleCloseBurgerMenu}
                              handleLoggin={handleLogIn} loggedIn={loggedIn}
                              handleCheckboxSet={handleSetFilterCheckboxValue}/>
            </Route>

            <Route path="/profile">
              <ProtectedRoute component={Profile}
                              isBurgerMenuOpen={isBurgerMenuOpen}
                              handleOpenBurgerMenu={handleOpenBurgerMenu}
                              handleCloseBurgerMenu={handleCloseBurgerMenu}
                              handleLoggin={handleLogIn} loggedIn={loggedIn}
                              handleLogOut={handleLogOut}/>
            </Route>

            <Route path="/error">
              <Error/>
            </Route>

            <Route path="/">
              <Header isBurgerMenuOpen={isBurgerMenuOpen}
                      handleOpenBurgerMenu={handleOpenBurgerMenu}
                      handleCloseBurgerMenu={handleCloseBurgerMenu}
                      handleLoggin={handleLogIn} loggedIn={loggedIn}/>
              <Main/>
              <Footer/>
            </Route>
          </Switch>

        </div>
      </div>
    </CurrentUser.Provider>
  )
}

export default App;
