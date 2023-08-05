import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Box, Flex, Image, Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import searchIcon from '../../../assets/icons/searchIcon.svg';
import { employeesApi } from '../../../features/employees/employeesApi';
import {
  setFilteredEmployees,
  setFilterEnable,
} from '../../../features/employees/employeesSlice';

const INPUT_WIDTH = {
  lg: '200px',
  md: '150px',
  sm: '130px',
  base: '130px',
};

const FilterByName = ({ page }) => {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState('');

  const employeesSearchByName = name => {
    if (name.length < 1) {
      dispatch(setFilterEnable(false));
      return;
    }
    dispatch(
      employeesApi.endpoints.getEmployeesByName.initiate({
        name: name,
        page,
        size: 10,
      })
    )
      .unwrap()
      .then(res => {
        dispatch(setFilterEnable(true));
        dispatch(setFilteredEmployees(res));
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    employeesSearchByName(searchName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <Flex direction={['column', 'row']} my="16px">
      <Box align="right" ml={2} fontSize="16px" fontWeight="400" my={0}>
        <Flex direction="row" cursor="pointer">
          <Image mr={2} src={searchIcon} />
          <Input
            p={1}
            w={searchName?.length > 0 ? INPUT_WIDTH : '70px'}
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
            onChange={e => {
              setSearchName(e.target.value);
              employeesSearchByName(e.target.value);
            }}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

FilterByName.propTypes = {
  page: PropTypes.number.isRequired,
};

export default FilterByName;
