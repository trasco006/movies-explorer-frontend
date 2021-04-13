import Article from "../Article/Article";
import './Techs.css';

export default function Techs() {
  return (
    <Article articleId={'2'}
             articleSelector={'techs'}
             titleName={'Технологии'}
             children={
               <>
                 <h3 className="techs__title">7 Технологий</h3>
                 <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в
                   дипломном проекте.</p>
                 <ul className="techs__container">
                   <li className="techs__technologies ">HTML</li>
                   <li className="techs__technologies">CSS</li>
                   <li className="techs__technologies">JS</li>
                   <li className="techs__technologies">React</li>
                   <li className="techs__technologies">Git</li>
                   <li className="techs__technologies">Express.js</li>
                   <li className="techs__technologies">MongoDB</li>
                 </ul>
               </>
             }
    />
  )
}