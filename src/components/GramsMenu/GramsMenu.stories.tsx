import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import GramsMenu from "./GramsMenu";

const meta: Meta<typeof GramsMenu> = {
  title: "Components/GramsMenu",
  component: GramsMenu,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof GramsMenu>;

export const Primary: Story = {
};
