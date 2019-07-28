import React from "react";
import { shallow } from "enzyme";
import HistoryUI from "./history.ui";

describe("History UI", () => {
  it("Render History UI component", () => {
    const props = {
      data: undefined,
      onChange: undefined,
      onSearch: undefined
    };
    shallow(<HistoryUI {...props} />);
  });
});
