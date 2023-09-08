import React from "react";
import { render } from "@testing-library/react";

import Contacts from "./Contacts";
import { ContactsProps } from "./Contacts.types";

describe("Test Component", () => {
  let props: ContactsProps;

  beforeEach(() => {
  });

  const renderComponent = () => render(<Contacts {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Contacts");

    expect(true).toBeTruthy();
  });
});
