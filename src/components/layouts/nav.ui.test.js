import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import NavUI from "./nav.ui";

describe("Nav UI", () => {
  it("Render Nav UI component", () => {
    const props = {
      currentPage: undefined,
      clickMenu: undefined
    };
    const com = shallow(<NavUI {...props} />);
    expect(shallowToJson(com)).toMatchSnapshot();
  });
});
