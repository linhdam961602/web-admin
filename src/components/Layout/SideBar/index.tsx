import React from 'react';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import {
  Logo,
  General,
  SidebarNav,
  SidebarWrap,
  AvaWrap,
  Info,
  Name,
  Title,
} from './styled';
import { useIntl } from 'react-intl';
import Avatar from 'components/MUIComponent/Avatar';

const Sidebar = () => {
  const intl = useIntl();
  const userProfile = {
    avatarUrl: '',
    name: 'Carlota Monteiro',
    title: 'Plarform Admin',
  };

  return (
    <>
      <SidebarNav>
        <SidebarWrap>
          <Logo />
          <AvaWrap>
            <Avatar alt="My Avatar" src={userProfile.avatarUrl} />
            <Info>
              <Name>{userProfile.name}</Name>
              <Title>{userProfile.title}</Title>
            </Info>
          </AvaWrap>
          <General>{intl.formatMessage({ id: 'sideBar.general' })}</General>
          {SidebarData.map((item, index) => (
            <SubMenu item={item} key={index} />
          ))}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
