import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SvgIcon from 'components/MUIComponent/SvgIcon';
import { SideBarItem, SidebarLink, SidebarLabel, DropdownLink } from './styled';

interface itemProps {
  title: string;
  path: string;
  icon: string;
  iconClosed?: string;
  iconOpened?: string;
}

const SubMenu = ({ item }: any) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {
    item.subNav && setSubnav(!subnav);
  };
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <SidebarLink
        to={item.path}
        onClick={showSubnav}
        className={pathname === item.path ? 'active' : ''}
      >
        <SideBarItem>
          {item.icon && (
            <SvgIcon
              src={item.icon}
              sx={{ width: '24px', height: '24px', mr: 2 }}
            />
          )}
          <SidebarLabel>{item.title}</SidebarLabel>
        </SideBarItem>
        <SideBarItem>
          {item.subNav && subnav ? (
            <SvgIcon
              src={item.iconOpened}
              sx={{ width: '16px', height: '16px' }}
            />
          ) : item.subNav ? (
            <SvgIcon
              src={item.iconClosed}
              sx={{ width: '16px', height: '16px' }}
            />
          ) : null}
        </SideBarItem>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item: itemProps, index: string) => (
          <DropdownLink
            to={item.path}
            key={index}
            className={pathname === item.path ? 'active' : ''}
          >
            {item.icon && (
              <SvgIcon
                src={item.icon}
                sx={{ width: '24px', height: '24px', mr: 2 }}
              />
            )}
            <SidebarLabel>{item.title}</SidebarLabel>
          </DropdownLink>
        ))}
    </>
  );
};

export default SubMenu;
