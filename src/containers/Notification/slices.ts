import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { AppState } from 'store/store';
import KeyPair from 'types/KeyPair';

const sliceName = 'notifications';

type NotificationState = {
  currentNotification: KeyPair;
};

export const initialState: NotificationState = {
  currentNotification: {},
};

// reducer
const reducers = {
  showNotification: (
    state: NotificationState,
    action: PayloadAction<KeyPair>,
  ) => {
    state.currentNotification = action.payload;
  },
  removeNotification: () => initialState,
};

const sliceOption = {
  name: sliceName,
  initialState,
  reducers,
};

const slice = createSlice(sliceOption);
const { reducer, actions: reducerActions } = slice;

// saga

const sagaOption = {
  name: sliceName,
  sagaType: SagaType.TakeLatest,
  caseSagas: {},
};

const sliceSaga = createSliceSaga(sagaOption);

const { saga, actions: sagaActions } = sliceSaga;

// selectors
const notificationSelected = (state: AppState) => {
  const NotificationState = state[sliceName];
  return NotificationState?.currentNotification;
};
const selectors = { notificationSelected };

export { sliceName, reducer, saga, reducerActions, sagaActions, selectors };
