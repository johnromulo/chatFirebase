import { takeLatest, call, put, all, select } from 'redux-saga/effects';

import api from '~/services/api';

import { repositoriesSuccess, repositoriesFailure } from './actions';

export function* searchRepositories({ payload }) {
  try {
    const { username } = payload;
    const page = yield select(state => state.repositories.page);
    const last_page = yield select(state => state.repositories.total_pages);

    if (page <= last_page) {
      const response = yield call(
        api.get,
        `search/repositories?q=user:${username}+fork:true?sort=stars&order=desc&page=${page}&per_page=30`
      );

      const total_pages = Math.ceil(response.data.total_count / 30);
      const last = total_pages <= page;

      yield put(repositoriesSuccess(response.data.items, last, total_pages));
    }
  } catch (error) {
    yield put(repositoriesFailure());
  }
}

export default all([
  takeLatest('@repository/SEARCH_REQUEST', searchRepositories),
]);
