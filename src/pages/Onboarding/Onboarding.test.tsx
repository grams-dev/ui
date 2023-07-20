import React from "react";
import { render } from "@testing-library/react";

import Onboarding from "./Onboarding";
import { OnboardingProps } from "./Onboarding.types";

describe("Test Component", () => {
  let props: OnboardingProps;

  beforeEach(() => {
    props = {
      className: "page"
    };
  });

  const renderComponent = () => render(<Onboarding {...props} />);

  it("should render className correctly", () => {
    props.className = "page";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Onboarding");

    // Change to the actual assertion you need
    expect(true).toBeTruthy();
  });
});
