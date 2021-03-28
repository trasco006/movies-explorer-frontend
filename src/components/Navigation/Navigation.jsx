import './Navigation.css'
import {Link} from "react-router-dom"

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__links">
        <Link to="/movies"><li className="navigation__link">Фильмы</li></Link>
        <Link to="/saved-movies"><li className="navigation__link">Сохранённые фильмы</li></Link>
      </ul>
    </nav>
  )
}