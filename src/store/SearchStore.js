const SEARCH_BY_TEXT = 'SEARCH_BY_TEXT';
const initialState = { text: '' };

export const actionCreators = {
    search: (text) => async (dispatch, getState) => {
      dispatch({ type: SEARCH_BY_TEXT, text: text });
  },
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === SEARCH_BY_TEXT) {
    return { ...state, text: action.text };
  }

  return state;
};
