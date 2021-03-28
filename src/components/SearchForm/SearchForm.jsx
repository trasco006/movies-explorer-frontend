import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"

const SearchForm = (props) => {
  return (
    <div className="search">
      <div className="search__ico"/>
      <form action="" className="search__form">
        <input type="text" className="search__input" placeholder='Фильм'/>
        <button className="search__submit-button"/>
        <div className="search__switch">
          <FilterCheckbox title={"Короткометражки"} handleCheckboxSet={props.handleCheckboxSet}/>
        </div>
      </form>
    </div>
  )
}

export default SearchForm