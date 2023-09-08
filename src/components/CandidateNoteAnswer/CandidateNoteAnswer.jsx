import './CandidateNoteAnswer.scss';

import PropTypes from 'prop-types';

import { convertNumberToDate } from '../../utils/utils';

const CandidateNoteAnswer = (props) => {
  const { text, time } = props;

  return (
    <div className="candidate-note-answer">
      <p className="candidate-note-answer__time">{convertNumberToDate(time)}</p>
      <p className="candidate-note-answer__text">{text}</p>
    </div>
  );
};

export default CandidateNoteAnswer;

CandidateNoteAnswer.propTypes = {
  text: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};
