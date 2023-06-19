import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  Avatar,
  Box,
  Button,
  Circle,
  Flex,
  Spacer,
  Text,
  useMediaQuery,
  WrapItem,
} from '@chakra-ui/react';

import * as color from '../../../constants/colorConstants';
import { userLoggedOut } from '../../../features/auth/authSlice';
import EmailDecoder from '../../../helper/email-decoder';
import logout from '../../../helper/logout';

function Navbar() {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  const [username] = useState(EmailDecoder());
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onClickNavigateToLoginPage() {
    logout();
    dispatch(userLoggedOut());
    navigate('/');
  }

  const getBrandUI = () => {
    return (
      <Box pl={{ lg: 8, md: 6, sm: 4, base: 3 }} py={2}>
        <Flex direction="row">
          <Circle
            p={6}
            bgColor="#FFF"
            fontSize="37px"
            fontWeight="900"
            color="#0077C0"
            w="39px"
            h="45px"
          >
            A
          </Circle>
          <Flex direction="column" pl={4} color="#FFF" fontSize="18px">
            <Text fontWeight="700">Aladin</Text>
            <Text fontWeight="300" lineHeight="3">
              Admin Panel
            </Text>
          </Flex>
        </Flex>
      </Box>
    );
  };

  const getRigthSidePortions = () => {
    return (
      <Box mr={{ lg: 8, md: 6, sm: 4, base: 3 }}>
        <Flex pt="14px" direction="row" color="#FFF">
          <Box>
            <Flex direction="row">
              {isLargerThan600 ? (
                <Text as="b" fontSize="14px" pt="10px">
                  {username}
                </Text>
              ) : (
                <></>
              )}

              <WrapItem px={{ lg: 6, base: 4 }}>
                <Avatar
                  w={{ lg: '40px', base: '36px' }}
                  h={{ lg: '40px', base: '36px' }}
                  //src={AVATAR_BIT_LY_URL}
                />
              </WrapItem>
            </Flex>
          </Box>

          <Button
            py={0}
            color="#FFFFFF"
            bgColor={color.APP_PRIMARY_COLOR}
            border="1px solid"
            borderColor="#FFFFFF"
            borderRadius="0px"
            _hover={{ bgColor: `${color.APP_PRIMARY_COLOR} !important` }}
            onClick={onClickNavigateToLoginPage}
          >
            Logout
          </Button>
        </Flex>
      </Box>
    );
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      px={0}
      w="100%"
      h="64px"
      bgColor={color.APP_PRIMARY_COLOR}
      zIndex={200}
    >
      <Flex>
        {getBrandUI()}
        <Spacer />
        {getRigthSidePortions()}
      </Flex>
    </Box>
  );
}

export default Navbar;
