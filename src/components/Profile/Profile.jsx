import './Profile.css'
import Header from "../Header/Header";

const Profile = (props) => {

  return (
    <>
      <Header isBurgerMenuOpen={props.isBurgerMenuOpen}
              handleOpenBurgerMenu={props.handleOpenBurgerMenu}
              handleCloseBurgerMenu={props.handleCloseBurgerMenu}
              handleLoggin={props.handleLogIn} loggedIn={props.loggedIn}/>
      <div className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form">
          <div className="profile__container">
            <p className="profile__input-helper">Имя</p>
            <input type="text" className="profile__form-input"/>
          </div>
          <div className="profile__container profile__container_border-off">
            <p className="profile__input-helper">Почта</p>
            <input type="email" className="profile__form-input"/>
          </div>
          <button type='submit' className="profile__submit-button">Редактировать</button>
        </form>
        <button onClick={props.handleLogOut} className="profile__escape-button">Выйти из аккаунта</button>
      </div>
    </>
  )
}

export default Profile