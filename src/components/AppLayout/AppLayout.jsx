import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import './AppLayout.scss';

import Header from '../Header/Header';
import NavMenu from '../NavMenu/NavMenu';

const AppLayout = ({ user, onHeaderSearch }) => (
  <>
    <Header user={user} onSearch={onHeaderSearch} />
    <main className="app-layout">
      <NavMenu />
      <Outlet />
    </main>
  </>
);

AppLayout.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    avatar: PropTypes.string,
  }),
  onHeaderSearch: PropTypes.func,
};

AppLayout.defaultProps = {
  user: null,
  onHeaderSearch: null,
};

export default AppLayout;
