import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
// import { IconContext } from 'react-icons/lib';
import useStyles from './styled';
import { useIntl } from 'react-intl';

// const Nav = styled.div`
//   background: #15171c;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

// const NavIcon = styled(Link)`
//   margin-left: 2rem;
//   font-size: 2rem;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

const SidebarNav = styled.nav`
  background: #fff;
  width: 280px;
  height: 100vh;
  display: flex;
  justify-content: center;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const classes = useStyles();
  const intl = useIntl();

  // const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* <IconContext.Provider value={{ color: '#fff' }}> */}
      {/* <Nav>
        <NavIcon to="#">
          aaaa<span onClick={showSidebar} />
        </NavIcon>
      </Nav> */}
      <SidebarNav>
        <SidebarWrap>
          <div className={classes.logo}></div>
          <div className={classes.general}>
            {intl.formatMessage({ id: 'sideBar.general' })}
          </div>
          {SidebarData.map((item, index) => (
            <SubMenu item={item} key={index} />
          ))}
        </SidebarWrap>
      </SidebarNav>
      {/* </IconContext.Provider> */}
    </>
  );
};

export default Sidebar;
