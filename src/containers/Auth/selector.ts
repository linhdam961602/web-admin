import { createSelector } from 'reselect';

import { authSliceName } from './slices';

const authStore = (store: any) => store[authSliceName];

export const selectUserInfo = createSelector(
  authStore,
  (state) => state.userInfo,
);
