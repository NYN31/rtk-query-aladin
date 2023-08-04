import React from 'react';
import { useSelector } from 'react-redux';

import { useToast } from '@chakra-ui/react';

const CommonToastMessageWrapper = ({ children }) => {
  const toast = useToast();
  const commonState = useSelector(state => state.common);
  const { title, message: description, status, duration  } = commonState;

  return (
    <>
      {children}
      {toast({
        title,
        description,
        status,
        duration,
        isClosable: true,
      })}
    </>
  );
};

export default CommonToastMessageWrapper;
