import React from 'react';

import { Thead, Tr, Th } from '@chakra-ui/react';

import { EMPLOYEES_TABLE_FIELD_PADDING } from '../../../constants/commonConstants';

const CommonTableHeading = ({ tableHeadings }) => {
  return (
    <Thead bgColor="#0077C0">
      <Tr>
        {tableHeadings.map((heading, index) => {
          return (
            <Th
              key={index}
              p={EMPLOYEES_TABLE_FIELD_PADDING}
              color="#FFFFFF"
              textTransform="capitalize"
              borderTopLeftRadius={index === 0 && '4px'}
              borderTopRightRadius={index === tableHeadings.length - 1 && '4px'}
            >
              {heading}
            </Th>
          );
        })}
      </Tr>
    </Thead>
  );
};

export default CommonTableHeading;
