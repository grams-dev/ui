import React from "react";
import { render } from "@testing-library/react";

import Page from "./Page";
import { PageProps } from "./Page.types";

describe("Test Component", () => {
  let props: PageProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<Page {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Page");

    expect(true).toBeTruthy();
  });
});
