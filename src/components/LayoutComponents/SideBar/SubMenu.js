import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #637381;

  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    color: #0089d0;
    font-weight: 600;
    background: rgba(0, 171, 85, 0.08);
    box-shadow: inset -1px 0px 0px rgba(145, 158, 171, 0.24);
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #fff;
  height: 60px;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #637381;

  &:hover {
    color: #0089d0;
    font-weight: 600;
    background: rgba(0, 171, 85, 0.08);
    box-shadow: inset -1px 0px 0px rgba(145, 158, 171, 0.24);
    cursor: pointer;
  }

  &::before {
    content: '';
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    background: #0089d0;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {
    console.log('item.subNav', item.subNav);
    console.log('set subnav', subnav);
    item.subNav && setSubnav(!subnav);
  };

  return (
    <>
      <SidebarLink to={item.path} onClick={showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => (
          <DropdownLink to={item.path} key={index}>
            {item.icon}
            {/* {item.icon && <img alt={item.icon} src={item.icon} />} */}
            <SidebarLabel>{item.title}</SidebarLabel>
          </DropdownLink>
        ))}
    </>
  );
};

export default SubMenu;
