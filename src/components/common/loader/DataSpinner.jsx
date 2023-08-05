import { Flex, Spinner } from '@chakra-ui/react';

function DataSpinner() {
  return (
    <Flex
      width="100%"
      height="100vh"
      justify="center"
      align="center"
      mt="-50px"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  );
}

export default DataSpinner;
