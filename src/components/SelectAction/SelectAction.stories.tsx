import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SelectAction from "./SelectAction";
import { SelectActionProps } from "./SelectAction.types";
import { Button } from "semantic-ui-react";

const meta: Meta<typeof SelectAction> = {
  title: "Selection/SelectAction",
  component: SelectAction,
  tags: ["autodocs"]
};

export default meta;

const DefaultActions: ReactNode = (
  <Button.Group icon>
    <Button basic primary icon='send' />
    <Button basic primary icon='check' />
  </Button.Group>
)

const DefaultValues: SelectActionProps = {
  actions: [
    {
      title: "First Item",
      description: "Description for the first item",
      image: "https://assets.grams.dev/img/ui/Wallet/mint.png",
      children: DefaultActions
    },
    {
      title: "Second Item",
      description: "Description for the second item",
      image: "https://assets.grams.dev/img/ui/Wallet/receive.png",
      children: DefaultActions
    }
  ]
}

type Story = StoryObj<typeof SelectAction>;

export const Primary: Story = {
  args: DefaultValues
};
