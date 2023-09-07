import React from "react";
import { render } from "@testing-library/react";

import QR from "./QR";
import { QRProps } from "./QR.types";

describe("Test Component", () => {
  let props: QRProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<QR {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("QR");

    expect(true).toBeTruthy();
  });
});
