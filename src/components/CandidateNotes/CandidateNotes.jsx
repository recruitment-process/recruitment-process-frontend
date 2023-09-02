import Button from '../UI/Button/Button';
import InputTextArea from '../UI/InputTextArea/InputTextArea';
import './CandidateNotes.scss';

// import PropTypes from 'prop-types';

const CandidateNotes = () => {
  // const { openNotes } = props;
  console.log('123');

  return (
    <section className="candidate-notes">
      <form>
        <InputTextArea />
        <Button
          text="Отправить"
          size="small"
          type="submit"
          addBtnClass="candidate-notes__btn"
          pic="up"
        />
      </form>
      <p className="candidate-notes__time-of-creation"> вчера, 14:38</p>
      <p className="candidate-notes__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vero
        explicabo ipsum officia ad, voluptates officiis id asperiores alias
        mollitia maiores modi eligendi totam commodi, qui provident
        reprehenderit soluta accusantium.
      </p>
    </section>
  );
};

export default CandidateNotes;

// CandidateNotesWidget.propTypes = {
//   openNotes: PropTypes.func.isRequired,
// };

// text: PropTypes.string,
// disabled: PropTypes.bool,
// size: PropTypes.oneOf(['normal', 'small', 'flexible']),
// type: PropTypes.oneOf(['button', 'submit', 'reset']),
// pic: PropTypes.oneOf(['play', 'plus', 'none']),
// onClick: PropTypes.func,
// addBtnClass: PropTypes.string,
