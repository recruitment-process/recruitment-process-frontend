import './CandidateHeader.scss';
import PropTypes from 'prop-types';
import DropDownList from '../../UI/DropDownList/DropDownList';

const CandidateHeader = ({ candidate }) => {
  console.log();

  return (
    <div className="candidate-header">
      <div className="candidate-header__photo">
        <div className="image" />
        <div className="figure figure_match_high">{candidate.match}%</div>
      </div>
      <div className="candidate-header__info">
        <h3 className="info__candidate-name">{candidate.name}</h3>
        <p className="info__candidate-spec">
          {candidate.jobTitle}, {candidate.years} лет
        </p>
        {candidate.tags && (
          <ul className="info__candidate-tags">
            {candidate.tags.map((tag) => (
              <li className="info__candidate-tag" key={Math.random()}>
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="candidate-header__extra extra">
        <ul className="extra__actions">
          <li className="extra__action">
            <button className="extra__action-button">1</button>
          </li>
          <li className="extra__action">
            <button className="extra__action-button">1</button>
          </li>
          <li className="extra__action">
            <button className="extra__action-button">1</button>
          </li>
        </ul>
        <div className="extra__progress">
          <DropDownList />
        </div>
      </div>
    </div>
  );
};

export default CandidateHeader;

CandidateHeader.propTypes = {
  candidate: PropTypes.shape().isRequired,
};
