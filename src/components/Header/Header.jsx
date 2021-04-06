import './Header.css'
import Navigation from '../Navigation/Navigation'
import {Link} from "react-router-dom";
import {useState} from "react";
import {AccountButton} from "../AccountButton/AccountButton";

export default function Header(props) {
  const [isBurgerOpen, setBurgerOpened] = useState(false)
  window.addEventListener('resize', () => {
    if (window.matchMedia("(min-width: 1279px)").matches === true) {
      setBurgerOpened(true)
    } else {
      setBurgerOpened(false)
    }
  })


  if (props.loggedIn === true) {
    if (isBurgerOpen === false) {
      return (
        <div className="header">
          <Link to="/">
            <div className="logo"/>
          </Link>
          <div className="header__container header__container_reverse">
           <button onClick={props.handleOpenBurgerMenu }><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path  d="M36 14L8 14V11L36 11V14Z" fill="white"/>
              <path  d="M36 24L8 24V21L36 21V24Z" fill="white"/>
              <path  d="M36 34L8 34V31L36 31V34Z" fill="white"/>
            </svg>
            </button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="header">
          <Link to="/">
            <div className="logo"/>
          </Link>
          <div className="header__container">
            <Navigation/>
            <AccountButton/>
          </div>
        </div>
      )
    }
  } else {
    return (
      <div className="header">
        <Link to="/">
          <div className="logo"/>
        </Link>
        <ul className="header__links">
          <li>
            <Link className="header__link" to="/sign-up">Регистрация</Link></li>
          <li>
            <Link className="header__link" to="/sign-in">Войти</Link></li>
        </ul>
      </div>
    )
  }
}