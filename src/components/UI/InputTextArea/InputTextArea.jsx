import './InputTextArea.scss';

const InputTextArea = () => (
  <textarea
    className="input-text-area"
    placeholder="Напишите комментарий"
    maxLength={180}
  />
);

export default InputTextArea;
