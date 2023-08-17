import React from "react";
import { render } from "@testing-library/react";

import Terms from "./Terms";
import { TermsProps } from "./Terms.types";

describe("Test Component", () => {
  let props: TermsProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<Terms {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Terms");

    expect(true).toBeTruthy();
  });
});
