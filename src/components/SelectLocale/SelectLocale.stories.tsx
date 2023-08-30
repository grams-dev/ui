import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SelectLocale from "./SelectLocale";

const meta: Meta<typeof SelectLocale> = {
  title: "Forms/SelectLocale",
  component: SelectLocale,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof SelectLocale>;

export const Primary: Story = {
};

export const Basic: Story = {
  args: {
    basic: true
  }
};

export const Minified: Story = {
  args: {
    basic: true,
    icon: true,
    simple: true
  }
};
