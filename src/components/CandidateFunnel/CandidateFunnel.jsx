import PropTypes from 'prop-types';

import './CandidateFunnel.scss';

import FunnelStage from '../FunnelStage/FunnelStage';

const CandidateFunnel = ({ funnelsList }) => {
  // eslint-disable-next-line no-unused-vars
  let something;

  return (
    <section className="candidate-funnel" aria-label="Воронка кандидата">
      <ul className="candidate-funnel__list">
        {funnelsList.map((stage) => (
          <FunnelStage stage={stage} key={stage.id} />
        ))}
      </ul>
    </section>
  );
};

CandidateFunnel.propTypes = {
  funnelsList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default CandidateFunnel;
