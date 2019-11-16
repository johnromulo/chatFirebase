import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  page: 1,
  last: false,
};

export default function commit(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@commits/SEARCH_INITIAL_STATE': {
        draft.data = [];
        draft.last = false;
        draft.page = 1;
        break;
      }
      case '@commits/SEARCH_SUCCESS': {
        draft.data = draft.data.concat(action.payload.commits);
        draft.page += 1;
        draft.last = action.payload.last;
        break;
      }
      case '@commits/SEARCH_FAILURE': {
        draft.data = [];
        draft.last = true;
        break;
      }
      default:
    }
  });
}
