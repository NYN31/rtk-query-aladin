import { Th, Thead, Tr } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { CALENDAR_TABLE_FIELD_PADDING } from '../../../constants/commonConstants';

const CalendarTableHeading = ({ tableHeadings }) => {
  return (
    <Thead>
      <Tr>
        {tableHeadings.map((heading, index) => {
          return (
            <Th
              key={index}
              p={CALENDAR_TABLE_FIELD_PADDING}
              m={index === 0 && CALENDAR_TABLE_FIELD_PADDING}
              textAlign="center"
              border="none"
            >
              {heading}
            </Th>
          );
        })}
      </Tr>
    </Thead>
  );
};

CalendarTableHeading.propTypes = {
  tableHeadings: PropTypes.array.isRequired,
};

export default CalendarTableHeading;
