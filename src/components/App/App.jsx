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

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [filterCheckboxValue, setFilterChechboxValue] = useState(false)

  const handleSetFilterCheckboxValue = (item) => {
    setFilterChechboxValue(!filterCheckboxValue)
  }
  const handleLogin = () => {
    setLoggedIn(!loggedIn)
  }
  console.log(filterCheckboxValue)
  return (
    <div className="app">
      <div className="page">
        <Switch>
          <Route path="/sign-in">
            <Login/>
          </Route>
          <Route path="/movies">
            <Movies handleCheckboxSet={handleSetFilterCheckboxValue}/>
          </Route>
          <Route path="/saved-movies">
            <Movies handleCheckboxSet={handleSetFilterCheckboxValue}/>
          </Route>
          <Route path="/sign-up">
            <Register/>
          </Route>
          <Route path="/profile">
            <Header handleLoggin={handleLogin} loggedIn={loggedIn}/>
            <Profile/>
          </Route>
          <Route path="/error">
            <Error/>
          </Route>
          <Route path="/">
            <Header handleLoggin={handleLogin} loggedIn={loggedIn}/>
            <Main/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
