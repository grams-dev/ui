import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SelectMethod from "./SelectMethod";

const meta: Meta<typeof SelectMethod> = {
  title: "Selection/SelectMethod",
  component: SelectMethod,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof SelectMethod>;

export const Primary: Story = {
};

export const Basic: Story = {
  args: {
    basic: true
  }
};

export const Mobile: Story = {
  args: {
    mobile: true
  }
};
