import clsx from 'clsx';
import PropTypes from 'prop-types';
import './ActionButton.scss';

const ActionButton = ({ type, mod, isLiked, onActionButtonClick }) => {
  // const [isLikeActive, setIsLikeActive] = useState(isLiked || false);

  const handleActionButtonClick = () => {
    onActionButtonClick();
    console.log();
  };

  //   type === 'like'
  //     ? ('action-button_type_like',
  //     isLiked && 'action-button_type_like_active')
  //     : type === 'share' && 'action-button_type_share'
  // : type === 'mail' && ''
  // )}

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
    >
      {/* <img src={buttonIcon} alt="icon" /> */}
    </button>
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
  // buttonIcon: PropTypes.string,
  isLiked: PropTypes.bool,
  onActionButtonClick: PropTypes.func,
  mod: PropTypes.oneOf(['pale']),
  // setIsLiked: PropTypes.bool,
};

ActionButton.defaultProps = {
  onActionButtonClick: null,
  type: undefined,
  mod: null,
  isLiked: undefined,
  // buttonIcon: null,
};
