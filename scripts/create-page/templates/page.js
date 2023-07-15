module.exports = (pageName) => ({
  content: `import React, {
  useState,
  useEffect
} from "react";

import { NotificationContainer } from 'react-notifications';

import "./${pageName}.css";

const ${pageName}: React.FC = () => {
  return (
    <div className='page'>
      <NotificationContainer/>
    </div>
  );
};

export default ${pageName};

`,
  extension: `.tsx`
});
