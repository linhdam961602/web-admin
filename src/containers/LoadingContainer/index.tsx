import React from 'react';
import { useSelector } from 'react-redux';
import get from 'lodash/get';
import { loadingSliceName, loadingReducer, initialState } from './slices';
import PageLoading from 'components/MUIComponent/PageLoading';
import { useInjectReducer } from 'store/hooks';

interface LoadingContainerProps {
  children: React.ReactElement<any>;
}

const LoadingContainer: React.FC<LoadingContainerProps> = ({ children }) => {
  useInjectReducer({
    key: loadingSliceName,
    reducer: loadingReducer,
  });

  const isLoading = useSelector((state) =>
    get(state, [loadingSliceName, 'isLoading'], initialState.isLoading),
  );

  return <PageLoading loading={isLoading}>{children}</PageLoading>;
};

export default LoadingContainer;
