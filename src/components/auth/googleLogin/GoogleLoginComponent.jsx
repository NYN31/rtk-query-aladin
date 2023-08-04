import React from 'react';

import { Box, Circle, Flex, Text } from '@chakra-ui/react';
import { GoogleLogin } from '@react-oauth/google';

const GoogleLoginComponent = ({ onSuccessHandler, onErrorHanlder }) => {
  return (
    <Flex
      bgColor="#0077C0"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box bg="#FFF" w={{ lg: '450px', md: '450px', base: '95%' }} h="400px">
        <Box direction="column" align="center" py={50} fontSize="24px">
          <Circle
            py={6}
            bgColor="#0077C0"
            fontSize="81px"
            fontWeight="900"
            color="#FFFFFF"
            w="85px"
            h="85px"
            align="center"
          >
            A
          </Circle>
          <Text color="#333333">Aladin</Text>

          <Text color="#333333" pt="30px" fontSize={['18px', '20px', '20px']}>
            {'Sign in through google'}
          </Text>

          <Flex
            mt="10px"
            direction="column"
            justifyContent="center"
            align="center"
          >
            <GoogleLogin
              onSuccess={onSuccessHandler}
              onError={onErrorHanlder}
            />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default GoogleLoginComponent;
