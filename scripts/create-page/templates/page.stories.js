module.exports = (pageName) => ({
  content: `import React from "react";
import ${pageName} from "./${pageName}";

export default {
    title: "Pages/${pageName}"
};

export const WithoutCSS = () => <${pageName} className="" />;
`,
  extension: `.stories.tsx`
});
