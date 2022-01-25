import React from 'react';

import { PageLoadingStyled } from './styled';

import Preloading from 'components/BasicComponents/Preloading';

interface PageLoading {
  children: React.ReactElement<any>;
  loading: boolean;
}

function PageLoading({ children, loading }: PageLoading) {
  return (
    <>
      {loading && (
        <PageLoadingStyled>
          <Preloading />
        </PageLoadingStyled>
      )}
      {children}
    </>
  );
}

export default PageLoading;
