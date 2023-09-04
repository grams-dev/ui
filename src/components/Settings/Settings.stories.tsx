import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Settings from "./Settings";
import { SettingsItemProps } from "./Settings.types";

const meta: Meta<typeof Settings> = {
  title: "Modules/Settings",
  component: Settings,
  tags: ["autodocs"]
};

export default meta;

const GeneralSettings: SettingsItemProps[] = [
  {
    header: "Theme",
    description: "Toggle between light and dark mode, or match your system's theme.",
    action: {
      type: 'dropdown',
      options: [
        {
          key: 'dark',
          text: 'Dark'
        },
        {
          key: 'light',
          text: 'Light'
        },
        {
          key: 'system',
          text: 'System theme'
        }
      ],
      confirmText: 'Apply'
    }
  },
  {
    header: "External Connections",
    description: "Allow or block deep linking to external sites or apps.",
    action: {
      type: 'toggle'
    }
  }
]

type Story = StoryObj<typeof Settings>;

export const Primary: Story = {
  args: {
    settings: GeneralSettings
  }
};

export const Sectioned: Story = {
  args: {
    settings: GeneralSettings
  },
  decorators: [
    (Story) => (
      <Settings.Section title="General Settings">
        <Story />
      </Settings.Section>
    )
  ]
}

export const BasicSection: Story = {
  args: {
    settings: GeneralSettings
  },
  decorators: [
    (Story) => (
      <Settings.Section basic title="General Settings">
        <Story />
      </Settings.Section>
    )
  ]
}
