import { intl } from 'containers/LanguageProvider';

import {
  HOME_URI,
  USER,
  USER_LIST,
  USER_REQUEST,
  PROJECT,
  DEVELOPMENT_TOOLS,
  MEMBERS,
  TABLE_DEMO_URI,
} from 'constants/routes';

export const SidebarData = [
  {
    title: intl.formatMessage({
      id: 'sideBar.dashBoard',
    }),
    path: HOME_URI,
    icon: '/static/icons/ic_analytics.svg',
  },
  {
    title: intl.formatMessage({
      id: 'sideBar.user',
    }),
    path: USER,
    icon: '/static/icons/ic_user.svg',
    iconClosed: '/static/icons/ic_chevron_down.svg',
    iconOpened: '/static/icons/ic_chevron_right.svg',

    subNav: [
      {
        title: intl.formatMessage({
          id: 'sideBar.list',
        }),
        path: USER_LIST,
      },
      {
        title: intl.formatMessage({
          id: 'sideBar.request',
        }),
        path: USER_REQUEST,
      },
    ],
  },
  {
    title: intl.formatMessage({
      id: 'sideBar.tableDemo',
    }),
    path: TABLE_DEMO_URI,
    icon: '/static/icons/ic_base.svg',
  },
  {
    title: intl.formatMessage({
      id: 'sideBar.projects',
    }),
    path: PROJECT,
    icon: '/static/icons/ic_page.svg',
  },
  {
    title: intl.formatMessage({
      id: 'sideBar.developmentTools',
    }),
    path: DEVELOPMENT_TOOLS,
    icon: '/static/icons/ic_kanban.svg',
  },
  {
    title: intl.formatMessage({
      id: 'sideBar.members',
    }),
    path: MEMBERS,
    icon: '/static/icons/ic_user_group.svg',
  },
];
