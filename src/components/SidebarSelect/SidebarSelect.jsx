import PropTypes from 'prop-types';

import RightSideBar from '../UI/RightSideBarWith/RightSideBar';
import AddAndEditStage from '../Sidebar/AddAndEditStage/AddAndEditStage';

import { TITLES } from '../../utils/constants';
import DeleteStage from '../Sidebar/DeleteStage/DeleteStage';

const SidebarSelect = ({ header, isOpen, closeSideBar, actionItem }) => {
  const selectSidebar = () => {
    switch (header) {
      case TITLES.curtain.addStage:
      case TITLES.curtain.addSubstage:
      case TITLES.curtain.editStage:
      case TITLES.curtain.editSubstage:
        return <AddAndEditStage header={header} actionItem={actionItem} />;
      case TITLES.curtain.deleteStage:
      case TITLES.curtain.deleteSubstage:
        return <DeleteStage header={header} actionItem={actionItem} />;
      default:
        return null;
    }
  };

  return (
    <RightSideBar header={header} isOpen={isOpen} closeSideBar={closeSideBar}>
      {selectSidebar()}
    </RightSideBar>
  );
};

SidebarSelect.propTypes = {
  header: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  closeSideBar: PropTypes.func,
  actionItem: PropTypes.shape({}),
};

SidebarSelect.defaultProps = {
  isOpen: false,
  closeSideBar: null,
  actionItem: null,
};

export default SidebarSelect;
