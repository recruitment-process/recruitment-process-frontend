import { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './ActionSheet.scss';

import { KEYS } from '../../../utils/constants';

const ActionSheet = ({
  actionList,
  isActionsVisible,
  setActionsVisible,
  place,
}) => {
  const actionRef = useRef(null);

  const closeByClickOnOverlay = useCallback(
    (evt) => {
      if (actionRef.current && !actionRef.current.contains(evt.target)) {
        setActionsVisible(!isActionsVisible);
      }
    },
    [isActionsVisible, setActionsVisible]
  );

  // EVENT LISTENER FOR CLOSE BY CLICK ON OVERLAY
  useEffect(() => {
    if (isActionsVisible) {
      document.addEventListener('mousedown', closeByClickOnOverlay);
    } else {
      document.removeEventListener('mousedown', closeByClickOnOverlay);
    }
    return () =>
      document.removeEventListener('mousedown', closeByClickOnOverlay);
  }, [isActionsVisible, closeByClickOnOverlay]);

  // EVENT LISTENER FOR CLOSE BY ESC KEY
  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === KEYS.escape) {
        setActionsVisible(!isActionsVisible);
      }
    }
    if (isActionsVisible) {
      document.addEventListener('keydown', handleEscClose);
    } else {
      document.removeEventListener('keydown', handleEscClose);
    }
    return () => document.removeEventListener('keydown', handleEscClose);
  }, [isActionsVisible, setActionsVisible]);

  return (
    <div
      className={clsx(`action-sheet action-sheet_place_${place}`, {
        'action-sheet_visible': isActionsVisible,
      })}
      ref={actionRef}
    >
      <ul className="action-sheet__list">
        {actionList.map((action) => (
          <li className="action-sheet__item" key={action.id}>
            <button
              className={`action-sheet__btn action-sheet__btn_type_${action.type}`}
              onClick={action.action}
            >
              {action.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ActionSheet.propTypes = {
  actionList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired,
    })
  ).isRequired,
  isActionsVisible: PropTypes.bool.isRequired,
  setActionsVisible: PropTypes.func.isRequired,
  place: PropTypes.string.isRequired,
};

export default ActionSheet;
