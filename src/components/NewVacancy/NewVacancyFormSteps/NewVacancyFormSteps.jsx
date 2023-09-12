import PropTypes from 'prop-types';
import clsx from 'clsx';

import './NewVacancyFormSteps.scss';

const NewVacancyFormSteps = (props) => {
  const { step, onStepChange, formSteps } = props;

  const handleStepClick = (selectedStep) => onStepChange(selectedStep);

  const stepsList = formSteps.map((obj) => (
    <li key={obj.sortStep} className="form-steps__step">
      <button
        className={clsx(
          'form-steps__step-button',
          step === obj.sortStep && 'form-steps__step-button_active'
        )}
        onClick={() => handleStepClick(obj.sortStep)}
      >
        {obj.name}
      </button>
    </li>
  ));

  return (
    <nav className="form-steps__nav">
      <ul className="form-steps__steps">{stepsList} </ul>
    </nav>
  );
};

export default NewVacancyFormSteps;

NewVacancyFormSteps.propTypes = {
  step: PropTypes.number.isRequired,
  onStepChange: PropTypes.func.isRequired,
  formSteps: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
