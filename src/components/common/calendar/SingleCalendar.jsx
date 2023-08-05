import { useState } from 'react';

import { Box, Flex, Select, Table, Tbody, Td, Tr } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import {
  CALENDAR_TABLE_FIELD_PADDING,
  CALENDAR_TABLE_HEADING,
} from '../../../constants/commonConstants';
import { months, years } from '../../../helper/utils';
import CalendarTableHeading from '../heading/CalendarTableHeading';

const SELECT_FIELD_CSS = {
  bgColor: '#FFFFFF',
  w: '110px',
  h: '30px',
  pr: 0,
  border: '0px',
  fontSize: '14px',
  _focusVisible: {
    outline: 'none',
  },
};

const SingleCalendar = ({ results, selectedDate, setSelectDate }) => {
  const [day, setDay] = useState(new Date(selectedDate).getDate());
  const [month, setMonth] = useState(new Date(selectedDate).getMonth() + 1);
  const [year, setYear] = useState(new Date(selectedDate).getFullYear());

  const onClickDateChangeHandler = d => {
    if (d == 0) return;
    setDay(d);
    let makeStringDay = String(d).padStart(2, '0');
    let makeStringMonth = String(month).padStart(2, '0');
    setSelectDate(`${year}-${makeStringMonth}-${makeStringDay}`);
  };

  const monthOnChangeHandler = e => {
    setMonth(e.target.value);
    setSelectDate(`${year}-${String(e.target.value).padStart(2, '0')}-${day}`);
  };

  const yearOnChangeHandler = e => {
    setYear(Number(e.target.value));
    setSelectDate(`${e.target.value}-${month}-${day}`);
  };

  const getMonthAndYearSelectFields = () => {
    return (
      <Box pb="10px" outline="none">
        <Flex direction="row" justify="center">
          <Select
            {...SELECT_FIELD_CSS}
            value={month}
            name="month"
            onChange={e => monthOnChangeHandler(e)}
          >
            {months.map(({ enValue, key }) => (
              <option value={Number(key)} key={key}>
                {enValue}
              </option>
            ))}
          </Select>

          <Select
            {...SELECT_FIELD_CSS}
            value={year}
            name="year"
            onChange={yearOnChangeHandler}
          >
            {years().map(y => (
              <option value={y} key={y}>
                {y}
              </option>
            ))}
          </Select>
        </Flex>
      </Box>
    );
  };

  const getTableData = result => {
    return (
      <Td
        p={CALENDAR_TABLE_FIELD_PADDING}
        textAlign="center"
        border="none"
        onClick={() => onClickDateChangeHandler(result)}
        bgColor={
          Number(result) == Number(selectedDate.split('-')[2])
            ? '#0077C0'
            : null
        }
        color={
          Number(result) == Number(selectedDate.split('-')[2])
            ? '#FFFFFF'
            : null
        }
        cursor="pointer"
        borderRadius="50%"
        fontSize="12px"
      >
        {result === 0 ? '' : result}
      </Td>
    );
  };

  return (
    <Box px="20px" pb="5px">
      {getMonthAndYearSelectFields()}
      <br />
      <Table variant="simple">
        <CalendarTableHeading tableHeadings={CALENDAR_TABLE_HEADING} />
        <Tbody>
          {results.map((result, index) => (
            <Tr key={index}>
              {getTableData(result[0])}
              {getTableData(result[1])}
              {getTableData(result[2])}
              {getTableData(result[3])}
              {getTableData(result[4])}
              {getTableData(result[5])}
              {getTableData(result[6])}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

SingleCalendar.propTypes = {
  results: PropTypes.array.isRequired,
  selectedDate: PropTypes.string.isRequired,
  setSelectDate: PropTypes.func.isRequired,
};

export default SingleCalendar;
