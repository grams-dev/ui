import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Unlock from "./Unlock";

const meta: Meta<typeof Unlock> = {
  title: "Forms/Unlock",
  component: Unlock,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Unlock>;

/**
 * A default component
 */
export const Primary: Story = {
};

/**
 * A basic component
 */
export const Basic: Story = {
  args: {
      basic: true,
  },
};

/**
 * Unlock using a password
 */
export const Password: Story = {
  args: {
      method: "password",
  },
};
