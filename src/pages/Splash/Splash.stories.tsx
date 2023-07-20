import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Splash from "./Splash";

const meta: Meta<typeof Splash> = {
    title: "Pages/Splash",
    component: Splash,
    argTypes: {
        className: {
            control: "text"
        }
    },
};

export default meta;

type Story = StoryObj<typeof Splash>;

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
