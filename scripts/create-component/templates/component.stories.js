module.exports = (componentName) => ({
  content: `import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ${componentName} from "./${componentName}";

const meta: Meta<typeof ${componentName}> = {
  title: "Components/${componentName}",
  component: ${componentName}
};

export default meta;

type Story = StoryObj<typeof ${componentName}>;

export const Primary: Story = {
};
`,
  extension: `.stories.tsx`
});
