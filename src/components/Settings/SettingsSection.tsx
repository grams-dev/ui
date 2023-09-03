import React from "react";

import {
    Segment
} from "semantic-ui-react";

import { SettingsSectionProps } from "./Settings.types";

/**
 * Settings section sub-component to encapsulate settings items.
 */
const SettingsSection: React.FC<SettingsSectionProps> = ({
    basic = false,
    children,
    title
}: SettingsSectionProps) => {

    return (
        <Segment basic={basic}>
            <h2>{title}</h2>
            {children}
        </Segment>
    );
};

export default SettingsSection;
