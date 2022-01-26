import { makeStyles } from '@mui/styles';

import logo from 'images/logo.png';
// import { intl } from 'containers/LanguageProvider';
// import { Theme } from '@mui/material';

// const useStyles = makeStyles((theme: Theme) => ({
const useStyles = makeStyles(() => ({
  logo: {
    display: 'flex',
    marginLeft: '2rem',

    '&::before': {
      content: '""',
      display: 'inline-block',
      backgroundImage: `url(${logo})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '3rem',
      width: '3rem',
    },

    // '&::after': {
    //   content: `"${intl.formatMessage({
    //     id: 'login.devopsPortal',
    //   })}"`,
    //   marginLeft: '0.7rem',
    //   lineHeight: '45px',
    //   fontWeight: 500,
    //   fontSize: '30px',
    //   color: '#0089d0',
    // },
  },
  general: {
    fontWeight: 700,
    padding: '2rem',
  },
}));

export default useStyles;
