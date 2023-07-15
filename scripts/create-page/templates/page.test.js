module.exports = (pageName) => ({
  content: `import React from "react";
import { render } from "@testing-library/react";

import ${pageName} from "./${pageName}";
import { ${pageName}Props } from "./${pageName}.types";

describe("Test Component", () => {
  let props: ${pageName}Props;

  beforeEach(() => {
    props = {
      className: "bar"
    };
  });

  const renderComponent = () => render(<${pageName} {...props} />);

  it("should render className text correctly", () => {
    props.className = "bar";
    const { getByTestId } = renderComponent();

    const component = getByTestId("${pageName}");

    expect(component).toHaveTextContent("bar");
  });
});
`,
  extension: `.test.tsx`
});
