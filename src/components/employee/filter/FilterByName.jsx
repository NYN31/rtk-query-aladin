import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Box, Flex, Image, Input } from '@chakra-ui/react';

import searchIcon from '../../../assets/icons/searchIcon.svg';
import {
  useGetEmployeesByNameQuery,
  useGetEmployeesQuery,
} from '../../../features/employees/employeesApi';
import {
  setEmployees,
  setFilterEnable,
  setFilteredEmployees,
} from '../../../features/employees/employeesSlice';

const FilterByName = ({ page, setPageNo, searchName, setSearchName }) => {
  const dispatch = useDispatch();
  const [filterByNameSkipping, setFilterByNameSkipping] = useState(false);
  const [employeesSkipping, setEmployeesSkipping] = useState(true);
  const {
    data: filteredEmployeesResult,
    isLoading: filteredEmployeesLoading,
    error: filteredEmployeesResponseError,
  } = useGetEmployeesByNameQuery(
    { name: searchName, page, size: 10 },
    {
      skip: !filterByNameSkipping,
    }
  );
  const { data: employeesResult } = useGetEmployeesQuery(
    { page, size: 10 },
    { skip: !employeesSkipping }
  );

  useEffect(() => {
    if (searchName.length >= 1) {
      dispatch(setFilterEnable(true));
      setFilterByNameSkipping(true);
      setEmployeesSkipping(false);

      if (filteredEmployeesResult)
        dispatch(setFilteredEmployees(filteredEmployeesResult));
    } else {
      dispatch(setFilterEnable(false));
      setFilterByNameSkipping(false);
      setEmployeesSkipping(true);

      if (employeesResult) dispatch(setEmployees(employeesResult));
    }
  }, [searchName, page, employeesResult, filteredEmployeesResult]);

  if (filteredEmployeesLoading) return null;
  if (filteredEmployeesResponseError) {
    return null;
  }

  return (
    <Flex direction={['column', 'row']} my="16px">
      <Box align="right" ml={2} fontSize="16px" fontWeight="400" my={0}>
        <Flex direction="row" cursor="pointer">
          <Image mr={2} src={searchIcon} />
          <Input
            p={1}
            w={
              searchName && searchName.length > 0
                ? {
                    lg: '200px',
                    md: '150px',
                    sm: '130px',
                    base: '130px',
                  }
                : '70px'
            }
            h="25px"
            border="0px"
            placeholder="Search"
            _placeholder={{
              color: '#828282 !important',
            }}
            _focusVisible={{
              borderColor: '#DDDDDD !important',
            }}
            value={searchName}
            onChange={e => setSearchName(e.target.value)}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default FilterByName;
