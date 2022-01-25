import React from 'react';

import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  preloadingStyled: {
    width: '5rem',
    background: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleLoadingStyled: {
    content: '',
    width: '3.125rem',
    height: '3.125rem',
    display: 'inline-block',
    fontSize: '0 !important',
    textIndent: '-9999em !important',
    borderRadius: '50% !important',
    borderTop: `0.5rem solid ${theme.palette.primary.main} !important`,
    borderRight: `0.5rem solid ${theme.palette.grey[400]} !important`,
    borderBottom: `0.5rem solid ${theme.palette.grey[400]} !important`,
    borderLeft: `0.5rem solid ${theme.palette.grey[400]} !important`,
    transform: 'translateZ(0)',
    animation: `$loaderCircle 0.7s infinite linear`,
  },
  textInfoStyled: {
    fontSize: '0.75rem',
    fontWeight: 'bold',
    paddingTop: '0.5rem',
    color: theme.palette.primary.main,
    animation: `$loaderBlink 0.7s infinite linear`,
  },
  '@keyframes loaderCircle': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  '@keyframes loaderBlink': {
    '50%': { opacity: 1 },
    '100%': { opacity: 0.3 },
  },
}));

interface Preloading {
  text?: string;
  className?: string;
}

function Preloading({ text }: Preloading) {
  const classes = useStyles();
  return (
    <div className={classes.preloadingStyled}>
      <div className={classes.circleLoadingStyled}></div>
      <div className={classes.textInfoStyled}>
        {text || <FormattedMessage id="common.label.loading" />}...
      </div>
    </div>
  );
}

export default Preloading;
