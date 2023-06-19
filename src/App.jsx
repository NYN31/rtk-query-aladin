import { Route, Routes } from 'react-router-dom';

import PrivateRoute from './components/common/routes/PrivateRoute';
import PublicRoute from './components/common/routes/PublicRoute';
import * as pathname from './constants/pathnameConstant';
import useAuthCheck from './hooks/useAuthCheck';
import AuthContainer from './pages/auth/AuthContainer';
import EmployeesList from './pages/employee/EmployeesList.jsx';

function App() {
  const isAuthChecked = useAuthCheck();

  return (
    <Routes>
      <Route
        exact
        path={pathname._ROOT}
        element={
          <PublicRoute>
            <AuthContainer />
          </PublicRoute>
        }
      />
      <Route
        exact
        path={pathname.LOGIN_PATH}
        element={
          <PublicRoute>
            <AuthContainer />
          </PublicRoute>
        }
      />
      <Route
        path={pathname.EMPLOYEES_PATH}
        element={
          <PrivateRoute>
            <EmployeesList />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
