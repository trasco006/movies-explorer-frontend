import './Login.css'

const Login = () => {
  return (
    <div className='login'>
      <div className="login__header">
        <div className="logo"/>
        <h1 className="login__title">Рады видеть!</h1>
      </div>
      <form className="login__form">
        <div className="login__form-container">
          <p className="login__form-input-prompt">E-mail</p>
          <input required type="text"  className="login__form-input"/>
          <p className="login__form-input-prompt">Пароль</p>
          <input required type="text" className="login__form-input"/>
        </div>
        <button type="submit" className="login__submit-button">Войти</button>
      </form>
      <p className="login__reg-faq">Ещё не зарегистрированы? <a href="#" className="login__reg-link">Регистрация</a></p>
    </div>
  )
}
export default Login