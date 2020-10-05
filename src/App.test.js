import React from "react";
import { render } from "@testing-library/react";
import { expect } from "chai";
import { shallow } from "enzyme";

import App from "./App";

test("renders learn react link", () => {
  describe("<App />", () => {
    it("renders without crashing", () => {
      const wrapper = shallow(<App />);
    });
  });
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
