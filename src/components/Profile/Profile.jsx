import './Profile.css'
import Header from "../Header/Header";
import React, {useState} from 'react'
import {CurrentUser} from "../../contexts/CurrentUserContext";

const Profile = (props) => {
  const currentUser = React.useContext(CurrentUser);
  /**
   * Объект с данными из инпутов формы
   */
  const [inputData, setInputData] = useState({
    name: currentUser.name,
    email: currentUser.email
  })

  /**
   * Берёт данные из инпута и записывает в стэйт
   * @param input
   */
  const getDataFromInput = (input) => {
    inputData[input.target.id] = input.target.value
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
  }

  return (
    <>
      <Header isBurgerMenuOpen={props.isBurgerMenuOpen}
              handleOpenBurgerMenu={props.handleOpenBurgerMenu}
              handleCloseBurgerMenu={props.handleCloseBurgerMenu}
              handleLoggin={props.handleLogIn} loggedIn={props.loggedIn}/>
      <div className="profile">
        <h1 className="profile__title">{`Привет, ` + currentUser.name + ' !'}</h1>
        <form onSubmit={handleSubmit} className="profile__form">
          <div className="profile__container">
            <p className="profile__input-helper">Имя</p>
            <input value={inputData.name} onChange={getDataFromInput} id="name" type="text"
                   className="profile__form-input"/>
          </div>
          <div className="profile__container profile__container_border-off">
            <p className="profile__input-helper">Почта</p>
            <input value={inputData.email} onChange={getDataFromInput} id="email" type="email"
                   className="profile__form-input"/>
          </div>
          <button type='submit' className="profile__submit-button">Редактировать</button>
        </form>
        <button onClick={props.handleLogOut} className="profile__escape-button">Выйти из аккаунта</button>
      </div>
    </>
  )
}

export default Profile