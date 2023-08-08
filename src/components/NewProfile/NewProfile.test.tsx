import React from "react";
import { render } from "@testing-library/react";

import NewProfile from "./NewProfile";
import { NewProfileProps } from "./NewProfile.types";

describe("Test Component", () => {
  let props: NewProfileProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<NewProfile {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("NewProfile");

    expect(true).toBeTruthy();
  });
});
