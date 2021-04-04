import './BurgerMenu.css'
import {AccountButton} from "../AccountButton/AccountButton";
import {Link} from "react-router-dom";

export const BurgerMenu = (props) => {
  return (
    <div className="burger">
      <button onClick={props.closeBurgerMenu}
              className="burger__close-button">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <rect x="7.16016" y="9.28247" width="3" height="22" transform="rotate(-45 7.16016 9.28247)" fill="white"/>
          <rect x="22.7168" y="7.16113" width="3" height="22" transform="rotate(45 22.7168 7.16113)" fill="white"/>
        </svg>
      </button>
      <nav className="burger__nav">
        <ul className="burger__list">
          <Link to='/'>
            <li onClick={props.closeBurgerMenu} className={`burger__list-item ${(window.location.pathname === '/') ? 'burger__list-item_selected' : null }`}>
              Главная
            </li>
          </Link>
          <Link to='/movies'>
            <li onClick={props.closeBurgerMenu}className={`burger__list-item ${(window.location.pathname === '/movies') ? 'burger__list-item_selected' : null }`}>
              Фильмы
            </li>
          </Link>
          <Link to='/saved-movies'>
            <li onClick={props.closeBurgerMenu} className={`burger__list-item ${(window.location.pathname === '/saved-movies') ? 'burger__list-item_selected' : null }`}>
              Сохранённые фильмы
            </li>
          </Link>
        </ul>
        <div className="burger__account-button">
          <AccountButton/>
        </div>
      </nav>
    </div>)
}