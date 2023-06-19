import React from 'react';

import { Box, Flex, Table, Tbody } from '@chakra-ui/react';

import { EMPLOYEES_TABLE_HEADINGS } from '../../../../constants/employeesConstants.js';
import EmployeesTableHeading from '../../../common/heading/CommonTableHeading.jsx';
import EmployeesTableRows from '../tableRows/EmployeesTableRows.jsx';

const EmployeesTable = ({ results }) => {
  return (
    <Flex mt="8px" direction="column" fontSize={{ lg: '12px', base: '12px' }}>
      <Box overflow="hidden">
        <Box overflow="auto">
          <Table variant="simple" justify="center" align="center">
            <EmployeesTableHeading tableHeadings={EMPLOYEES_TABLE_HEADINGS} />
            <Tbody>
              {results.content.map((result, index) => {
                return (
                  <EmployeesTableRows
                    key={index}
                    result={result}
                    index={index}
                  />
                );
              })}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Flex>
  );
};

export default EmployeesTable;
