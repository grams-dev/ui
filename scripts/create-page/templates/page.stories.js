module.exports = (pageName) => ({
  content: `import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ${pageName} from "./${pageName}";

const meta: Meta<typeof ${pageName}> = {
  title: "Pages/${pageName}",
  component: ${pageName}
};

export default meta;

type Story = StoryObj<typeof ${pageName}>;

export const Primary: Story = {
};
`,
  extension: `.stories.tsx`
});
