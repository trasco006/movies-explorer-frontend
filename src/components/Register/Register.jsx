import './Register.css'
import {Link} from "react-router-dom";
import {useState} from "react";


const Register = (props) => {

  /**
   * Объект с данными из инпутов формы
   */
  const [inputData, setInputData] = useState({})

  /**
   * Берёт данные из инпута и записывает в стэйт
   * @param input
   */
  const getDataFromInput = (input) => {
    inputData[input.target.id] = input.target.value
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleRegister(inputData)
  }

  return (
    <div className='register'>
      <div className="register__header">
        <Link to="/">
          <div className="logo register__logo"/>
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
      </div>
      <form className="register__form"
            onSubmit={handleSubmit}>
        <div className="register__form-container">
          <p className="register__form-input-prompt">Имя</p>
          <input required type="text"
                 id="name"
                 onChange={getDataFromInput}
                 className="register__form-input"/>
          <p className="register__form-input-error"/>
          <p className="register__form-input-prompt">E-mail</p>
          <input required type="email" id="email" onChange={getDataFromInput} className="register__form-input"/>
          <p className="register__form-input-error"/>
          <p className="register__form-input-prompt">Пароль</p>
          <input required type="password" id="password" onChange={getDataFromInput} className="register__form-input"/>
          <p className="register__form-input-error"/>
        </div>
        <button type="submit" className="register__submit-button">Зарегистрироваться</button>
      </form>
      <p className="register__reg-faq">Уже зарегистрированы? <a href="/sign-in"
                                                                className="register__login-link">Войти</a></p>
    </div>
  )
}
export default Register