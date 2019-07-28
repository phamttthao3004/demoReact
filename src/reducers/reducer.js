import ACTION_TYPES from "../actions/action-types";
import CONSTANTS from "../scripts/constants";
const initialState = {
  current_page: CONSTANTS.CURRENT_PAGE.NONE,
  articles: []
};
const setState = (state, data) => {
  const obj = Object.assign({}, state);
  if (data !== undefined) {
    const keys = Object.keys(data);
    keys.forEach(k => {
      obj[k] = data[k];
    });
  }
  return obj;
};
const rootReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.SET_STATE:
      return setState(state, action.data);
    default:
      return state;
  }
};

export default rootReducer;
