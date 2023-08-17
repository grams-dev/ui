import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SpeedDial from "./SpeedDial";

const meta: Meta<typeof SpeedDial> = {
  title: "Components/SpeedDial",
  component: SpeedDial,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof SpeedDial>;

export const Primary: Story = {
};
