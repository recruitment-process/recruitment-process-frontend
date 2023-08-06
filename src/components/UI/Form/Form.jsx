import { Children, cloneElement } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Form.scss';

import Button from '../Button/Button';

const Form = ({ formName, onSubmit, buttonText, isLoading, ...props }) => {
  const { control, handleSubmit } = useForm({ mode: 'all' });

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
        })
      )}
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
};

Form.defaultProps = {
  buttonText: '',
  addBtnClass: '',
  addFormClass: '',
};

export default Form;
