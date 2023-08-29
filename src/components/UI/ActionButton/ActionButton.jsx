import clsx from 'clsx';
import PropTypes from 'prop-types';
import './ActionButton.scss';

const ActionButton = ({ type, mod, isLiked, onActionButtonClick }) => {
  const handleActionButtonClick = () => {
    onActionButtonClick();
  };

  return (
    <button
      className={clsx(
        'action-button',
        mod === 'pale' && 'action-button_mod_pale',
        type === 'share' && 'action-button_type_share',
        type === 'mail' && 'action-button_type_mail',
        type === 'delete' && 'action-button_type_delete',
        type === 'bookmark' && 'action-button_type_bookmark',
        type === 'print' && 'action-button_type_print',
        type === 'link' && 'action-button_type_link',
        type === 'like' && 'action-button_type_like',
        isLiked && 'action-button_type_like_active'
      )}
      aria-label="кнопка добавления в избранное"
      onClick={handleActionButtonClick}
    />
  );
};

export default ActionButton;

ActionButton.propTypes = {
  type: PropTypes.oneOf([
    'like',
    'share',
    'mail',
    'delete',
    'bookmark',
    'print',
    'link',
  ]),
  isLiked: PropTypes.bool,
  onActionButtonClick: PropTypes.func,
  mod: PropTypes.oneOf(['pale']),
};

ActionButton.defaultProps = {
  onActionButtonClick: null,
  type: undefined,
  mod: null,
  isLiked: undefined,
};
