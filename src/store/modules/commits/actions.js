export function commitsRequest(username, reponame) {
  return {
    type: '@commits/SEARCH_REQUEST',
    payload: { username, reponame },
  };
}

export function commitsResetState() {
  return {
    type: '@commits/SEARCH_INITIAL_STATE',
  };
}

export function commitsSuccess(commits, last) {
  return {
    type: '@commits/SEARCH_SUCCESS',
    payload: { commits, last },
  };
}

export function commitsFailure() {
  return {
    type: '@commits/SEARCH_FAILURE',
  };
}
