module.exports = (pageName) => ({
  content: `import React, {
  useState,
  useEffect
} from "react";

import { ${pageName}Props } from "./${pageName}.types";

import "./${pageName}.css";

const ${pageName}: React.FC<${pageName}Props> = ({ className }) => {
  return (
    <div 
      data-testid='${pageName}'
      className={ className || 'page-${pageName}' }
    >
      // Go nuts :)
    </div>
  );
};

export default ${pageName};
`,
  extension: `.tsx`
});
