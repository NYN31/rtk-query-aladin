import { Navigate } from 'react-router-dom';

import { PropTypes } from 'prop-types';

import { EMPLOYEES_PATH } from '../../../constants/pathnameConstant';
import useAuth from '../../../hooks/useAuth';

function PublicRoute({ children }) {
  const isAuthChecked = useAuth();

  return !isAuthChecked ? (
    children
  ) : (
    <Navigate to={EMPLOYEES_PATH} replace={true} />
  );
}

PublicRoute.propTypes = {
  children: PropTypes.object.isRequired,
};

export default PublicRoute;
