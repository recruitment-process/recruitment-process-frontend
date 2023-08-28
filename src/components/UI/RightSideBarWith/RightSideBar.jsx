/* eslint-disable jsx-a11y/no-static-element-interactions */
import './RightSideBar.scss';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import { useState } from 'react';

const RightSideBar = (props) => {
  const { children, header } = props;

  const [isVisible, setIsVisible] = useState(true);

  const onClose = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={clsx('right-side-bar', isVisible && 'right-side-bar_opened')}
      onMouseDown={onClose}
    >
      <div
        className="right-side-bar__container"
        onMouseDown={(evt) => evt.stopPropagation()}
      >
        <button
          className="right-side-bar__close-btn"
          type="button"
          aria-label="Кнопка закрытия бокового попапа"
          onMouseDown={onClose}
        />
        <h3 className="right-side-bar__header">{header}</h3>
        {children}
      </div>
    </div>
  );
};

RightSideBar.propTypes = {
  children: PropTypes.element,
  header: PropTypes.string.isRequired,
};

RightSideBar.defaultProps = {
  children: null,
};

export default RightSideBar;
