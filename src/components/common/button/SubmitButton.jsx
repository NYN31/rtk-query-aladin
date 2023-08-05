import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const SubmitButton = ({ text, width, height, isDisabled }) => {
  return (
    <Button
      w={width}
      h={height}
      fontSize="12px"
      bgColor="#0077C0"
      color="#FFFFFF"
      type="submit"
      isDisabled={isDisabled}
      _focus={{
        borderColor: 'none',
      }}
      _hover={{ color: 'white', bgColor: '#0077C0' }}
      _disabled={{
        cursor: 'not-allowed',
        bgColor: '#DDDDDD !important',
        color: '#9A9A9A !important',
      }}
    >
      {text}
    </Button>
  );
};

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default SubmitButton;
