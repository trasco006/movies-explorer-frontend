import './FilterCheckbox.css'
import React, {useState} from 'react';

const FilterCheckbox = (props) => {
  const [filterChecked, setFilterChecked] = useState(false)
  const handleInputChange = () => {
    setFilterChecked(!filterChecked)
    props.handleCheckboxSet()
  }
  return (
    <div className="switch">
      <input checked={filterChecked}
             onChange={handleInputChange}
             type="checkbox" id="mc3" name="Switch"/>
      <label className="switch-label" htmlFor="mc3"/>
      <label className="switch-text" htmlFor="mc3">{props.title}</label>
    </div>
  )
}
export default FilterCheckbox