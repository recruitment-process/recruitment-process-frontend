/* eslint-disable jsx-a11y/no-static-element-interactions */
import './RightSideBar.scss';

import PropTypes from 'prop-types';
import clsx from 'clsx';

const RightSideBar = (props) => {
  const { children, header, isOpen, closeSideBar } = props;

  const onClose = () => {
    closeSideBar();
  };

  return (
    <div
      className={clsx('right-side-bar', isOpen && 'right-side-bar_opened')}
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
  isOpen: PropTypes.bool,
  closeSideBar: PropTypes.func.isRequired,
};

RightSideBar.defaultProps = {
  children: null,
  isOpen: false,
};

export default RightSideBar;
