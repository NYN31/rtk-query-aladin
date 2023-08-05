import { Box, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Whitebar = ({ width, border }) => {
  return (
    <Flex bg="#0077C0" pb={2} justify="center">
      <Box
        w={width}
        bgColor="#FFFFFF"
        borderRadius="10px"
        border={`${border} solid #FFFFFF`}
      ></Box>
    </Flex>
  );
};

Whitebar.propTypes = {
  width: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
};

export default Whitebar;
