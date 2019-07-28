import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import ListItemUI from "./list-item.ui";

describe("ListItem UI", () => {
  it("Render ListItem UI component", () => {
    const props = {
      from: undefined,
      to: undefined,
      total: undefined,
      disabled_prev: undefined,
      disabled_next: undefined,
      children: undefined,
      data: undefined,
      keyUpSearch: undefined,
      clickPrevious: undefined,
      clickNext: undefined
    };
    const com = shallow(<ListItemUI {...props} />);
    expect(shallowToJson(com)).toMatchSnapshot();
  });
});
