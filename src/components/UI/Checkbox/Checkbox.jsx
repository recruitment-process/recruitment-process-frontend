import './Checkbox.scss'
import PropTypes from 'prop-types'
import { useState } from 'react'

export const Checkbox = ({ checked, label, disabled, ...props }) => {
  const [isChecked, setIsChecked] = useState(checked || false)
  const handleChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <label htmlFor={props.id} className={`checkbox ${disabled && 'checkbox_disabled'} `}>
      <input
        type="checkbox"
        className={`checkbox__input ${isChecked ? 'checkbox__input_type_active' : 'checkbox__input_type_inactive'}`}
        id={props.id}
        onChange={handleChange}
        defaultChecked={isChecked}
        {...props} />
      <span className={['checkbox__custom-cb', `${disabled ? 'checkbox__custom-cb_disabled' : ''}`].join(' ')} />
      <span className="checkbox__text">{label}</span>
    </label>
  )
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}

Checkbox.defaultProps = {
  checked: false,
  label: '',
  disabled: false,
  onChange: undefined
}
