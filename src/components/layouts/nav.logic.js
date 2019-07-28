import CONSTANTS from "../../scripts/constants";

const GetNavigationParam = pageId => {
  let param = {};
  switch (pageId) {
    case CONSTANTS.CURRENT_PAGE.HOME:
      param = { pathname: CONSTANTS.NAV_URL.HOME };
      break;
    case CONSTANTS.CURRENT_PAGE.HISTORY:
      param = { pathname: CONSTANTS.NAV_URL.HISTORY };
      break;
    default:
      break;
  }
  return param;
};
export default GetNavigationParam;
