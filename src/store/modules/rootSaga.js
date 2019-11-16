import { all } from 'redux-saga/effects';

import repositories from './repository/sagas';
import profile from './profile/sagas';
import commits from './commits/sagas';

export default function* rootSaga() {
  return yield all([repositories, profile, commits]);
}
