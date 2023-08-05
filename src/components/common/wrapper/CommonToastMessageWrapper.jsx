import { useSelector } from 'react-redux';

import { useToast } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { toastMessageObject } from '../../../helper/toast-message-object';

const CommonToastMessageWrapper = ({ children }) => {
  const toast = useToast();
  const common = useSelector(state => state.common);
  const { title, description, status, duration } = common;

  return (
    <>
      {children}
      {toast(toastMessageObject(title, description, status, duration))}
    </>
  );
};

CommonToastMessageWrapper.propTypes = {
  children: PropTypes.object.isRequired,
};

export default CommonToastMessageWrapper;
