import { experimentalStyled as styled } from '@mui/material/styles';
import Box from 'components/MUIComponent/Box';

export const ButtonActionsStyle = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(3),
}));

export const DialogRootStyle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export const DialogTitleStyle = styled(Box)(({ theme }) => ({
  color: theme.palette.grey[800],
  display: 'flex',
  padding: theme.spacing(3),
  paddingBottom: 0,
  alignItems: 'center',
  flexDirection: 'row',

  '& .MuiSvgIcon-root': {
    marginRight: theme.spacing(1),
  },
}));
