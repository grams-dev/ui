import React from "react";
import { render } from "@testing-library/react";

import Profile from "./Profile";
import { ProfileProps } from "./Profile.types";

describe("Test Component", () => {
  let props: ProfileProps;

  beforeEach(() => {
    props = {
    };
  });

  const renderComponent = () => render(<Profile {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Profile");

    expect(true).toBeTruthy();
  });
});
