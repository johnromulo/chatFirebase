export function profileRequest(username) {
  return {
    type: '@profile/PROFILE_REQUEST',
    payload: { username },
  };
}

export function profileSuccess(profile) {
  return {
    type: '@profile/PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function profileFailure() {
  return {
    type: '@profile/PROFILE_FAILURE',
  };
}
