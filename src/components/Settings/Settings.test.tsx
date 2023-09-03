import React from "react";
import { render } from "@testing-library/react";

import Settings from "./Settings";
import { SettingsProps } from "./Settings.types";

describe("Test Component", () => {
  let props: SettingsProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<Settings {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Settings");

    expect(true).toBeTruthy();
  });
});
