import './Portfolio.css'

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
        <li>
          <a href="#" className='portfolio__link'>
            <p>Статичный сайт</p>
            <p>↗</p>
          </a>
        </li>
        <li>
          <a href="#" className='portfolio__link'>
            <p>Адаптивный сайт</p>
            <p>↗</p>
          </a>
        </li>
        <li>
          <a href="#" className='portfolio__link portfolio__link_border_off'>
            <p>Одностраничное приложение</p>
            <p>↗</p>
          </a>
        </li>
      </ul>
    </div>
  )
}