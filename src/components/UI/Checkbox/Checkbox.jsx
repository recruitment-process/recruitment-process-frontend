import './Checkbox.scss';
import PropTypes from 'prop-types';

export const Checkbox = ({ checked, onChange, label, disabled, ...props }) => (
  <label
    htmlFor={props.id}
    className={`checkbox ${disabled && 'checkbox_disabled'} `}
  >
    <input
      type="checkbox"
      className="checkbox__input"
      id={props.id}
      onChange={onChange}
      defaultChecked={checked}
    />
    <span
      className={[
        'checkbox__custom-cb',
        `${!disabled && checked ? 'checkbox__custom-cb_active' : ''}`,
        `${disabled && 'checkbox__custom-cb_disabled'}`,
      ].join(' ')}
    />
    {label && <span className="checkbox__text">{label}</span>}
  </label>
);

Checkbox.propTypes = {
  /**
   * id for link label with checkbox
   */
  id: PropTypes.string,
  /**
   * is checkbox checked?
   */
  checked: PropTypes.bool,
  /**
   * text for label
   */
  label: PropTypes.string,
  /**
   * is checkbox disabled?
   */
  disabled: PropTypes.bool,
  /**
   * function in parent
   */
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  id: 'checkbox',
  checked: false,
  label: undefined,
  disabled: false,
  onChange: undefined,
};
