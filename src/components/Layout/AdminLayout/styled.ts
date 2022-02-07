import { AppBar, Toolbar } from '@mui/material';
import {
  alpha,
  experimentalStyled as styled,
  Theme,
} from '@mui/material/styles';
import { APPBAR_DESKTOP, APPBAR_MOBILE, DRAWER_WIDTH } from 'constants/common';

export const RootStyle = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'styleProps',
})(
  ({
    theme,
    styleProps,
  }: {
    theme: Theme;
    styleProps: { isExpandMenu: boolean };
  }) => ({
    boxShadow: 'none',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
    backgroundColor: alpha(theme.palette.background.default, 0.72),
    [theme.breakpoints.up('lg')]: {
      width: styleProps.isExpandMenu
        ? `calc(100% - ${DRAWER_WIDTH + 1}px)`
        : '100%',
    },
  }),
);

export const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));
