import React from "react";
import { render } from "@testing-library/react";

import SelectItem from "./SelectItem";
import { SelectItemProps } from "./SelectItem.types";

describe("Test Component", () => {
  let props: SelectItemProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<SelectItem {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("SelectItem");

    expect(true).toBeTruthy();
  });
});
