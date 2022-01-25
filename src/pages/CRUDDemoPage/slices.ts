import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { put, select } from 'redux-saga/effects';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { AppState } from 'store/store';
import { reducerActions as notificationActions } from 'containers/Notification/slices';
import { UserModel } from './models';
import mockData from './data';
import { SUCCESS_TYPE } from 'components/BasicComponents/Notification';

type UserState = {
  data: UserModel[];
  [key: string]: any;
};

const sliceName = 'userManagement';

const initialState: UserState = {
  data: [],
};

// reducer
const reducers = {
  fetchUsersSuccess: (
    state: UserState,
    action: PayloadAction<UserModel[]>,
  ) => ({
    ...state,
    data: action.payload,
  }),
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
  caseSagas: {
    *fetchUsers(): any {
      try {
        // Show Loading
        const listItems = UserModel.toClass(mockData) as UserModel[];

        yield put(slice.actions.fetchUsersSuccess(listItems));
      } catch (error) {
        console.error('err', error);
      } finally {
        // Stop Loading
      }
    },
    *newUser(action: PayloadAction<UserModel>): any {
      try {
        // Show Loading
        const data = action.payload;

        const usersList = yield select((state) => state[sliceName].data);

        yield put(
          notificationActions.showNotification({
            type: SUCCESS_TYPE,
            message: 'Create successfully',
          }),
        );
        yield put(
          slice.actions.fetchUsersSuccess([
            ...usersList,
            { ...data, id: usersList?.length + 1 },
          ]),
        );
      } catch (error) {
        console.error('err', error);
      } finally {
        // Stop Loading
      }
    },
    *updateUser(action: PayloadAction<UserModel>): any {
      try {
        // Show Loading
        const data = action.payload;

        const usersList = yield select((state) => state[sliceName].data);
        const result = usersList.map((user: UserModel) =>
          user.id === data.id ? data : user,
        );
        yield put(
          notificationActions.showNotification({
            type: SUCCESS_TYPE,
            message: 'Update successfully',
          }),
        );
        yield put(slice.actions.fetchUsersSuccess(result));
      } catch (error) {
        console.error('err', error);
      } finally {
        // Stop Loading
      }
    },
    *deleteUser(action: PayloadAction<string>): any {
      try {
        // Show Loading
        const data = action.payload;

        const usersList = yield select((state) => state[sliceName].data);

        const result = usersList.filter((user: UserModel) => user.id !== data);
        yield put(
          notificationActions.showNotification({
            type: SUCCESS_TYPE,
            message: 'Delete successfully',
          }),
        );
        yield put(slice.actions.fetchUsersSuccess(result));
      } catch (error) {
        console.error('err', error);
      } finally {
        // Stop Loading
      }
    },
  },
};

const sliceSaga = createSliceSaga(sagaOption);

const { saga, actions: sagaActions } = sliceSaga;

// selectors
const dataSelected = (state: AppState) => {
  const UserState = state[sliceName];
  return UserState?.data;
};
const selectors = { dataSelected };

export { sliceName, reducer, saga, reducerActions, sagaActions, selectors };
