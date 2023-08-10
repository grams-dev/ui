import React from "react";
import { render } from "@testing-library/react";

import SelectProfile from "./SelectProfile";
import { SelectProfileProps } from "./SelectProfile.types";

describe("Test Component", () => {
  let props: SelectProfileProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<SelectProfile {...props} />);

  it("should render className correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("SelectProfile");

    // Change to the actual assertion you need
    expect(true).toBeTruthy();
  });
});
