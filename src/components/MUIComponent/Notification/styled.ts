import {
  experimentalStyled as styled,
  Theme,
  alpha,
} from '@mui/material/styles';
import Box from 'components/MUIComponent/Box';
import { ColorSchema } from 'types/Palette';

export const StyledSnackbarText = styled(Box)(({ theme }) => ({
  color: `${theme.palette.text.primary}`,
  wordBreak: 'break-word',
  position: 'static',
  fontStyle: 'normal',
  [theme.breakpoints.down('sm')]: {
    width: theme.typography.pxToRem(143),
  },
  [theme.breakpoints.up('md')]: {
    width: theme.typography.pxToRem(185),
  },
}));

export const StyledSnackbarIcon = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'styleProps',
})(
  ({
    theme,
    styleProps,
  }: {
    theme: Theme;
    styleProps: { color: ColorSchema };
  }) => ({
    width: theme.typography.pxToRem(40),
    height: theme.typography.pxToRem(40),
    display: 'flex',
    borderRadius: theme.typography.pxToRem(12),
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette[styleProps.color].main,
    backgroundColor: alpha(theme.palette[styleProps.color].main, 0.1),
    margin: theme.spacing(1.2, 1.2, 1.2, -2),
  }),
);

export const StyledToastContent = styled(Box)(() => ({
  flexDirection: 'row',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
