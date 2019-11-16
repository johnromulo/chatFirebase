export function repositoriesRequest(username) {
  return {
    type: '@repository/SEARCH_REQUEST',
    payload: { username },
  };
}

export function repositoriesResetState() {
  return {
    type: '@repository/SEARCH_INITIAL_STATE',
  };
}

export function repositoriesSuccess(repositories, last, total_pages) {
  return {
    type: '@repository/SEARCH_SUCCESS',
    payload: { repositories, last, total_pages },
  };
}

export function repositoriesFailure() {
  return {
    type: '@repository/SEARCH_FAILURE',
  };
}
