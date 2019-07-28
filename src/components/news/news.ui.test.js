import React from "react";
import { shallow } from "enzyme";
import NewsUI from "./news.ui";

describe("News UI", () => {
  it("Render News UI component", () => {
    const props = {
      data: undefined,
      onChange: undefined,
      onClick: undefined,
      onSearch: undefined
    };
    shallow(<NewsUI {...props} />);
  });
});
