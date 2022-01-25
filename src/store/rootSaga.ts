import { all } from 'redux-saga/effects';
import { saga as languageSaga } from 'containers/LanguageProvider/slices';

export default function* rootSaga() {
  yield all([languageSaga()]);
}
