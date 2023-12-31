import './Candidate.scss';

import PropTypes from 'prop-types';
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import CandidateHeader from './CandidateHeader/CandidateHeader';
import CandidateNavigation from './CandidateNavigation/CandidateNavigation';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Widget from '../UI/Widget/Widget';
import CandidateNotesWidget from '../CandidateNotesWidget/CandidateNotesWidget';
import RightSideBar from '../UI/RightSideBarWith/RightSideBar';
import CandidateNotes from '../CandidateNotes/CandidateNotes';

import { deleteSpaces } from '../../utils/utils';

import { initialCandidateNotes } from '../../temp/initialCandidateNotes';

const Candidate = ({ candidate, onLikeClick, vacancyName }) => {
  const location = useLocation();
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [candidateNotes, setCandidateNotes] = useState(initialCandidateNotes);

  const [textInputAnswer, setTextInputAnswer] = useState('');

  const getTextFromInputAnswer = (data) => {
    setTextInputAnswer(data);
  };

  const handleNotesOPen = () => {
    setIsNotesOpen(true);
  };

  const handleCloseSideBar = () => {
    setIsNotesOpen(false);
  };

  const handleAddNotes = (notes) => {
    const notesWithoutSpaces = deleteSpaces(notes);

    if (notesWithoutSpaces !== '') {
      setCandidateNotes((prev) => [
        { text: notes, time: new Date().getTime(), answers: [] },
        ...prev,
      ]);
    }
  };

  // Добавление ответов к конкретной заметке, в качестве ID используется время создания заметки
  const handleAddAnswer = (e, id, text) => {
    e.preventDefault();

    const textWithoutSpaces = deleteSpaces(text);

    if (textWithoutSpaces !== '') {
      const newNotesIndex = candidateNotes.findIndex((el) => el.time === id);

      const newNotes = [...candidateNotes];

      newNotes[newNotesIndex].answers.push({
        text: textWithoutSpaces,
        time: new Date().getTime(),
      });

      setCandidateNotes(newNotes);
    }
  };

  return (
    <section className="candidate">
      {location.pathname.includes('vacancies') && (
        <Breadcrumbs
          locationTitle={candidate.name}
          secondLocationTitle={vacancyName}
        />
      )}
      <CandidateHeader candidate={candidate} onLikeClick={onLikeClick} />
      <CandidateNavigation />
      <div className="candidate__container">
        <div
          className={clsx(
            'candidate__scroll-container',
            location.pathname.includes('vacancies') &&
              'candidate__scroll-container_height_small'
          )}
        >
          <section className="candidate__content">
            <Outlet />
          </section>
          <section className="candidate__widgets-container">
            <Widget>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate consequuntur repellat error consequatur, optio delectus
              natus quis quo. Perferendis, ad animi repellat ullam modi veniam
              temporibus omnis enim repellendus illo!
            </Widget>
            <Widget>
              <CandidateNotesWidget
                openNotes={handleNotesOPen}
                candidateNotes={candidateNotes}
              />
            </Widget>
          </section>
        </div>
      </div>
      <RightSideBar
        header="Заметки"
        isOpen={isNotesOpen}
        closeSideBar={handleCloseSideBar}
      >
        <CandidateNotes
          candidateNotes={candidateNotes}
          addNotes={handleAddNotes}
          textInputAnswer={textInputAnswer}
          getTextFromInputAnswer={getTextFromInputAnswer}
          addAnswer={handleAddAnswer}
        />
      </RightSideBar>
    </section>
  );
};

export default Candidate;

Candidate.propTypes = {
  candidate: PropTypes.shape({ name: PropTypes.string }),
  onLikeClick: PropTypes.func,
  vacancyName: PropTypes.string,
};

Candidate.defaultProps = {
  candidate: undefined,
  onLikeClick: undefined,
  vacancyName: '',
};
