import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  page: 1,
  last: false,
  total_pages: 1,
};

export default function repositories(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@repository/SEARCH_INITIAL_STATE': {
        draft.data = [];
        draft.last = false;
        draft.page = 1;
        break;
      }
      case '@repository/SEARCH_SUCCESS': {
        draft.data = draft.data.concat(action.payload.repositories);
        draft.page += 1;
        draft.last = action.payload.last;
        draft.total_pages = action.payload.total_pages;
        break;
      }
      case '@repository/SEARCH_FAILURE': {
        draft.data = [];
        draft.last = true;
        break;
      }
      default:
    }
  });
}
