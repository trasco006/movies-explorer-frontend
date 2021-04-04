import './Register.css'
import {Link} from "react-router-dom";

const Register = () => {
  return (
    <div className='register'>
      <div className="register__header">
        <Link to="/">
          <div className="logo"/>
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
      </div>
      <form className="register__form">
        <div className="register__form-container">
          <p className="register__form-input-prompt">Имя</p>
          <input required type="text" className="register__form-input"/>
          <p className="register__form-input-error"> </p>
          <p className="register__form-input-prompt">E-mail</p>
          <input required type="email" className="register__form-input"/>
          <p className="register__form-input-error"> </p>
          <p className="register__form-input-prompt">Пароль</p>
          <input required type="password" className="register__form-input"/>
          <p className="register__form-input-error"> </p>
        </div>
        <button type="submit" className="register__submit-button">Зарегистрироваться</button>
      </form>
      <p className="register__reg-faq">Уже зарегистрированы? <a href="#"
                                                                className="register__login-link">Войти</a></p>
    </div>
  )
}
export default Register