import PropTypes from 'prop-types';

import btn from '../../temp/images/page-under-construction-button.png';
import gear from '../../temp/gear.gif';

import './PageUnderConstruction.scss';

const PageUnderConstruction = (props) => {
  const { name, text } = props;

  return (
    <section className="page-under-construction">
      <div className="page-under-construction__header-container">
        <h2 className="page-under-construction__header">{name}</h2>
        <img
          src={btn}
          alt="Неработающая кнопка"
          className="page-under-construction__btn"
        />
      </div>
      <div className="page-under-construction__main-container">
        <div className="page-under-construction__gear-container">
          <img
            src={gear}
            alt="шестеренка"
            className="page-under-construction__gear"
          />
        </div>
        <div className="page-under-construction__text-container">
          <h3 className="page-under-construction__sub-header">
            Этот раздел пока в разработке
          </h3>
          <p className="page-under-construction__text">{text}</p>
        </div>
      </div>
    </section>
  );
};

export default PageUnderConstruction;

PageUnderConstruction.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
};

PageUnderConstruction.defaultProps = {
  name: '',
  text: '',
};
