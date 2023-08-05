import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Select,
  useToast,
} from '@chakra-ui/react';

import calendar from '../../assets/icons/date.svg';
import Whitebar from '../../components/common/bar/Whitebar';
import BreadCrumb from '../../components/common/breadcrumb/BreadCrumb';
import CancelButton from '../../components/common/button/CancelButton';
import SubmitButton from '../../components/common/button/SubmitButton';
import SingleCalendar from '../../components/common/calendar/SingleCalendar';
import FieldWraper from '../../components/common/form/FieldWraper';
import SearchableSelect from '../../components/common/form/SearchableSelect';
import DataSpinner from '../../components/common/loader/DataSpinner';
import PageTitle from '../../components/common/pageTitle/PageTitle';
import { ADD_EMPLOYEE_CONTAINER_BREADCRUMB } from '../../constants/breadcrumbConstants';
import { DEBOUNCE_DELAY } from '../../constants/commonConstants';
import { EMPLOYEES_PATH } from '../../constants/pathnameConstant';
import {
  employeesApi,
  useGetDesignationsQuery,
} from '../../features/employees/employeesApi';
import { useGetPartnersQuery } from '../../features/partner/partnerApi';
import { debounceHandler } from '../../helper/debounce-handler';
import { makeCalendarForDate } from '../../helper/make-calendar-for-date';

export const FIELD_CSS = {
  bgColor: 'white',
  color: 'gray.500',
  width: '100%',
  border: '1px',
  borderColor: '#DDDDDD',
  fontSize: '14px',
  autoComplete: 'off',
  _focus: {
    borderColor: '#DDDDDD !important',
  },
};

