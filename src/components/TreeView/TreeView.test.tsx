import React from "react";
import { render } from "@testing-library/react";

import TreeView from "./TreeView";
import { TreeViewProps } from "./TreeView.types";

describe("Test Component", () => {
  let props: TreeViewProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<TreeView {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("TreeView");

    expect(true).toBeTruthy();
  });
});
