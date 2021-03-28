import './NavTab.css'

export default function NavTab() {
  return (
    <nav>
      <ul className="nav-tab">
        <li>
          < a href="#1" className="nav-tab__link">О проекте</a>
        </li>
        <li>
          < a href="#2" className="nav-tab__link">Технологии</a>
        </li>
        <li>
          < a href="#3" className="nav-tab__link"> Студент</a>
        </li>
      </ul>
    </nav>
  )
}