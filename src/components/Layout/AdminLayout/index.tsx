import { useState } from 'react';
import { Outlet } from 'react-router-dom';

// material
import { experimentalStyled as styled } from '@mui/material/styles';
import DashboardNavbar from './components/DashboardNavbar';
import SideBar from 'components/Layout/SideBar';
// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')(() => ({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
}));

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function AdminLayout() {
  const [isExpandMenu, setIsExpandMenu] = useState(true);

  return (
    <RootStyle>
      <SideBar />
      <>
        <DashboardNavbar
          onOpenSidebar={() => setIsExpandMenu(true)}
          isExpandMenu={isExpandMenu}
        />
        <MainStyle>
          <Outlet />
        </MainStyle>
      </>
    </RootStyle>
  );
}
