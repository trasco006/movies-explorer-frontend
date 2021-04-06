import './App.css';
import React, {useState} from 'react';
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
import {BurgerMenu} from "../BurgerMenu/BurgerMenu";


function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [filterCheckboxValue, setFilterCheckboxValue] = useState(false)

  const [isBurgerMenuOpen, setBurgerMenuOpened] = useState(false)
  const handleOpenBurgerMenu = () => {
    setBurgerMenuOpened(true)
  }
  const handleCloseBurgerMenu = () => {
    setBurgerMenuOpened(false)
  }

  const handleSetFilterCheckboxValue = () => {
    setFilterCheckboxValue(!filterCheckboxValue)
  }
  const handleLogin = () => {
    setLoggedIn(!loggedIn)
  }

  return (
    <div className="app">
      <div className="page">
        {(isBurgerMenuOpen === true) ? <BurgerMenu closeBurgerMenu={handleCloseBurgerMenu}/> : null}
          <Switch>
          <Route path="/sign-in">
            <Login/>
          </Route>
          <Route path="/movies">
            <Header isBurgerMenuOpen={isBurgerMenuOpen}
                    handleOpenBurgerMenu={handleOpenBurgerMenu}
                    handleCloseBurgerMenu={handleCloseBurgerMenu}
                    handleLoggin={handleLogin} loggedIn={loggedIn}/>
            <Movies handleCheckboxSet={handleSetFilterCheckboxValue}/>
            <Footer/>
          </Route>
          <Route path="/saved-movies">
            <Header isBurgerMenuOpen={isBurgerMenuOpen}
                    handleOpenBurgerMenu={handleOpenBurgerMenu}
                    handleCloseBurgerMenu={handleCloseBurgerMenu}
                    handleLoggin={handleLogin} loggedIn={loggedIn}/>
            <Movies handleCheckboxSet={handleSetFilterCheckboxValue}/>
            <Footer/>
          </Route>
          <Route path="/sign-up">
            <Register/>
          </Route>
          <Route path="/profile">
            <Header isBurgerMenuOpen={isBurgerMenuOpen}
                    handleOpenBurgerMenu={handleOpenBurgerMenu}
                    handleCloseBurgerMenu={handleCloseBurgerMenu}
                    handleLoggin={handleLogin} loggedIn={loggedIn}/>
            <Profile/>
          </Route>
          <Route path="/error">
            <Error/>
          </Route>
          <Route path="/">
            <Header isBurgerMenuOpen={isBurgerMenuOpen}
                    handleOpenBurgerMenu={handleOpenBurgerMenu}
                    handleCloseBurgerMenu={handleCloseBurgerMenu}
                    handleLoggin={handleLogin} loggedIn={loggedIn}/>
            <Main/>
            <Footer/>
          </Route>
        </Switch>

      </div>
    </div>
  );
}

export default App;
