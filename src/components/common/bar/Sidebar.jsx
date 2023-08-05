import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  List,
  ListItem,
  Spacer,
  Stack,
} from '@chakra-ui/react';

import { SIDEBAR_DATA } from '../../../constants/sidebarConstants';

const sideBarListCssProperty = {
  margin: '4px',
  py: '4px',
  px: '4px',
  cursor: 'pointer',
  h: '40px',
  borderRadius: '4px',
  color: '#000',
  _hover: {
    bg: '#D9D9D9 !important',
    color: '#000 !important',
    borderRadius: '4px',
  },
};

const SideBar = () => {
  const navigate = useNavigate();

  const getListItem = (path, icon, title, label) => {
    const isPathnameEqualLabel =
      label.toLowerCase() === location.pathname.toLowerCase();
    const bgClr = isPathnameEqualLabel ? '#D9D9D9' : '#F2F2F2';
    const txtClr = isPathnameEqualLabel ? '#0077C0' : '#000000';

    return (
      <ListItem
        {...sideBarListCssProperty}
        bg={bgClr}
        color={txtClr}
        onClick={() => navigate(path)}
      >
        <Stack align="left" direction="row">
          <Flex w="24px">{icon}</Flex>
          <Flex pt="4px">
            <span>{title}</span>
          </Flex>
        </Stack>
      </ListItem>
    );
  };

  return (
    <Flex
      height="100vh"
      width="250px"
      direction="column"
      position="fixed"
      borderRightWidth="1px"
      flexShrink={0}
      flexGrow={0}
      bg="#F2F2F2"
      pt="100px"
      pb={6}
      overflowY="auto"
      overflowX="hidden"
    >
      <IconContext.Provider value={{ color: '#000' }}>
        <List mx="4px">
          {SIDEBAR_DATA.map((item, index) => {
            if (item.hasAccordion) {
              return (
                <Accordion key={index} allowToggle={true}>
                  <AccordionItem border="0px">
                    <AccordionButton>
                      <Box color="#000000">{item.title}</Box>
                      <Spacer />
                      <AccordionIcon color="#000000" />
                    </AccordionButton>
                    <AccordionPanel pt={0} pb={0}>
                      {item.hasAccordion.map((accordion, idx) => {
                        return (
                          <Box key={idx}>
                            {getListItem(
                              accordion.path,
                              accordion.icon,
                              accordion.title,
                              accordion.label
                            )}
                          </Box>
                        );
                      })}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              );
            }

            return (
              <Box key={index}>
                {getListItem(item.path, item.icon, item.title, item.label)}
              </Box>
            );
          })}
        </List>
      </IconContext.Provider>
    </Flex>
  );
};

export default SideBar;
