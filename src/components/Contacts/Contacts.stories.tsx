import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Contacts from "./Contacts";
import { ContactProps } from "./Contacts.types";

const meta: Meta<typeof Contacts> = {
  title: "Modules/Contacts",
  component: Contacts,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Contacts>;

const DefaultContacts: ContactProps[] = [
  {
    name: "John",
    address: "rms1qrrv7flg6lz5cssvzv2lsdt8c673khad060l4quev6q09tkm9mgtupgf0h0"
  },
  {
    name: "Water Bill",
    address: "rmszlrrv7flg6lz5cssvzv2lsdt8c673khad060l4quev6q09tkm9mgtupg21s4",
    verified: true
  }
]

export const Primary: Story = {
  args: {
    contacts: DefaultContacts,
    title: "Contacts"
  }
};
