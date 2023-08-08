import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import NewProfile from "./NewProfile";

const meta: Meta<typeof NewProfile> = {
  title: "Profile/NewProfile",
  component: NewProfile
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
