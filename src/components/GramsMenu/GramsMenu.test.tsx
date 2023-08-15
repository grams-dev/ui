import React from "react";
import { render } from "@testing-library/react";

import GramsMenu from "./GramsMenu";
import { GramsMenuProps } from "./GramsMenu.types";

describe("Test Component", () => {
  let props: GramsMenuProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<GramsMenu {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("GramsMenu");

    expect(true).toBeTruthy();
  });
});
