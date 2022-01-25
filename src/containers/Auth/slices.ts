import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put, call } from 'redux-saga/effects';

import * as authHelper from './helpers';

import { HOME_URI } from 'constants/routes';
import { loadingActions } from 'containers/LoadingContainer/slices';
import { logout, login, getCurrentUser } from './apis';
import { reducerActions as notificationActions } from 'containers/Notification/slices';
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'constants/common';
import {
  SUCCESS_TYPE,
  ERROR_TYPE,
} from 'components/BasicComponents/Notification';

const authSliceName = 'user';

const initialState = {
  loading: false,
  getCurrentUserLoading: false,
  userInfo: null,
};

const authSlice = createSlice({
  name: authSliceName,
  initialState,
  reducers: {
    loginSuccess: (state, action) => ({
      ...state,
      isLoading: false,
      userInfo: action.payload,
    }),
    getCurrentUserDataSuccess: (state, action) => {
      const { payload: userInfo } = action;
      return {
        ...state,
        userInfo,
      };
    },
  },
});

const { actions: reducerActions, reducer: authReducer } = authSlice;

// TODO, just mock data for now

const authSliceSaga = createSliceSaga({
  name: authSliceName,
  caseSagas: {
    *login(action) {
      try {
        yield put(loadingActions.showLoading());
        const { params, navigate } = action.payload;
        const response: any = yield call(login, params);

        if (response.statusText === 'OK') {
          // TO DO Check Auth with Remember me
          const body = response.data;
          const tokenInfo = {
            accessToken: body[ACCESS_TOKEN],
            refreshToken: body[REFRESH_TOKEN],
          };
          authHelper.setRememberFeature(
            action.payload.isRemember,
            action.payload.userName,
          );
          // set token to cookie
          authHelper.setAccessToken(tokenInfo.accessToken);

          // store refresh token
          if (tokenInfo.refreshToken) {
            authHelper.setRefreshToken(tokenInfo.refreshToken);
          }

          yield put(reducerActions.loginSuccess(tokenInfo));
          yield put(
            notificationActions.showNotification({
              type: SUCCESS_TYPE,
              message: 'Login successfully',
            }),
          );
          // redirect to new default page
          navigate(HOME_URI);
        }
      } catch (error: any) {
        yield put(
          notificationActions.showNotification({
            type: ERROR_TYPE,
            message: 'Login fail !',
          }),
        );
      }

      yield put(loadingActions.stopLoading());
    },

    *me(action): any {
      yield put(loadingActions.showLoading());
      const { navigate } = action.payload;
      try {
        const isTokenExist = authHelper.getAccessToken();
        if (!isTokenExist) {
          yield put(loadingActions.stopLoading());
          return;
        }
        const { data } = yield call(getCurrentUser);
        if (data) {
          yield put(reducerActions.getCurrentUserDataSuccess(data));
          navigate(HOME_URI);
        }
      } catch (error) {
        console.error(error);
        authHelper.clearUserCredential();
      }
      yield put(loadingActions.stopLoading());
    },

    *logout(action): any {
      const { refreshPage } = action.payload || {
        refreshPage: true,
      };
      try {
        yield call(logout);

        // force clear credential even logout failed
        authHelper.clearUserCredential();

        // redirect to sign in page
        if (refreshPage) {
          window.location.href = HOME_URI;
        }
      } catch (error) {
        // force clear credential even logout failed
        authHelper.clearUserCredential();

        // redirect to sign in page
        if (refreshPage) {
          window.location.href = HOME_URI;
        }
      }
    },
  },

  sagaType: SagaType.TakeLatest,
});

const { saga: authSaga, actions: sagaActions } = authSliceSaga;

const authActions = { ...reducerActions, ...sagaActions };
export {
  initialState,
  authSliceName,
  authActions,
  authReducer,
  authSaga,
  authSliceSaga,
};
