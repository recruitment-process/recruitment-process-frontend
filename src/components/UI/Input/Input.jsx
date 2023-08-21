// import PropTypes from 'prop-types';
// import clsx from 'clsx';

import './Input.scss';

const Input = () => {
  console.log('1');

  return (
    <label htmlFor="username" className="simple-input__label">
      <input id="username" className="simple-input__input" />
    </label>
  );
};

export default Input;
