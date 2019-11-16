import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { profileSuccess, profileFailure } from './actions';

export function* getProfile({ payload }) {
  try {
    const { username } = payload;

    const {
      data: { avatar_url, name, login, location, public_repos },
    } = yield call(api.get, `users/${username}`);

    yield put(
      profileSuccess({ avatar_url, name, login, location, public_repos })
    );
  } catch (error) {
    yield put(profileFailure());
  }
}

export default all([takeLatest('@profile/PROFILE_REQUEST', getProfile)]);
