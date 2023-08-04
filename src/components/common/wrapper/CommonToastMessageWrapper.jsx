import React from 'react';
import { useSelector } from 'react-redux';

import { useToast } from '@chakra-ui/react';
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

export default CommonToastMessageWrapper;
