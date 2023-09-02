import './CandidateNotesWidget.scss';

import PropTypes from 'prop-types';

const CandidateNotesWidget = (props) => {
  const { openNotes } = props;

  const handleAddbtnClick = () => {
    openNotes();
  };

  return (
    <section className="candidate-notes-widget">
      <div className="candidate-notes-widget__header-container">
        <h4 className="candidate-notes-widget__header">Заметки (4)</h4>
        <button
          className="candidate-notes-widget__add-btn"
          aria-label="кнопка добавить заметку"
          onClick={handleAddbtnClick}
        />
      </div>

      <p className="candidate-notes-widget__time-of-creation"> вчера, 14:38</p>
      <p className="candidate-notes-widget__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vero
        explicabo ipsum officia ad, voluptates officiis id asperiores alias
        mollitia maiores modi eligendi totam commodi, qui provident
        reprehenderit soluta accusantium.
      </p>
      <nav>
        <ul className="candidate-notes-widget__action-btns">
          <li>
            <button
              className="candidate-notes-widget__action-btn"
              onClick={handleAddbtnClick}
            >
              2 Ответа
            </button>
          </li>
          <li>
            <button className="candidate-notes-widget__action-btn">
              Ответить
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default CandidateNotesWidget;

CandidateNotesWidget.propTypes = {
  openNotes: PropTypes.func.isRequired,
};
