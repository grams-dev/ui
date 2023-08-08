module.exports = (componentName) => ({
  content: `import React from "react";

import { ${componentName}Props } from "./${componentName}.types";

import "./${componentName}.css";

const ${componentName}: React.FC<${componentName}Props> = ({ className }) => (
    <div
      data-testid="${componentName}"
      className="${componentName.toLowerCase()}-component"
    >
    </div>
);

export default ${componentName};
`,
  extension: `.tsx`
});
