import React from "react";
import { shallow } from "enzyme";
import NavUI from "./nav.ui";

describe("Nav UI", () => {
  it("Render Nav UI component", () => {
    const props = {
      currentPage: undefined,
      clickMenu: undefined
    };
    shallow(<NavUI {...props} />);
  });
});
