import React from "react";
import { render } from "@testing-library/react";

import ViewSeed from "./ViewSeed";
import { ViewSeedProps } from "./ViewSeed.types";

describe("Test Component", () => {
  let props: ViewSeedProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<ViewSeed {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ViewSeed");

    expect(true).toBeTruthy();
  });
});
