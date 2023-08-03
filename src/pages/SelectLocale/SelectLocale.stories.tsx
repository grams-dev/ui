import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SelectLocale from "./SelectLocale";

const meta: Meta<typeof SelectLocale> = {
  title: "Pages/SelectLocale",
  component: SelectLocale
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
