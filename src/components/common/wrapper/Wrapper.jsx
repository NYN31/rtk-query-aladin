import React from 'react';

import { Box, Text } from '@chakra-ui/react';

const Wrapper = ({ children }) => {
  return (
    <Box mt="62px" mx={['8px', '8px', '16px', '16px']}>
      {children}
    </Box>
  );
};

export default Wrapper;
