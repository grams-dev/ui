import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SelectProfile from "./SelectProfile";
import { ProfileProps } from "../../components/Profile/Profile.types";

const meta: Meta<typeof SelectProfile> = {
  title: "Pages/SelectProfile",
  component: SelectProfile
};

export default meta;

type Story = StoryObj<typeof SelectProfile>;

export const Primary: Story = {
};

const populatedProfiles: ProfileProps[] =  [
  {
    id: "stefan",
    name: "Stefan",
    image: "https://api.multiavatar.com/stefan.svg"
  },
  {
    id: "zoe",
    name: "Zoe",
    image: "https://api.multiavatar.com/zoe.svg"
  }
]

export const Populated: Story = {
  args: {
    profiles: populatedProfiles
  }
}

export const Horizontal: Story = {
  args: {
    profiles: populatedProfiles,
    horizontal: true
  }
}
