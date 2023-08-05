import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ element: Component, ...props }) =>
  props.loggedIn ? <Component {...props} /> : <Navigate to="/login" replace />;

ProtectedRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
