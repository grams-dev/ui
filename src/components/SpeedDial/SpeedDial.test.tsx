import React from "react";
import { render } from "@testing-library/react";

import SpeedDial from "./SpeedDial";
import { SpeedDialProps } from "./SpeedDial.types";

describe("Test Component", () => {
  let props: SpeedDialProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<SpeedDial {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("SpeedDial");

    expect(true).toBeTruthy();
  });
});
