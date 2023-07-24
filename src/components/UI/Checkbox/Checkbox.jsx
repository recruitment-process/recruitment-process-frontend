import './Checkbox.scss'
import propTypes from 'prop-types'
import { useState } from 'react'

export const Checkbox = ({ checked, text }) => {

  // const { checked, text, state } = props

  const [isChecked, setIsChecked] = useState(checked)
  return (

    <label htmlFor="test" className="checkbox">
      <input
        type="checkbox"
        id="test"
        onChange={() => setIsChecked(!isChecked)}
        className={`checkbox__input ${isChecked ? 'checkbox__input_type_active' : 'checkbox__input_type_inactive'}`} />
      <span className='checkbox__custom-cb'/>
      <span className="checkbox__text">{text}</span>
    </label>

  )
}

Checkbox.propTypes = {
  checked: propTypes.bool,
  text: propTypes.string,
  // state: propTypes.oneOf(['normal', 'disabled', 'disabled-checked'])
}

Checkbox.defaultProps = {
  checked: false,
  text: 'Some text',
  // state: 'normal'
}
