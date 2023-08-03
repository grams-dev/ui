import React from "react";
import { render } from "@testing-library/react";

import SelectLocale from "./SelectLocale";
import { SelectLocaleProps } from "./SelectLocale.types";

describe("Test Component", () => {
  let props: SelectLocaleProps;

  beforeEach(() => {
    props = {
      className: "page"
    };
  });

  const renderComponent = () => render(<SelectLocale {...props} />);

  it("should render className correctly", () => {
    props.className = "page";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SelectLocale");

    // Change to the actual assertion you need
    expect(true).toBeTruthy();
  });
});
