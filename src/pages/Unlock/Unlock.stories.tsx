import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Unlock from "./Unlock";

const meta: Meta<typeof Unlock> = {
  title: "Pages/Unlock",
  component: Unlock,
  argTypes: {
      className: {
          control: "text"
      }
  },
};

export default meta;

type Story = StoryObj<typeof Unlock>;

export const Primary: Story = {
  args: {
      className: 'page',
  },
};

export const Mobile: Story = {
  args: {
      className: 'mobile',
  },
};
