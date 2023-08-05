import * as IoIcons from 'react-icons/io';

import * as pathname from './pathnameConstant';
export const SIDEBAR_DATA = [
  {
    title: 'Employee Management',
    hasAccordion: [
      {
        title: 'Employee List',
        label: pathname.EMPLOYEES_PATH,
        path: pathname.EMPLOYEES_PATH,
        icon: <IoIcons.IoIosAnalytics size={32} />,
      },
      {
        title: 'Add Employee',
        label: pathname.ADD_EMPLOYEE_PATH,
        path: pathname.ADD_EMPLOYEE_PATH,
        icon: <IoIcons.IoIosAnalytics size={32} />,
      },
    ],
  },
  {
    title: 'Team Management',
    label: '/teams',
    path: '/teams',
    icon: <IoIcons.IoIosAnalytics size={32} />,
  },
  {
    title: 'Admin Management',
    label: '/admin',
    path: '/admin',
    icon: <IoIcons.IoIosAnalytics size={32} />,
  },
];

/*
{
    title: 'Example 2',
    hasAccordion: [
        {
            title: 'Reason',
            label: '/reason/pra/search',
            path: '/reason/PRA/search',
            icon: <IoIcons.IoIosAnalytics size={32} />,
        },
    ],
},
*/
