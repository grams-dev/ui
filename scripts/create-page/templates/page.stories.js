module.exports = (pageName) => ({
  content: `import React from "react";
import ${pageName} from "./${pageName}";

export default {
    title: "${pageName}"
};

export const WithBar = () => <${pageName} foo="bar" />;

`,
  extension: `.stories.tsx`
});
