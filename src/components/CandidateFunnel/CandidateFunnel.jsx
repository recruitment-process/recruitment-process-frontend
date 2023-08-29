import PropTypes from 'prop-types';

import './CandidateFunnel.scss';

import FunnelStage from '../FunnelStage/FunnelStage';

const CandidateFunnel = ({ funnelsList }) => {
  const handleAddStage = () => {
    console.log('Тут будет открываться шторка');
  };

  return (
    <section className="candidate-funnel" aria-label="Воронка кандидата">
      {funnelsList.length && (
        <ul className="candidate-funnel__list">
          {funnelsList.map((stage) => (
            <FunnelStage stage={stage} key={stage.id} />
          ))}
        </ul>
      )}
      <button
        className="candidate-funnel__add-btn"
        type="button"
        onClick={handleAddStage}
      >
        Добавить новый этап
      </button>
    </section>
  );
};

CandidateFunnel.propTypes = {
  funnelsList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default CandidateFunnel;
