module.exports = (componentName) => ({
  content: `import React, {
  useState
} from "react";

import { ${componentName}Props } from "./${componentName}.types";

/**
 * A component description
 */
const ${componentName}: React.FC<${componentName}Props> = ({
}) => {
  return (
    <div
      data-testid="${componentName}"
    >
    </div>
  );
}

export default ${componentName};
`,
  extension: `.tsx`
});
