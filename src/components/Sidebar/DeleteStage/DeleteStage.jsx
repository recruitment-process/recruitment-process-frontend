import PropTypes from 'prop-types';

import './DeleteStage.scss';

import Button from '../../UI/Button/Button';

import { TITLES } from '../../../utils/constants';

const DeleteStage = ({ header, actionItem }) => {
  const handleCaptionSwitch = () => {
    switch (header) {
      case TITLES.curtain.deleteStage:
        return (
          <p className="delete-stage__caption">
            Удалив главный этап, вы&nbsp;удалите все промежуточные этапы
          </p>
        );
      case TITLES.curtain.deleteSubstage:
        return (
          <p className="delete-stage__caption">Удалите промежуточный этап</p>
        );
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    console.log(actionItem);
  };

  return (
    <section className="delete-stage">
      {handleCaptionSwitch()}
      <ul className="delete-stage__list">
        <li className="delete-stage__item">
          <span className="delete-stage__stage-caption">
            {header === TITLES.curtain.deleteStage
              ? 'Название этапа'
              : 'Название подэтапа'}
          </span>
          <p className="delete-stage__stage-name">{actionItem.name}</p>
        </li>
        {actionItem.stages?.length > 0 &&
          actionItem.stages.map((item, index) => (
            <li className="delete-stage__item" key={item.id}>
              <span className="delete-stage__stage-caption">{`${
                index + 1
              } подэтап`}</span>
              <p className="delete-stage__stage-name">{item.name}</p>
            </li>
          ))}
      </ul>
      <Button
        text={
          header === TITLES.curtain.deleteStage
            ? 'Удалить этап'
            : 'Удалить подэтап'
        }
        size="normal"
        type="button"
        pic="none"
        onClick={handleSubmit}
        addBtnClass="delete-stage__submit-btn"
      />
    </section>
  );
};

DeleteStage.propTypes = {
  header: PropTypes.string.isRequired,
  actionItem: PropTypes.shape({
    name: PropTypes.string,
    stages: PropTypes.arrayOf(PropTypes.shape()),
  }),
};

DeleteStage.defaultProps = {
  actionItem: null,
};

export default DeleteStage;
