import { Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const CancelButton = ({ text, cancelHandler }) => {
  return (
    <Text cursor="pointer" onClick={cancelHandler}>
      {text}
    </Text>
  );
};

CancelButton.propTypes = {
  text: PropTypes.string.isRequired,
  cancelHandler: PropTypes.func.isRequired,
};

export default CancelButton;
