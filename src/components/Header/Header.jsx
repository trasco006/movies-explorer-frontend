import './Header.css'
import Navigation from '../Navigation/Navigation'
import {Link} from "react-router-dom";

export default function Header(props) {
  if (props.loggedIn === true) {
    return (
      <div className="header">
        <Link to="/">
          <div className="logo"/>
        </Link>
        <div className="header__container">
          <Navigation/>
          <Link to="/profile">
            <div className="header__account">
              <p className="header__account-title">Аккаунт</p>
              <div className="header__account-icon"/>
            </div>
          </Link>
        </div>
      </div>
    )
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