module.exports = (pageName) => ({
  content: `import React, {
  useState,
  useEffect
} from "react";

import { NotificationContainer } from 'react-notifications';

import { ${pageName}Props } from "./${pageName}.types";

import "./${pageName}.css";

const ${pageName}: React.FC<${pageName}Props> = ({ className }) => {
  return (
    <div 
      className={ className || 'page' }
    >
      <NotificationContainer/>
    </div>
  );
};

export default ${pageName};

`,
  extension: `.tsx`
});
