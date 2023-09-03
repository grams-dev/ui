import React from "react";

import SettingsAction from "./SettingsAction";

import { SettingsItemProps } from "./Settings.types";

/**
 * Settings item sub-component for individual settings options.
 */
const SettingsItem: React.FC<SettingsItemProps> = ({
    action,
    children,
    description,
    header,
    size='large'
}: SettingsItemProps) => {

    return (
        <div>
          <h3>{header}</h3>
          <p>{description}</p>
          { action && <SettingsAction size={size} {...action} /> }
          {children}
        </div>
    );
};

export default SettingsItem;