const AddEmployee = () => {
  const ADD_EMPLOYEE_PAGE = 'Add Employee';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const { data: designations } = useGetDesignationsQuery();
  const { data: partners } = useGetPartnersQuery();
  const employees = useSelector(state => state.employees);
  const [joiningDate, setJoiningDate] = useState('');
  const [supervisors, setSupervisors] = useState([]);
  const [supervisorName, setSupervisorName] = useState(null);

  const newDate = new Date();
  const defaultJoiningDate = `${newDate.getFullYear()}-${String(
    newDate.getMonth() + 1
  ).padStart(2, '0')}-${String(newDate.getDate()).padStart(2, '0')}`;

  const {
    register,
    handleSubmit,
    //formState: { errors, isValid },
  } = useForm({
    mode: 'all',
  });

  const addEmployee = values => {
    console.log(values);
    console.log(joiningDate);
  };

  const doSearch = async value => {
    console.log(value);
    if (value.length < 1) return 0;
    dispatch(
      employeesApi.endpoints.getEmployeesByName.initiate({
        name: value,
        page: 0,
        size: 10,
      })
    )
      .unwrap() // makes the response promisify
      .then(res => {
        console.log(res);
        setSupervisors(
          res.content.map(r => {
            return {
              name: r.name,
              id: r.employeeId,
            };
          })
        );
      })
      .catch(err => {
        toast({
          title: 'Search fail',
          description: err.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      });
  };

  const supervisorSearchHandler = debounceHandler(doSearch, DEBOUNCE_DELAY);

  const handleSupervisorSearch = e => {
    console.log(e.target.value);
    supervisorSearchHandler(e.target.value);
  };

  if (!partners || !designations) return null;

  const getCalendarPopover = () => {
    return (
      <Popover placement="auto">
        <PopoverTrigger>
          <Image w="15px" h="15px" src={calendar} />
        </PopoverTrigger>
        <PopoverContent w={['300px', '450px', 'auto']}>
          <PopoverArrow bg="#0077C0" />
          <PopoverBody border="8px solid #0077C0" p={0} borderRadius="5px">
            <Whitebar width="60px" border="2px" />

            <SingleCalendar
              results={makeCalendarForDate(
                joiningDate ? joiningDate : defaultJoiningDate
              )}
              selectedDate={joiningDate ? joiningDate : defaultJoiningDate}
              setSelectDate={setJoiningDate}
            />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    );
  };

  return (
    <>
      <BreadCrumb
        singlePageBreadcrumbData={ADD_EMPLOYEE_CONTAINER_BREADCRUMB}
      />

      <PageTitle title={ADD_EMPLOYEE_PAGE} />

      <Flex pt={8} mb="16px" direction="column" fontSize="14px">
        <form onSubmit={handleSubmit(addEmployee)}>
          <Flex direction={{ lg: 'row', base: 'column' }}>
            <FieldWraper labelText="Email" htmlFor="email">
              <Input
                {...register('email')}
                {...FIELD_CSS}
                placeholder="Email"
                //onChange={e => register('email').onChange(e)}
                onChange={e => supervisorSearchHandler(e.target.value)}
              />
            </FieldWraper>
            <FieldWraper labelText="Employee ID" htmlFor="employeeId">
              <Input
                {...register('employeeId')}
                {...FIELD_CSS}
                placeholder="##########"
              />
            </FieldWraper>
          </Flex>

          <Flex direction={{ lg: 'row', base: 'column' }}>
            <FieldWraper labelText="Name" htmlFor="name">
              <Input {...register('name')} {...FIELD_CSS} placeholder="Name" />
            </FieldWraper>
            <FieldWraper labelText="Joining Date" htmlFor="joiningDate">
              <InputGroup zIndex={300}>
                <InputRightElement
                  // eslint-disable-next-line react/no-children-prop
                  children={getCalendarPopover()}
                />
                <Input
                  {...register('joiningDate')}
                  {...FIELD_CSS}
                  placeholder="Joining Date"
                  value={joiningDate}
                />
              </InputGroup>
            </FieldWraper>
          </Flex>

          <Flex>
            <FieldWraper labelText="Designation" htmlFor="designation">
              <Select
                {...register('designation')}
                {...FIELD_CSS}
                placeholder="Designation"
              >
                {designations.content.map((value, index) => (
                  <option value={value.name} key={index}>
                    {value.name}
                  </option>
                ))}
              </Select>
            </FieldWraper>
            <FieldWraper labelText="Status" htmlFor="status">
              <Select
                {...register('status')}
                {...FIELD_CSS}
                placeholder="Status"
              >
                {employees.employeesStatus.map((value, index) => (
                  <option value={value} key={index}>
                    {value}
                  </option>
                ))}
              </Select>
            </FieldWraper>
          </Flex>

          <Flex>
            <FieldWraper labelText="Supervisor Name" htmlFor="supervisorName">
              <SearchableSelect
                register={register}
                supervisors={supervisors}
                supervisorName={supervisorName}
                handleSupervisorSearch={handleSupervisorSearch}
              />
              {/* {errors.supervisorId && (
                            <Text
                                color="#E53E3E"
                                mt={2}
                                fontSize="14px"
                                maxWidth={{ base: '96%', lg: '70%' }}
                                status="error"
                            >
                                {errors.supervisorId &&
                                    errors.supervisorId.message}
                            </Text>
                        )} */}
            </FieldWraper>

            <FieldWraper labelText="Parnter" htmlFor="partner">
              <Select
                {...register('partner')}
                {...FIELD_CSS}
                placeholder="Partner"
              >
                {partners.partners.map((value, index) => (
                  <option value={value.name} key={index}>
                    {value.name}
                  </option>
                ))}
              </Select>
            </FieldWraper>
          </Flex>

          <Flex direction="row" mt={6} mb="50px" gap="20px">
            <CancelButton
              text="Cancel"
              cancelHandler={() => navigate(EMPLOYEES_PATH)}
            />

            <SubmitButton
              text="Add Employee"
              width="119px"
              height="30px"
              isDisabled={false}
            />
          </Flex>
        </form>
      </Flex>
      <DataSpinner />
    </>
  );
};

export default AddEmployee;
