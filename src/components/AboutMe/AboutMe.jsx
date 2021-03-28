import Article from "../Article/Article";
import './AboutMe.css'

export default function AboutMe() {
  return (
    <Article articleId={'3'}
             titleName={'Студент'}
             children={
               <div className="about-me__container">
                 <div className="about-me__profile">
                   <div className="about-me__info">
                     <h3 className="about-me__title">Кирилл</h3>
                     <p className="about-me__subtitle">Фронтенд-разработчик, 26 лет</p>
                     <p className="about-me__about">Я родился и живу в Саратове, закончил факультет экономики СГУ. У
                       меня
                       есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015
                       года
                       работал d компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
                       фриланс-заказами и ушёл с постоянной работы.</p>
                   </div>
                   <ul className="about-me__links">
                     <li><a href="#" className="about-me__link">Facebook</a></li>
                     <li><a href="#" className=" about-me__link">GitHub</a></li>
                   </ul>
                 </div>
                 <div className=" about-me__avatar"/>
               </div>
             }/>
  )
}