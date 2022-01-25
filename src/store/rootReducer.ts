import { combineReducers } from '@reduxjs/toolkit';
import { Reducer } from 'redux';
import { reducer as languageReducer } from 'containers/LanguageProvider/slices';

function createReducer(injectedReducers: { [key: string]: Reducer } = {}) {
  const rootReducer = combineReducers({
    language: languageReducer,
    ...injectedReducers,
  });
  return rootReducer;
}

export default createReducer;
