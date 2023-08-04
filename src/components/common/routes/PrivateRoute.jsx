import React from 'react';
import { Navigate } from 'react-router-dom';

import { Box, Show, Hide } from '@chakra-ui/react';
import { PropTypes } from 'prop-types';

import { LOGIN_PATH } from '../../../constants/pathnameConstant';
import useAuth from '../../../hooks/useAuth';
import Navbar from '../navbar/Navbar';
import Wrapper from '../wrapper/Wrapper.jsx';

function PrivateRoute({ children }) {
  const isAuthChecked = useAuth();

  if (isAuthChecked) {
    return (
      <>
        <Navbar />
          <Box h="100vh" display="flex" overflow="hidden">
            <Show above="md"></Show>
            <Box w="full" pt={4} px={0} overflowY="auto" bg="#FFFFFF">
              <Wrapper>{children}</Wrapper>
            </Box>
          </Box>
        <Hide above="md"></Hide>
      </>
    );
  }

  return <Navigate to={LOGIN_PATH} replace={true} />;
}

PrivateRoute.propTypes = {
  children: PropTypes.object.isRequired,
};

export default PrivateRoute;
