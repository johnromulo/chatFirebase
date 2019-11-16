import produce from 'immer';

const INITIAL_STATE = {
  error: false,
  data: {
    avatar_url: '',
    login: '',
  },
};

export default function profile(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@profile/PROFILE_SUCCESS': {
        draft.data = action.payload.profile;
        draft.error = false;
        break;
      }
      case '@profile/PROFILE_FAILURE': {
        draft.data = INITIAL_STATE;
        draft.error = true;
        break;
      }
      default:
    }
  });
}
