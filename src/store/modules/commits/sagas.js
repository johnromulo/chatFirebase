import { takeLatest, call, put, all, select } from 'redux-saga/effects';

import api from '~/services/api';

import { commitsSuccess, commitsFailure } from './actions';

export function* searchCommits({ payload }) {
  try {
    const { username, reponame } = payload;
    const page = yield select(state => state.commits.page);

    const response = yield call(
      api.get,
      `repos/${username}/${reponame}/commits?page=${page}&per_page=20`
    );

    // const response = yield call(
    //   api.get,
    //   `search/commits?q=repo:${username}/${reponame}&page=${page}&per_page=30`
    // );

    const last = response.data.length < 20;

    yield put(commitsSuccess(response.data, last));
  } catch (error) {
    yield put(commitsFailure());
  }
}

export default all([takeLatest('@commits/SEARCH_REQUEST', searchCommits)]);
