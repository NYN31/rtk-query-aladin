import React from 'react';

import { Box } from '@chakra-ui/react';

import GoogleLoginComponent from '../../components/auth/googleLogin/GoogleLoginComponent';

const AuthContainer = () => {
  return (
    <Box h="100vh" overflow='hidden' p={0} m={0}>
      <GoogleLoginComponent />
    </Box>
  );
};

export default AuthContainer;
