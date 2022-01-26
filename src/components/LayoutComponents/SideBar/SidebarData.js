// import React from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
import Base from 'illustration/IconBase.png';
import { Icon } from '@iconify/react';
import { SvgIcon } from '@mui/material';
import { intl } from 'containers/LanguageProvider';
import {
  HOME_URI,
  USER,
  USER_LIST,
  USER_REQUEST,
  PROJECT,
  DEVELOPMENT_TOOLS,
  MEMBERS,
} from 'constants/routes';

export const SidebarData = [
  {
    title: intl.formatMessage({
      id: 'sideBar.dashBoard',
    }),
    path: USER,
    icon: (
      <SvgIcon>
        <Icon icon={Base} />
      </SvgIcon>
    ),
  },
  {
    title: intl.formatMessage({
      id: 'sideBar.user',
    }),
    path: HOME_URI,
    // icon: <AiIcons.AiFillHome />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: intl.formatMessage({
          id: 'sideBar.list',
        }),
        path: USER_LIST,
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: intl.formatMessage({
          id: 'sideBar.request',
        }),
        path: USER_REQUEST,
        // icon: <IoIcons.IoIosPaper />
      },
    ],
  },

  {
    title: intl.formatMessage({
      id: 'sideBar.projects',
    }),
    path: PROJECT,
    // icon: <FaIcons.FaCartPlus />
  },
  {
    title: intl.formatMessage({
      id: 'sideBar.developmentTools',
    }),
    path: DEVELOPMENT_TOOLS,
    // icon: <IoIcons.IoMdPeople />
  },
  {
    title: intl.formatMessage({
      id: 'sideBar.members',
    }),
    path: MEMBERS,
    // icon: <FaIcons.FaEnvelopeOpenText />,
  },
];
