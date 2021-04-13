import ('./Article.css');
export default function Article(props) {
  return (
    <div id={props.articleId} className={`article ${props.articleSelector ? props.articleSelector : ''}`}>
      <h2 className="article__title">{props.titleName}</h2>
      <div className="article__container">{props.children}</div>
    </div>
  )
}