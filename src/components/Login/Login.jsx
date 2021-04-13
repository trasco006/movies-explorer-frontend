import './Login.css'
import {useState} from "react";

const Login = (props) => {

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
    props.handleLogIn(inputData)
  }


  return (
    <div className='login'>
      <div className="login__header">
        <div className="logo"/>
        <h1 className="login__title">Рады видеть!</h1>
      </div>
      <form onSubmit={handleSubmit} className="login__form">
        <div className="login__form-container">
          <p className="login__form-input-prompt">E-mail</p>
          <input onChange={getDataFromInput}
                 type="text" id='email'
                 className="login__form-input"/>
          <p className="login__form-input-prompt">Пароль</p>
          <input onChange={getDataFromInput}
                 type="password" id='password'
                 className="login__form-input"/>
        </div>
        <button type="submit" className="login__submit-button">Войти</button>
      </form>
      <p className="login__reg-faq">Ещё не зарегистрированы? <a href="/sign-up" className="login__reg-link">Регистрация</a></p>
    </div>
  )
}
export default Login