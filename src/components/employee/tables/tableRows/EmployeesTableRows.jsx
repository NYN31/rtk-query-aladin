import { Td, Text, Tr } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { EMPLOYEES_TABLE_FIELD_PADDING } from '../../../../constants/commonConstants.js';
import {
  EMPLOYEE_DESIGNATION_CHARACTER_LIMIT,
  EMPLOYEE_NAME_CHARACTER_LIMIT,
} from '../../../../constants/employeesConstants.js';
import getShortFormText from '../../../../helper/get-short-form-text.js';
import { getHumanReadableDate } from '../../../../helper/utils.js';
import CommonTooltip from '../../../common/chakra/CommonTooltip.jsx';

const NAME_WIDTH = ['200px', '210px', '220px'];
const EMAIL_WIDTH = '200px';
const EMPLOYEE_ID_WIDTH = ['130px', '140px'];
const JOINING_DATE_WIDTH = '140px';
const DESIGNATION_WIDTH = ['240px', '250px'];
const STATUS_WIDTH = '110px';

const EmployeesTableRows = ({ result, index }) => {
  return (
    <Tr
      key={result.employeeId}
      bgColor={index & 1 ? '#F2F2F2' : '#FFFFFF'}
      onClick={() => {}}
      cursor="pointer"
      _hover={{
        bg: '#0077C0 !important',
        color: '#FFFFFF',
      }}
    >
      <Td p={EMPLOYEES_TABLE_FIELD_PADDING} minW={NAME_WIDTH} w={NAME_WIDTH}>
        {result.name === null || result.name.length === 0 ? (
          <Text>{''}</Text>
        ) : (
          <CommonTooltip
            label={result.name}
            disabled={result.name.length <= EMPLOYEE_NAME_CHARACTER_LIMIT}
          >
            {getShortFormText(result.name, EMPLOYEE_NAME_CHARACTER_LIMIT)}
          </CommonTooltip>
        )}
      </Td>
      <Td p={EMPLOYEES_TABLE_FIELD_PADDING} minW={EMAIL_WIDTH} w={EMAIL_WIDTH}>
        {result.email}
      </Td>
      <Td
        p={EMPLOYEES_TABLE_FIELD_PADDING}
        minW={EMPLOYEE_ID_WIDTH}
        w={EMPLOYEE_ID_WIDTH}
      >
        {result.employeeId}
      </Td>
      <Td
        p={EMPLOYEES_TABLE_FIELD_PADDING}
        minW={JOINING_DATE_WIDTH}
        w={JOINING_DATE_WIDTH}
      >
        {getHumanReadableDate(result.joiningDate)}
      </Td>
      <Td
        p={EMPLOYEES_TABLE_FIELD_PADDING}
        minW={DESIGNATION_WIDTH}
        w={DESIGNATION_WIDTH}
      >
        <CommonTooltip
          label={result.designation}
          disabled={
            result.designation.trim().length <=
            EMPLOYEE_DESIGNATION_CHARACTER_LIMIT
          }
        >
          {getShortFormText(
            result.designation,
            EMPLOYEE_DESIGNATION_CHARACTER_LIMIT
          )}
        </CommonTooltip>
      </Td>
      <Td
        p={EMPLOYEES_TABLE_FIELD_PADDING}
        minW={STATUS_WIDTH}
        w={STATUS_WIDTH}
      >
        {result.status}
      </Td>
    </Tr>
  );
};

EmployeesTableRows.propTypes = {
  result: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default EmployeesTableRows;
