import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { appLocales, DEFAULT_LOCALE } from 'i18n';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { AppState } from 'store/store';

type LanguageState = {
  locales: string[];
  locale: string;
  [key: string]: any;
};

const sliceName = 'language';
const initialState: LanguageState = {
  locales: appLocales,
  locale: DEFAULT_LOCALE,
};

// reducer
const reducers = {
  changeLanguage: (state: LanguageState, action: PayloadAction<string>) => ({
    ...state,
    locale: action.payload,
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
  caseSagas: {},
};

const sliceSaga = createSliceSaga(sagaOption);

const { saga, actions: sagaActions } = sliceSaga;

// selectors
const languageSelected = (state: AppState) => {
  const languageState = state[sliceName];
  return languageState.locale;
};
const selectors = { languageSelected };

export { sliceName, reducer, saga, reducerActions, sagaActions, selectors };
