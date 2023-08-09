import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import NewProfile from "./NewProfile";

const meta: Meta<typeof NewProfile> = {
  title: "Forms/NewProfile",
  component: NewProfile,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NewProfile>;

export const Primary: Story = {
};

export const Advanced: Story = {
  args: {
    advanced: true
  }
};
