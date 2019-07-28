import ACTION_TYPES from "./action-types";

const rootAction = new (function() {
  this.setState = _data => {
    return { type: ACTION_TYPES.SET_STATE, data: _data };
  };
})();
export default rootAction;
