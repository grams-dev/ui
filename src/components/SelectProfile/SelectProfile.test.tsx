import React from "react";
import { render } from "@testing-library/react";

import SelectProfile from "./SelectProfile";
import { SelectProfileProps } from "./SelectProfile.types";

describe("Test Component", () => {
  let props: SelectProfileProps;

  beforeEach(() => {
    props = {
      className: "page"
    };
  });

  const renderComponent = () => render(<SelectProfile {...props} />);

  it("should render className correctly", () => {
    props.className = "page";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SelectProfile");

    // Change to the actual assertion you need
    expect(true).toBeTruthy();
  });
});
