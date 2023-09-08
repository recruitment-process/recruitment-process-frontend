import './CandidateNotes.scss';

import { useState } from 'react';

import PropTypes from 'prop-types';

import Button from '../UI/Button/Button';
import InputTextArea from '../UI/InputTextArea/InputTextArea';
import CandidateNote from '../CandidateNote/CandidateNote';

const CandidateNotes = (props) => {
  const { candidateNotes, addNotes, addAnswer } = props;
  const [textFromInput, setTextFromInput] = useState('');

  const handleAddNotes = (e) => {
    e.preventDefault();

    if (textFromInput !== null && textFromInput !== '') {
      addNotes(textFromInput);
      setTextFromInput('');
    }
  };

  const handleGetTextFromInput = (text) => {
    setTextFromInput(text);
  };

  const notesList = candidateNotes.map((note) => (
    <CandidateNote note={note} key={note.time} addAnswer={addAnswer} />
  ));

  return (
    <section className="candidate-notes">
      <form onSubmit={handleAddNotes}>
        <InputTextArea
          getTextFromInput={handleGetTextFromInput}
          text={textFromInput}
        />
        <Button
          text="Отправить"
          size="tiny"
          type="submit"
          addBtnClass="candidate-notes__btn"
          pic="up"
        />
      </form>
      {notesList}
    </section>
  );
};

export default CandidateNotes;

CandidateNotes.propTypes = {
  candidateNotes: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.number,
      text: PropTypes.string,
      answers: PropTypes.arrayOf(PropTypes.shape({})),
    })
  ).isRequired,
  addNotes: PropTypes.func.isRequired,
  addAnswer: PropTypes.func.isRequired,
};
