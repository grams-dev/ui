import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ViewSeed from "./ViewSeed";

const meta: Meta<typeof ViewSeed> = {
  title: "Components/ViewSeed",
  component: ViewSeed,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof ViewSeed>;

export const Primary: Story = {
  args: {
    seed: "pistol maple duty lunch canyon critic kitten exact slice harvest plastic frequent curtain turkey adapt bounce virtual symptom goat robot merit lunch canyon critic"
  }
};
