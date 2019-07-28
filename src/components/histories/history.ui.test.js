import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import HistoryUI from "./history.ui";

describe("History UI", () => {
  it("Render History UI component", () => {
    const props = {
      data: undefined,
      onChange: undefined,
      onSearch: undefined
    };
    const com = shallow(<HistoryUI {...props} />);
    expect(shallowToJson(com)).toMatchSnapshot();
  });
});
