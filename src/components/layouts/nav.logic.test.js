import GetNavigationParam from "./nav.logic";
import CONSTANTS from "../../scripts/constants";

describe("Test GetNavigationParam function", () => {
  it("pageID is undefined", () => {
    const pageId = undefined;
    const result = {};
    expect(GetNavigationParam(pageId)).toMatchObject(result);
  });

  it("pageID is CONSTANTS.CURRENT_PAGE.HOME", () => {
    const pageId = CONSTANTS.CURRENT_PAGE.HOME;
    const result = { pathname: CONSTANTS.NAV_URL.HOME };
    expect(GetNavigationParam(pageId)).toMatchObject(result);
  });

  it("pageID is CONSTANTS.CURRENT_PAGE.HISTORY", () => {
    const pageId = CONSTANTS.CURRENT_PAGE.HISTORY;
    const result = { pathname: CONSTANTS.NAV_URL.HISTORY };
    expect(GetNavigationParam(pageId)).toMatchObject(result);
  });
});
