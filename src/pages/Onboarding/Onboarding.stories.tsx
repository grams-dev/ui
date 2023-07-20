import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Onboarding from "./Onboarding";

const meta: Meta<typeof Onboarding> = {
  title: "Pages/Onboarding",
  component: Onboarding,
  argTypes: {
      className: {
          control: "text"
      }
  },
};

export default meta;

type Story = StoryObj<typeof Onboarding>;

export const Primary: Story = {
  args: {
      className: 'page',
  },
};
