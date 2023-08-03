module.exports = (pageName) => ({
  content: `import React, {
  useState,
  useEffect
} from "react";
import { useTranslation } from 'react-i18next';

import { ${pageName}Props } from "./${pageName}.types";

import "./${pageName}.css";

const ${pageName}: React.FC<${pageName}Props> = ({ className }) => {

  const { t, i18n } = useTranslation();
  
  return (
    <div 
      data-testid='${pageName}'
      className={ className || '${pageName.toLowerCase()}-page' }
    >
      <div className='${pageName.toLowerCase()}-content'>
        // Go nuts :)
      </div>
    </div>
  );
};

export default ${pageName};
`,
  extension: `.tsx`
});
