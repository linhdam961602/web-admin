import React from 'react';

import Preloading from 'components/MUIComponent/Preloading';
import { makeStyles } from '@mui/styles';

interface PageLoading {
  children: React.ReactElement<any>;
  loading: boolean;
}

const useStyles = makeStyles(() => ({
  pageLoadingStyled: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1001,
  },
}));

function PageLoading({ children, loading }: PageLoading) {
  const classes = useStyles();

  return (
    <>
      {loading && (
        <div className={classes.pageLoadingStyled}>
          <Preloading />
        </div>
      )}
      {children}
    </>
  );
}

export default PageLoading;
