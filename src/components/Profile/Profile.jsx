import './Profile.css'

const Profile = () => {
  return (
    <div className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form action="" className="profile__form">
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
      <button className="profile__escape-button">Выйти из аккаунта</button>
    </div>
  )
}

export default Profile