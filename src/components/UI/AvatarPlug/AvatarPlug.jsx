import './AvatarPlug.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const AvatarPlug = ({ size, name }) => {
  const getInitialsFromFullName = (fullName) => {
    let initials = '';
    if (fullName) {
      fullName.split(' ').forEach((partOfName) => {
        initials = initials
          .concat(`${partOfName[0].toUpperCase()}`)
          .slice(0, 2);
      });
    } else {
      initials = '?';
    }
    return initials;
  };

  return (
    <div
      className={clsx(
        'avatar-plug',
        size === 'S' && 'avatar-plug_size_S',
        size === 'M' && 'avatar-plug_size_M',
        size === 'L' && 'avatar-plug_size_L'
      )}
    >
      {getInitialsFromFullName(name)}
    </div>
  );
};

export default AvatarPlug;

AvatarPlug.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOf(['L', 'M', 'S']).isRequired,
};

AvatarPlug.defaultProps = {
  name: null,
};
