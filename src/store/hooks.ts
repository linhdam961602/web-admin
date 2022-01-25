import { useEffect } from 'react';

import {
  TypedUseSelectorHook,
  useStore,
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  useInjectSaga as injectSaga,
  SagaInjectionModes,
} from 'redux-injectors';

import createReducer from './rootReducer';

import type { AppDispatch, AppState } from './store';
import {
  InjectSagaParams,
  InjectReducerParams,
  InjectedStore,
} from 'types/Store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const useInjectReducer = ({ key, reducer }: InjectReducerParams) => {
  const store = useStore() as InjectedStore;

  useEffect(() => {
    // Inject reducer if it is not in store
    if (!store.injectedReducers[key]) {
      store.injectedReducers[key] = reducer;
      store.replaceReducer(createReducer(store.injectedReducers));
    }
  }, [key, reducer, store]);

  // Remove reducer when unmounting component
  useEffect(
    () => () => {
      delete store.injectedReducers[key];
      store.replaceReducer(createReducer(store.injectedReducers));
    },
    [key, store],
  );
};

export const useInjectSaga = ({
  key,
  saga,
  mode = SagaInjectionModes.DAEMON,
}: InjectSagaParams) => {
  injectSaga({ key, saga, mode });
};
