import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import NewsUI from "./news.ui";

describe("News UI", () => {
  it("Render News UI component", () => {
    const props = {
      data: undefined,
      onChange: undefined,
      onClick: undefined,
      onSearch: undefined
    };
    const com = shallow(<NewsUI {...props} />);
    expect(shallowToJson(com)).toMatchSnapshot();
  });
});
