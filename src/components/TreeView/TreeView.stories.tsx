import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TreeView from "./TreeView";

const meta: Meta<typeof TreeView> = {
  title: "Views/TreeView",
  component: TreeView,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof TreeView>;

export const Primary: Story = {
};
