import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Terms from "./Terms";

const meta: Meta<typeof Terms> = {
  title: "Components/Terms",
  component: Terms,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Terms>;

export const Primary: Story = {
};
