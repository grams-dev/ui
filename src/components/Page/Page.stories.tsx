import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NewProfile, Unlock } from "../../";
import Page from "./Page";

const meta: Meta<typeof Page> = {
  title: "Layout/Page",
  component: Page,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Page>;

export const Primary: Story = {
  args: {
    children: <h2>Hello Page</h2>
  }
};

export const Empty: Story = {
  args: {
    empty: true,
    children: <h2>Hello Page</h2>
  }
};

export const UnlockPage: Story = {
  args: {
    children: <Unlock />
  }
}

export const NewProfilePage: Story = {
  args: {
    children: <NewProfile />
  }
}
