import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"

const SearchForm = (props) => {
  const handleSubmit=(evt)=>{
    evt.preventDefault()
    props.handleSubmit()
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit} className="search__form">
        <div className="search__container">
          <div className="search__ico"/>
          <input required type="text" className="search__input" placeholder='Фильм'/>
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