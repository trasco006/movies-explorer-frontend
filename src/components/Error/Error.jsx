import './Error.css'

const Error = () => {
  return (
    <div className="error">
      <h1 className="error__code">404</h1>
      <p className="error__title">Страница не найдена</p>
      <a href="#" className="error__back">Назад</a>
    </div>
  )
}

export default Error