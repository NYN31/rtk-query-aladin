import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Wrapper = ({ children }) => {
  return (
    <Box mt="62px" mx={['8px', '8px', '16px', '16px']}>
      {children}
    </Box>
  );
};

Wrapper.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Wrapper;
