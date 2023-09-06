import './CandidateNote.scss';

import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import NotesButton from '../UI/NotesButton/NotesButton';
import Button from '../UI/Button/Button';
import InputTextArea from '../UI/InputTextArea/InputTextArea';
import CandidateNoteAnswer from '../CandidateNoteAnswer/CandidateNoteAnswer';

import { convertAnswers, convertNumberToDate } from '../../utils/utils';

const CandidateNote = (props) => {
  const { note, addAnswer } = props;

  const [isAnswersOpen, setIsAnswersOpen] = useState(false);
  const [isAnswerInputOpen, setIsAnswerInputOpen] = useState(false);
  const [textInputAnswer, setTextInputAnswer] = useState('');

  const showAnswers = () => {
    setIsAnswersOpen(!isAnswersOpen);
  };

  const showAnswerINput = () => {
    setIsAnswerInputOpen(!isAnswerInputOpen);
  };

  const getTextFromInputAnswer = (data) => {
    setTextInputAnswer(data);
  };

  const handleAddAnswer = (event) => {
    addAnswer(event, note.time, textInputAnswer);
    setTextInputAnswer('');
    setIsAnswerInputOpen(false);
  };

  useEffect(() => {
    setIsAnswerInputOpen(false);
  }, []);

  const answersList = note.answers.map((answer) => (
    <CandidateNoteAnswer
      text={answer.text}
      time={answer.time}
      key={answer.time}
    />
  ));

  return (
    <>
      <p className="candidate-note__time-of-creation">
        {convertNumberToDate(note.time)}
      </p>
      <p className="candidate-note__text">{note.text}</p>
      <ul className="candidate-note__action-btns">
        <li>
          <NotesButton text="Ответить" onClick={showAnswerINput} />
        </li>
        {note.answers?.length !== 0 && (
          <li>
            <NotesButton
              text={convertAnswers(note.answers?.length)}
              icon={isAnswersOpen ? 'down' : 'up'}
              onClick={showAnswers}
            />
          </li>
        )}
      </ul>
      {isAnswersOpen && answersList}
      {isAnswerInputOpen && (
        <form
          className="candidate-note__answer-form"
          onSubmit={handleAddAnswer}
        >
          <InputTextArea
            getTextFromInput={getTextFromInputAnswer}
            text={textInputAnswer}
          />
          <Button
            text="Отправить"
            size="tiny"
            type="submit"
            addBtnClass="candidate-notes__btn"
            pic="up"
          />
        </form>
      )}
    </>
  );
};

export default CandidateNote;

CandidateNote.propTypes = {
  note: PropTypes.shape({
    time: PropTypes.number,
    text: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  addAnswer: PropTypes.func.isRequired,
};
