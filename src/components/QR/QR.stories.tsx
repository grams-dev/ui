import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import QR from "./QR";

const meta: Meta<typeof QR> = {
  title: "Modules/QR",
  component: QR,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof QR>;

export const Primary: Story = {
  args: {
    text: "https://storybook.grams.dev/"
  }
};
