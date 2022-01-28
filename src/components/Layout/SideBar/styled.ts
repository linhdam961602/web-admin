import { makeStyles } from '@mui/styles';
import {
  alpha,
  experimentalStyled as styled,
  Theme,
} from '@mui/material/styles';
import logo from 'images/logo.png';
import { Link } from 'react-router-dom';

export const Logo = styled('div')(({ theme }) => ({
  display: 'flex',
  margin: '2rem 0 0 2rem',

  '&::before': {
    content: '""',
    display: 'inline-block',
    backgroundImage: `url(${logo})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '3rem',
    width: '3rem',
  },
}));

export const General = styled('div')(({ theme }) => ({
  fontWeight: 700,
  padding: '2rem',
  color: theme.palette.grey[800],
}));

export const SideBarItem = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const SidebarNav = styled('div')(({ theme }) => ({
  background: theme.palette.common.white,
  width: '280px',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  boxShadow: 'inset -1px 0px 0px rgba(145, 158, 171, 0.24)',
  zIndex: 10,
}));

export const SidebarWrap = styled('div')(({ theme }) => ({
  width: '100%',

  '& .active': {
    color: theme.palette.primary.main,
    fontWeight: 600,
    background: 'rgba(0, 171, 85, 0.08)',
    boxShadow: 'inset -1px 0px 0px rgba(145, 158, 171, 0.24)',
    cursor: 'pointer',

    '&::after': {
      content: '""',
      width: '3px',
      background: theme.palette.primary.main,
      height: '100%',
      position: 'absolute',
      right: 0,
    },
  },
}));

export const Info = styled('div')(() => ({
  padding: '0 0.8rem',
}));

export const Name = styled('div')(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.grey[800],
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  width: '8.5rem',
}));

export const Title = styled('div')(({ theme }) => ({
  color: theme.palette.grey[600],
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  width: '8.5rem',
}));

export const AvaWrap = styled('div')(({ theme }) => ({
  display: 'flex',
  margin: '2rem',
  background: theme.palette.grey[200],
  padding: '1rem 1.25rem',
  height: '76px',
  borderRadius: '0.75rem',
}));

export const SidebarLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  color: theme.palette.grey[600],
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 2rem',
  listStyle: 'none',
  height: '48px',
  textDecoration: 'none',

  '&:hover': {
    color: theme.palette.primary.main,
    fontWeight: 600,
    background: 'rgba(0, 171, 85, 0.08)',
    boxShadow: 'inset -1px 0px 0px rgba(145, 158, 171, 0.24)',
    cursor: 'pointer',

    '&::after': {
      content: '""',
      width: '3px',
      background: theme.palette.primary.main,
      height: '100%',
      position: 'absolute',
      right: 0,
    },
  },
}));

export const SidebarLabel = styled('span')(() => ({
  marginLeft: '5px',
}));

export const DropdownLink = styled(Link)(({ theme }) => ({
  background: theme.palette.common.white,
  height: '48px',
  paddingLeft: '2rem',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: theme.palette.grey[600],

  '&:hover': {
    color: theme.palette.primary.main,
    fontWeight: 600,
    background: 'rgba(0, 171, 85, 0.08)',
    boxShadow: 'inset -1px 0px 0px rgba(145, 158, 171, 0.24)',
    cursor: 'pointer',
  },

  '&::before': {
    content: '""',
    marginRight: '1rem',
    width: '0.2rem',
    height: '0.2rem',
    borderRadius: '50%',
    background: theme.palette.primary.main,
  },
}));
