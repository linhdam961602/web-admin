import { makeStyles } from '@mui/styles';

// import devRafiki from 'images/rafiki.svg';
import logo from 'images/logo.png';
import { intl } from 'containers/LanguageProvider';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  inputLabel: {
    '& .MuiInputLabel-shrink': {
      fontSize: '1rem',
    },
  },
  loginWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  devRafikiWrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    height: '100vh',
    borderRadius: '0 1rem 1rem 1rem',
    boxShadow: '0 1rem 2rem -0.25rem rgba(0, 0, 0, 0.24)',
  },
  devRafikiInner: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    display: 'flex',

    '&::before': {
      content: '""',
      display: 'inline-block',
      backgroundImage: `url(${logo})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '3rem',
      width: '3rem',
    },

    '&::after': {
      content: `"${intl.formatMessage({
        id: 'login.devopsPortal',
      })}"`,
      marginLeft: '0.7rem',
      lineHeight: '45px',
      fontWeight: 500,
      fontSize: '30px',
      color: '#0089d0',
    },
  },
  formWrapper: {
    display: 'flex',
    padding: '0 15rem',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    fontSize: '16px',
    color: '#637381',
  },
  spaceBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '16px',

    '& label': {
      color: '#637381',
    },
  },
  forgotPassword: {
    cursor: 'pointer',
    color: '#0089d0',
  },
  copyRight: {
    position: 'absolute',
    bottom: '50px',
    color: '#000',
  },
  formContent: {
    flex: 1,
  },
  account: {
    marginTop: '2rem',
    textAlign: 'center',
    color: theme.palette.grey[600],

    '& span': {
      fontWeight: 600,
      color: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
