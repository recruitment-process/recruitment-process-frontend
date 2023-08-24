import PropTypes from 'prop-types';

import './ActionSheet.scss';

const ActionSheet = ({ actionList }) => {
  <div className="action-sheet">
    <ul className="action-sheet__list">
      {actionList.map((action) => (
        <li key={action.id}>
          <button
            className={`action-sheet action-sheet_type_${action.type}`}
            onClick={action.action}
          >
            {action.name}
          </button>
        </li>
      ))}
    </ul>
  </div>;
};

ActionSheet.propTypes = {
  actionList: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  }).isRequired,
};

export default ActionSheet;
