import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Profile from "./Profile";

const meta: Meta<typeof Profile> = {
  title: "Elements/Profile",
  component: Profile,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const Primary: Story = {
  args: {
      name: "Profile"
  }
};

export const Developer: Story = {
  args: {
      name: "Profile",
      developer: true
  }
};
