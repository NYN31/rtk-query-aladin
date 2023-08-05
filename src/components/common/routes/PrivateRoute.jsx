import { Navigate } from 'react-router-dom';

import { Box } from '@chakra-ui/react';
import { PropTypes } from 'prop-types';

import { LOGIN_PATH } from '../../../constants/pathnameConstant';
import useAuth from '../../../hooks/useAuth';
import Wrapper from '../wrapper/Wrapper.jsx';
import Navbar from '../bar/Navbar';
import SideBar from '../bar/Sidebar';

function PrivateRoute({ children }) {
  const isAuthChecked = useAuth();

  if (isAuthChecked) {
    return (
      <>
        <Navbar />
        <Box h="100vh" overflow="hidden">
          <SideBar />
          <Box w="full" pt={4} overflowY="auto" bg="#FFFFFF" pl="250px">
            <Wrapper>{children}</Wrapper>
          </Box>
        </Box>
      </>
    );
  }

  return <Navigate to={LOGIN_PATH} replace={true} />;
}

PrivateRoute.propTypes = {
  children: PropTypes.object.isRequired,
};

export default PrivateRoute;
