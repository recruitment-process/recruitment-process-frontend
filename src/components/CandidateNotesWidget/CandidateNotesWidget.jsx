import './CandidateNotesWidget.scss';

import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import NotesButton from '../UI/NotesButton/NotesButton';

import { convertAnswers, convertNumberToDate } from '../../utils/utils';

const CandidateNotesWidget = (props) => {
  const { openNotes, candidateNotes } = props;
  const [notesCounter, setNotesCounter] = useState(0);

  useEffect(() => {
    setNotesCounter(candidateNotes.length);
  }, [candidateNotes]);

  const handleAddBtnClick = () => {
    openNotes();
  };

  const handleAddAnswerBtnClick = () => {
    openNotes();
  };

  return (
    <section className="candidate-notes-widget">
      <div className="candidate-notes-widget__header-container">
        <h4 className="candidate-notes-widget__header">
          Заметки ({notesCounter})
        </h4>
        <button
          className="candidate-notes-widget__add-btn"
          aria-label="кнопка добавить заметку"
          onClick={handleAddBtnClick}
        />
      </div>
      <p className="candidate-notes-widget__time-of-creation">
        {convertNumberToDate(candidateNotes[0].time)}
      </p>
      <p className="candidate-notes-widget__text">{candidateNotes[0].text}</p>
      <ul className="candidate-notes-widget__action-btns">
        <li>
          <NotesButton
            text={convertAnswers(candidateNotes[0].answers?.length)}
            onClick={handleAddBtnClick}
          />
        </li>
        <li>
          <NotesButton text="Ответить" onClick={handleAddAnswerBtnClick} />
        </li>
      </ul>
    </section>
  );
};

export default CandidateNotesWidget;

CandidateNotesWidget.propTypes = {
  openNotes: PropTypes.func.isRequired,
  candidateNotes: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.number,
      text: PropTypes.string,
      answers: PropTypes.arrayOf(PropTypes.shape({})),
    })
  ).isRequired,
};
