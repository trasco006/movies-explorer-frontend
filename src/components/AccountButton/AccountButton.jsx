import './AccountButton.css'
import {Link} from "react-router-dom";

export const AccountButton=()=>{
  return(
    <Link to="/profile">
      <div className="account">
        <p className="account__title">Аккаунт</p>
        <div className="account__icon"/>
      </div>
    </Link>
  )
}