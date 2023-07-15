module.exports = (pageName) => ({
  content: `// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ${pageName} from "./${pageName}";
import { ${pageName}Props } from "./${pageName}.types";

describe("Test Component", () => {
  let props: ${pageName}Props;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<${pageName} {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("${pageName}");

    expect(component).toHaveTextContent("harvey was here");
  });
});
`,
  extension: `.test.tsx`
});
