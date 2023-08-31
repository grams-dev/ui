import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SelectItem from "./SelectItem";
import { Item } from "./SelectItem.types";

const meta: Meta<typeof SelectItem> = {
  title: "Selection/SelectItem",
  component: SelectItem,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof SelectItem>;

const simpleItems: Item[] = [
  {
    id: "1",
    header: "first item"
  }, 
  {
    id: "2",
    header: "second item"
  }
]

const detailedItems: Item[] = [
  {
    id: "1",
    header: "first item",
    description: "This is a description for the first item",
    image: "https://assets.grams.dev/img/ui/SelectMethod/new.png"
  }, 
  {
    id: "2",
    header: "second item",
    description: "This is a description for the second item",
    image: "https://assets.grams.dev/img/ui/SelectMethod/seed.png"
  }
]

export const Primary: Story = {
  args: {
    items: detailedItems
  }
};

export const Simple: Story = {
  args: {
    items: simpleItems
  }
};
