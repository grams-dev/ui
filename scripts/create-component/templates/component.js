module.exports = (componentName) => ({
  content: `import React, {
  useState
} from "react";

import { ${componentName}Props } from "./${componentName}.types";

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
