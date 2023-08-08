import React from "react";
import { render } from "@testing-library/react";

import SelectMethod from "./SelectMethod";
import { SelectMethodProps } from "./SelectMethod.types";

describe("Test Component", () => {
  let props: SelectMethodProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<SelectMethod {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("SelectMethod");

    expect(true).toBeTruthy();
  });
});
