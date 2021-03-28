import Article from "../Article/Article";
import './AboutProject.css';

export default function AboutProject() {
  return (
    <Article articleId={'1'}
      articleSelector={'about-project'}
             titleName={'О проекте'}
             children={
               <>
                 <div  className="about-project__columns">
                   <div className="about-project__column">
                     <p className="about-project__column-title">Дипломный проект включал 5 шагов</p>
                     <p className="about-project__column-content">
                       Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
                       доработки.
                     </p>
                   </div>
                   <div className="about-project__column">
                     <p className="about-project__column-title">На выполнение диплома ушло 5 недель</p>
                     <p className="about-project__column-content">
                       У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно
                       защититься.
                     </p>
                   </div>
                 </div>
                 <div className="about-project__schedule-container">
                   <div className="about-project__schedule-first-column">
                     <p className="about-project__schedule-timeline about-project__schedule-timeline_backlight">1
                       неделя</p>
                     <p className="about-project__schedule-title">Back-end</p>
                   </div>
                   <div className="about-project__schedule-second-column">
                     <p className="about-project__schedule-timeline">4 недели</p>
                     <p className="about-project__schedule-title">Front-end</p>
                   </div>
                 </div>
               </>
             }
    />
  )
}
