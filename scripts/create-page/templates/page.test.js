module.exports = (pageName) => ({
  content: `import React from "react";
import { render } from "@testing-library/react";

import ${pageName} from "./${pageName}";
import { ${pageName}Props } from "./${pageName}.types";

describe("Test Page", () => {
  let props: ${pageName}Props;

  beforeEach(() => {
    props = {
      className: "page"
    };
  });

  const renderPage = () => render(<${pageName} {...props} />);

  it("should render className correctly", () => {
    props.className = "page";
    const { getByTestId } = renderPage();

    const page = getByTestId("${pageName}");

    // Change to the actual assertion you need
    expect(true).toBeTruthy();
  });
});
`,
  extension: `.test.tsx`
});
