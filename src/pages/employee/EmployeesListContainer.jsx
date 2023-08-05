import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Flex, Spacer } from '@chakra-ui/react';

import BreadCrumb from '../../components/common/breadcrumb/BreadCrumb';
import DataSpinner from '../../components/common/loader/DataSpinner';
import PageTitle from '../../components/common/pageTitle/PageTitle';
import CommonPagination from '../../components/common/pagination/CommonPagination';
import FilterByName from '../../components/employee/filter/FilterByName';
import EmployeesTable from '../../components/employee/tables/table/EmployeesTable';
import { EMPLOYEES_LIST_CONTAINER_BREADCRUMB } from '../../constants/breadcrumbConstants';
import { EMPLOYEE_LIST_PAGE } from '../../constants/commonConstants';
import { useGetEmployeesQuery } from '../../features/employees/employeesApi';
import { setEmployees } from '../../features/employees/employeesSlice';

const EmployeesList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const employees = useSelector(state => state.employees);

  const {
    data: employeesResult,
    isLoading: employeesResultLoading,
    error: employeesResponseError,
  } = useGetEmployeesQuery(
    { page, size: 10 },
    {
      skip: employees.filterEnable,
    }
  );

  useEffect(() => {
    dispatch(setEmployees(employeesResult));
  }, [dispatch, employeesResult]);

  let results = { content: [] };
  if (employees.filterEnable)
    results = employees.filteredEmployees || { content: [] };
  else results = employees.employees || { content: [] };

  function setPageNumber(pageNumber) {
    setPage(pageNumber);
  }

  if (employeesResultLoading) return <DataSpinner />;

  if (employeesResponseError) {
    console.log(employeesResponseError);
    return null;
  }

  return (
    <>
      <BreadCrumb
        singlePageBreadcrumbData={EMPLOYEES_LIST_CONTAINER_BREADCRUMB}
      />

      <Flex direction="row">
        <PageTitle title={EMPLOYEE_LIST_PAGE} />
        <Spacer />
        <FilterByName page={page} />
      </Flex>

      <EmployeesTable results={results} />
      <CommonPagination results={results} setPageNo={setPageNumber} />
    </>
  );
};

export default EmployeesList;
