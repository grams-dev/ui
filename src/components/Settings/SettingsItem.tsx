import React from "react";

import SettingsAction from "./SettingsAction";

import { SettingsItemProps } from "./Settings.types";

/**
 * Settings item sub-component for individual settings options.
 */
const SettingsItem: React.FC<SettingsItemProps> = ({
    action,
    children,
    className,
    description,
    header,
    size='large'
}: SettingsItemProps) => {

    return (
        <div className={className}>
          <h3>{header}</h3>
          <p>{description}</p>
          { action && <SettingsAction size={size} {...action} /> }
          {children}
        </div>
    );
};

export default SettingsItem;
