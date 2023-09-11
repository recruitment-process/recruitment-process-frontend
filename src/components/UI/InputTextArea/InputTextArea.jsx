import './InputTextArea.scss';
import clsx from 'clsx';

import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';

const InputTextArea = (props) => {
  const { text, textLimit, getTextFromInput } = props;

  const [isTextLimitExceeded, SetIsTextLimitExceeded] = useState(false);

  useEffect(() => {
    if (text.length === textLimit) {
      SetIsTextLimitExceeded(true);
    } else {
      SetIsTextLimitExceeded(false);
    }
  }, [text, textLimit]);

  return (
    <>
      <textarea
        className={clsx(
          'input-text-area',
          isTextLimitExceeded && 'input-text-area_error'
        )}
        placeholder="Напишите комментарий"
        maxLength={textLimit}
        onChange={(e) => {
          getTextFromInput(e.target.value);
        }}
        value={text}
      />
      <p
        className={clsx(
          'input-text-area__text-counter',
          isTextLimitExceeded && 'input-text-area__text-counter_error'
        )}
      >
        {text.length}/{textLimit}
      </p>
    </>
  );
};

InputTextArea.propTypes = {
  text: PropTypes.string,
  textLimit: PropTypes.number,
  getTextFromInput: PropTypes.func,
};

InputTextArea.defaultProps = {
  text: '',
  textLimit: 200,
  getTextFromInput: '',
};

export default InputTextArea;
