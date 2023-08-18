import React from "react";
import { render } from "@testing-library/react";

import Action from "./Action";
import { ActionProps } from "./Action.types";

describe("Test Component", () => {
  let props: ActionProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<Action {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Action");

    expect(true).toBeTruthy();
  });
});
