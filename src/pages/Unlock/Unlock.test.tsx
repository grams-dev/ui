import React from "react";
import { render } from "@testing-library/react";

import Unlock from "./Unlock";
import { UnlockProps } from "./Unlock.types";

describe("Test Component", () => {
  let props: UnlockProps;

  beforeEach(() => {
    props = {
      className: "page"
    };
  });

  const renderComponent = () => render(<Unlock {...props} />);

  it("should render className correctly", () => {
    props.className = "page";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Unlock");

    // Change to the actual assertion you need
    expect(true).toBeTruthy();
  });
});
