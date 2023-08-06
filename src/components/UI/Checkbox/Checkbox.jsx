import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';
import clsx from 'clsx';

import './Checkbox.scss';

const Checkbox = ({ label, disabled, formName, control, ...props }) => {
  const { field } = useController({
    name: props.id,
    control,
    defaultValue: false,
  });

  return (
    <label
      htmlFor={props.id}
      className={clsx(
        'checkbox',
        { checkbox_disabled: disabled },
        { [props.addLabelClass]: props.addLabelClass }
      )}
    >
      <input
        type="checkbox"
        className="checkbox__input"
        id={props.id}
        form={formName}
        onChange={field.onChange}
        checked={field.value}
      />
      <span
        className={clsx(
          'checkbox__custom-cb',
          { 'checkbox__custom-cb_active': !disabled && field.value },
          { 'checkbox__custom-cb_disabled': disabled }
        )}
      />
      {label && (
        <span
          className={clsx('checkbox__text', {
            [props.addSpanClass]: props.addSpanClass,
          })}
        >
          {label}
        </span>
      )}
    </label>
  );
};

Checkbox.propTypes = {
  /**
   * id for link label with checkbox
   */
  id: PropTypes.string,
  /**
   * add class for label
   */
  addLabelClass: PropTypes.string,
  /**
   * add class for span
   */
  addSpanClass: PropTypes.string,
  /**
   * text for label
   */
  label: PropTypes.string,
  /**
   * is checkbox disabled?
   */
  disabled: PropTypes.bool,
  /**
   * form name where checkbox is located
   */
  formName: PropTypes.string.isRequired,
  /**
   * useForm control object
   */
  control: PropTypes.shape({}),
};

Checkbox.defaultProps = {
  id: 'checkbox',
  addLabelClass: '',
  addSpanClass: '',
  label: undefined,
  disabled: false,
  control: {},
};

export default Checkbox;
