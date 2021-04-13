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
import ProtectedRoute from "../ProtectedRoute";
import api from "../../utils/MainApi";

function App() {
  const [isLoginPageIsOpen, setOpenLoginPage] = useState(() => {
    return window.location.pathname === '/sign-in';
  })
  const [isRegistrationPageIsOpen, setOpenRegistrationPage] = useState(() => {
    return window.location.pathname === '/sign-up';
  })

  const [loggedIn, setIsLogin] = useState(false);
  const [filterCheckboxValue, setFilterChechboxValue] = useState(false)

  /**
   * Эффект при изменении жизненного цикла
   */
  useEffect(() => {
    handleTokenCheck()
  })

  /**
   * Ручное закрытие всех окон
   */
  const handleCloseAllPages = () => {
    setOpenLoginPage(false)
    setOpenRegistrationPage(false)
  }

  /**
   * Ручное открытие окна логина
   */
  const handleOpenLoginPage = () => {
    handleCloseAllPages()
    setOpenLoginPage(true)
  }

  /**
   * Ручное открытие окна регистрации
   */
  const handleOpenRegistrationPage = () => {
    handleCloseAllPages()
    setOpenRegistrationPage(true)
  }

  /**
   * Ручная проверка валидности токена
   */
  const handleTokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      api.checkToken(jwt).then((res) => {
        setIsLogin(true)
      })
        .catch((err) => {
          console.log(err);
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
    <div className="app">
      <div className="page">
        <Switch>
          {(loggedIn !== true) ? (<Route path="/sign-in">
            <Login isLogin={loggedIn}
                   handleOpenRegistrationPage={handleOpenRegistrationPage}
                   handleLogIn={handleLogIn}/>
          </Route>) : null}

          {(loggedIn !== true) ? (<Route path="/sign-up">
            <Register
              handleRegister={handleRegister}
              handleOpenLoginPage={handleOpenLoginPage}
              isLogin={loggedIn}/>
          </Route>) : null}

          <Route path="/movies">
            <ProtectedRoute component={Movies}
                            handleCheckboxSet={handleSetFilterCheckboxValue}
                            isLogin={loggedIn}/>
          </Route>

          <Route path="/saved-movies">
            <ProtectedRoute component={Movies}
                            handleCheckboxSet={handleSetFilterCheckboxValue}
                            isLogin={loggedIn}/>
          </Route>

          <Route path="/profile">
            <Header handleLoggin={handleLogIn}
                    loggedIn={loggedIn}/>
            <ProtectedRoute component={Profile}
                            isLogin={loggedIn}/>
          </Route>

          <Route path="/error">
            <Error/>
          </Route>

          <Route path="/">
            <Header handleLoggin={handleLogIn} loggedIn={loggedIn}/>
            <Main/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
