import './Footer.css'
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className="footer">
      <p className="footer__about">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__info">
        <p className="footer__copyright">
          © {year}
        </p>
        <ul className="footer__links">
          <li className="footer__link">
            <a href="#" className="footer__link">
              Яндекс.Практикум
            </a></li>
          <li className="footer__link">
            <a href="#" className="footer__link">
              GitHub
            </a></li>
          <li className="footer__link">
            <a href="#" className="footer__link">
              Facebook
            </a></li>
        </ul>
      </div>
    </div>
  )
}