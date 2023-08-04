import React, { useEffect } from 'react';

import { Box, useToast } from '@chakra-ui/react';

import GoogleLoginComponent from '../../components/auth/googleLogin/GoogleLoginComponent';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../features/auth/authApi';
import DataSpinner from '../../components/common/loader/DataSpinner';
import { EMPLOYEES_PATH, _ROOT } from '../../constants/pathnameConstant';
import { toastMessageObject } from '../../helper/toast-message-object';

const EmployeesListContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const [login, { data, isLoading, error: responseError }] = useLoginMutation();

  useEffect(() => {
    if (responseError?.data) {
      // toast({
      //   title: 'Login Failed',
      //   description: responseError.data.message,
      //   status: 'error',
      //   duration: 5000,
      //   isClosable: true,
      // });
      toast(
        toastMessageObject(
          'Login Failed',
          responseError?.data?.message,
          'error'
        )
      );
      // dispatch(
      //   setResponseMessage({
      //     title: 'Login Failed',
      //     description: responseError.data.message,
      //     status: 'error',
      //   })
      // );
      navigate(_ROOT);
    }

    if (data?.token) {
      toast(
        toastMessageObject(
          'Login Successful',
          data?.message,
          'success'
        )
      );

      navigate(EMPLOYEES_PATH);
    }
  }, [data, responseError, navigate]);

  const onSuccessHandler = credentialResponse => {
    login({ token: credentialResponse.credential });
  };

  const onErrorHanlder = () => {
    console.log('Error occured!');
    navigate(_ROOT);
  };

  if (isLoading) return <DataSpinner />;

  return (
    <Box h="100vh" overflow="hidden" p={0} m={0}>
      <GoogleLoginComponent
        onSuccessHandler={onSuccessHandler}
        onErrorHanlder={onErrorHanlder}
      />
    </Box>
  );
};

export default EmployeesListContainer;
