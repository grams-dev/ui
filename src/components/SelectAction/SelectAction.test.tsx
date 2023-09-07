import React from "react";
import { render } from "@testing-library/react";

import SelectAction from "./SelectAction";
import { SelectActionProps } from "./SelectAction.types";

describe("Test Component", () => {
  let props: SelectActionProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<SelectAction {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("SelectAction");

    expect(true).toBeTruthy();
  });
});
