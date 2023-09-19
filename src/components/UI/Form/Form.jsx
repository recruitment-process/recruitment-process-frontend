import { Children, cloneElement } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Form.scss';

import Button from '../Button/Button';

const Form = ({
  formName,
  onSubmit,
  buttonText,
  isLoading,
  serverError,
  ...props
}) => {
  const { control, handleSubmit, resetField } = useForm({ mode: 'onBlur' });

  const handleInputReset = (fieldName) => {
    resetField(fieldName, { defaultValue: '' });
  };

  return (
    <form
      className={clsx('form', { [props.addFormClass]: props.addFormClass })}
      name={formName}
      id={formName}
      action="#"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      {Children.map(props.children, (child) =>
        cloneElement(child, {
          control,
          onReset: handleInputReset,
        })
      )}
      <span
        className={clsx('form__server-error', {
          [props.addServerErrorClass]: props.addServerErrorClass,
        })}
      >
        {serverError}
      </span>
      <Button
        text={buttonText}
        disabled={isLoading}
        size="normal"
        type="submit"
        pic="none"
        addBtnClass={props.addBtnClass}
      />
    </form>
  );
};

Form.propTypes = {
  formName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  addBtnClass: PropTypes.string,
  addFormClass: PropTypes.string,
  addServerErrorClass: PropTypes.string,
  serverError: PropTypes.string,
};

Form.defaultProps = {
  buttonText: '',
  addBtnClass: '',
  addFormClass: '',
  addServerErrorClass: '',
  serverError: '',
};

export default Form;
