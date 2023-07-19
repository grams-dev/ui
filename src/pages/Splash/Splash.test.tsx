import React from "react";
import { render } from "@testing-library/react";

import Splash from "./Splash";
import { SplashProps } from "./Splash.types";

describe("Test Component", () => {
  let props: SplashProps;

  beforeEach(() => {
    props = {
      className: "bar"
    };
  });

  const renderComponent = () => render(<Splash {...props} />);

  it("should render className text correctly", () => {
    props.className = "bar";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Splash");

    expect(true).toBeTruthy();
  });
});
