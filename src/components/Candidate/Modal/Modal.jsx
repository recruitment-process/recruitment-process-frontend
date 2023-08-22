// TODO: Заглушка.
import './Modal.scss';
import { TelegramIcon, TelegramShareButton } from 'react-share';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Modal = ({ isOpen, onClose, text }) => {
  console.log(isOpen);

  useEffect(() => {
    const handleEscKeyCLose = (evt) => evt.code === 'Escape' && onClose();

    if (isOpen) {
      document.addEventListener('keydown', handleEscKeyCLose);
    }
    return () => document.removeEventListener('keydown', handleEscKeyCLose);
  }, [isOpen, onClose]);
  //
  const handleOverlayClick = () => {
    onClose();
  };

  return (
    <div
      className={clsx('modal', isOpen && 'modal_open')}
      onClick={handleOverlayClick}
      role="presentation"
    >
      <div className="modal__window">
        {text ? (
          <p className="modal__text">{text}</p>
        ) : (
          <TelegramShareButton
            url="https://recruitment-process.github.io/recruitment-process-frontend/"
            quote="Meeting-room"
            hashtag="#meetingroom"
          >
            <TelegramIcon size={36} />
          </TelegramShareButton>
        )}
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  text: PropTypes.string,
};

Modal.defaultProps = {
  onClose: null,
  text: null,
};
