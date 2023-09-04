import React from "react";

import SettingsAction from "./SettingsAction";
import SettingsItem from "./SettingsItem";
import SettingsSection from "./SettingsSection";

import { SettingsProps, SettingsSectionProps, SettingsItemProps, SettingsActionProps } from "./Settings.types";
import { Divider } from "semantic-ui-react";

// Extend the functional component interface with custom sub-components
export type SettingsSpec = React.FC<SettingsProps> &
{ Section: React.FC<SettingsSectionProps> } &
{ Item: React.FC<SettingsItemProps> } &
{ Action: React.FC<SettingsActionProps> };

/**
 * The Settings component that serves as a container for all settings-related sub-components.
 * TODO:
 * - className for settings, item, action and section
 * - Radio type
 * - Add secondary and colored actions
 * - Section icon
 */
const Settings: SettingsSpec = ({
  settings,
  size='large'
}) => {

  // You can introduce state and additional logic here

  return (
    <div data-testid="Settings">
      {(settings || []).map((setting, idx) => (
        <div key={idx}>
          <Settings.Item
            key={setting.header}
            action={setting.action}
            header={setting.header}
            description={setting.description}
            children={setting.children}
            size={size}
          />
          {(idx < settings.length-1) && (
            <Divider />
          )}
        </div>
      ))}
    </div>
  );
};

/**
 * Settings section sub-component to encapsulate settings items.
 */
Settings.Section = SettingsSection;

/**
 * Settings action sub-component to render the UI element for the action.
 */
Settings.Action = SettingsAction;

/**
 * Settings item sub-component for individual settings options.
 */
Settings.Item = SettingsItem;

export default Settings;
