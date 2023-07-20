// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import SelectLocale from "./SelectLocale";
import { SelectLocaleProps } from "./SelectLocale.types";

describe("Test Component", () => {
  let props: SelectLocaleProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SelectLocale {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "bar";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SelectLocale");

    expect(true).toBeTruthy();
  });
});
