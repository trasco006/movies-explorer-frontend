import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"
import {useState} from "react";

const SearchForm = (props) => {
  const [req, setReq] = useState('')

  /**
   * Берёт данные из инпута и записывает в стэйт
   * @param input
   */
  const getDataFromInput = (input) => {
    setReq(input.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleSubmit(req)
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit} className="search__form">
        <div className="search__container">
          <div className="search__ico"/>
          <input required
                 value={req}
                 onChange={getDataFromInput}
                 type="text"
                 className="search__input"
                 placeholder='Фильм'/>
          <button className="search__submit-button"/>
        </div>
        <div className="search__switch">
          <FilterCheckbox title={"Короткометражки"} handleCheckboxSet={props.handleCheckboxSet}/>
        </div>
      </form>
    </div>
  )
}

export default SearchForm