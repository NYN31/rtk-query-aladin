import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const FieldWraper = ({ children, errors, labelText, htmlFor }) => {
  return (
    <>
      <FormControl pt={2}>
        <FormLabel fontSize="14px" htmlFor={htmlFor} color="#464646">
          {labelText}
        </FormLabel>
        <Flex direction="column" width="98%">
          {children}
          <Flex>
            <FormErrorMessage>{errors && errors.message}</FormErrorMessage>
          </Flex>
        </Flex>
      </FormControl>
    </>
  );
};

FieldWraper.propTypes = {
  children: PropTypes.object.isRequired,
  errors: PropTypes.object,
  labelText: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

export default FieldWraper;
