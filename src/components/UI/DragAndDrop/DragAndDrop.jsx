import PropTypes from 'prop-types';
import clsx from 'clsx';
import './DragAndDrop.scss';

// КОМПОНЕНТ И СТИЛИ НУЖНО ДОРАБОТАТЬ!!
const DragAndDrop = ({ stage }) => (
  <div
    className={clsx(
      'drag-drop',
      stage === 'default' && 'drag-drop_stage_active',
      stage === 'active' && 'drag-drop_stage_edit',
      stage === 'error' && 'drag-drop_stage_normal',
      stage === 'loading' && 'drag-drop_stage_empty'
    )}
  >
    <div className="drag-drop__text">
      <h4 className="drag-drop__title">
        <span className="drag-drop__title_highlight">Выберите файл</span> или
        перетяните его сюда
      </h4>
      <p className="drag-drop__sub-title">SVG, PNG, JPG (800*400px)</p>
    </div>
  </div>
);

DragAndDrop.propTypes = {
  stage: PropTypes.oneOf(['default', 'active', 'error', 'loading']).isRequired,
};

export default DragAndDrop;
