import './Popup.scss';

import PropTypes from 'prop-types';
import { useCallback, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { KEYS } from '../../../utils/constants';

const Popup = ({ children, isPopupVisible, setIsPopupVisible, btnRef }) => {
  const popupRef = useRef(null);

  const closeByClickOnOverlay = useCallback(
    (evt) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(evt.target) &&
        !btnRef.current.contains(evt.target)
      ) {
        setIsPopupVisible(!isPopupVisible);
      }
    },
    [btnRef, isPopupVisible, setIsPopupVisible]
  );
  //
  // EVENT LISTENER FOR CLOSE BY CLICK ON OVERLAY
  useEffect(() => {
    if (isPopupVisible) {
      document.addEventListener('mousedown', closeByClickOnOverlay);
    } else {
      document.removeEventListener('mousedown', closeByClickOnOverlay);
    }
    return () =>
      document.removeEventListener('mousedown', closeByClickOnOverlay);
  }, [isPopupVisible, closeByClickOnOverlay]);
  //
  // EVENT LISTENER FOR CLOSE BY ESC KEY
  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === KEYS.escape) {
        setIsPopupVisible(!isPopupVisible);
      }
    }

    if (isPopupVisible) {
      document.addEventListener('keydown', handleEscClose);
    } else {
      document.removeEventListener('keydown', handleEscClose);
    }
    return () => document.removeEventListener('keydown', handleEscClose);
  }, [isPopupVisible, setIsPopupVisible]);

  return (
    <div
      className={clsx(`popup`, isPopupVisible && 'popup_visible')}
      ref={popupRef}
    >
      {children}
    </div>
  );
};

export default Popup;

Popup.propTypes = {
  children: PropTypes.node.isRequired,
  isPopupVisible: PropTypes.bool.isRequired,
  setIsPopupVisible: PropTypes.func.isRequired,
  btnRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

Popup.defaultProps = {
  btnRef: undefined,
};
