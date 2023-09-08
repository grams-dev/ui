import React from "react";
import { render } from "@testing-library/react";

import MarkdownView from "./MarkdownView";
import { MarkdownViewProps } from "./MarkdownView.types";

describe("Test Component", () => {
  let props: MarkdownViewProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<MarkdownView {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("MarkdownView");

    expect(true).toBeTruthy();
  });
});
