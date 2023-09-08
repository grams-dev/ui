import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MarkdownView from "./MarkdownView";

const meta: Meta<typeof MarkdownView> = {
  title: "Views/MarkdownView",
  component: MarkdownView,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof MarkdownView>;

export const Primary: Story = {
};
