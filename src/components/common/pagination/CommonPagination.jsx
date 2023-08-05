import {
  Pagination,
  PaginationContainer,
  PaginationNext,
  PaginationPage,
  PaginationPageGroup,
  PaginationPrevious,
  PaginationSeparator,
  usePagination,
} from '@ajna/pagination';
import { Box, Flex, Spacer, Text, useMediaQuery } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function CommonPagination({ results, setPageNo }) {
  const [isLargerThan700] = useMediaQuery('(min-width: 700px)');
  const resultsLength = results.content.length;

  let totalPages = 0;
  if (results.totalPages !== null) totalPages = results.totalPages;
  const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
    pagesCount: totalPages,
    limits: {
      outer: 2,
      inner: 1,
    },
    initialState: { currentPage: 1 },
  });

  const handlePageChange = nextPage => {
    setCurrentPage(nextPage);
    setPageNo(nextPage - 1);
  };

  return (
    <Flex
      pr="10px"
      bgColor={resultsLength & 1 ? '#F2F2F2' : '#FFFFFF'}
      h="50px"
      py={1}
      mb={{ lg: 0, md: 0, base: 16 }}
      borderBottomRadius="6px"
    >
      <Spacer />
      <Box>
        <Pagination
          pagesCount={pagesCount}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        >
          <PaginationContainer align="center" justify="space-between" w="full">
            <PaginationPrevious
              mx={{ lg: 4, base: 2 }}
              bg={resultsLength & 1 ? '#F2F2F2' : '#FFFFFF'}
              color="#4F4F4F"
              fontSize="14px"
            >
              <Text>Previous</Text>
            </PaginationPrevious>
            {isLargerThan700 && (
              <PaginationPageGroup
                align="center"
                separator={
                  <PaginationSeparator
                    fontSize="sm"
                    w={5}
                    mx={0}
                    jumpSize={11}
                  />
                }
              >
                {pages.map(page => (
                  <PaginationPage
                    px={3}
                    minW={10}
                    bg={resultsLength & 1 ? 'F2F2F2' : '#FFFFFF'}
                    color="#4F4F4F"
                    key={`pagination_page_${page}`}
                    page={page}
                    fontSize="14px"
                    _hover={{
                      bg: 'blackAlpha.300',
                    }}
                    _current={{
                      bg: '#0077C0',
                      fontSize: 'sm',
                      textColor: '#FFFFFF',
                      w: 0,
                    }}
                  />
                ))}
              </PaginationPageGroup>
            )}
            <PaginationNext
              mx={{ lg: 4, base: 2 }}
              bg={resultsLength & 1 ? 'F2F2F2' : '#FFFFFF'}
              color="#4F4F4F"
              fontSize="14px"
            >
              <Text>Next</Text>
            </PaginationNext>
          </PaginationContainer>
        </Pagination>
      </Box>
    </Flex>
  );
}

CommonPagination.propTypes = {
  results: PropTypes.object.isRequired,
  setPageNo: PropTypes.func.isRequired,
};

export default CommonPagination;
