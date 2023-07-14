// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import SelectProfile from "./SelectProfile";
import { SelectProfileProps } from "./SelectProfile.types";

describe("Test Component", () => {
  let props: SelectProfileProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SelectProfile {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SelectProfile");

    expect(component).toHaveTextContent("harvey was here");
  });
});
