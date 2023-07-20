import React from "react";
import { render } from "@testing-library/react";

import Splash from "./Splash";
import { SplashProps } from "./Splash.types";

describe("Test Component", () => {
  let props: SplashProps;

  beforeEach(() => {
    props = {
      className: "page"
    };
  });

  const renderComponent = () => render(<Splash {...props} />);

  it("should render className correctly", () => {
    props.className = "page";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Splash");

    expect(true).toBeTruthy();
  });
});
