import React from "react";

import {
    Segment
} from "semantic-ui-react";

import { SettingsSectionProps } from "./Settings.types";
import { useInverted } from "../../hooks";

/**
 * Settings section sub-component to encapsulate settings items.
 */
const SettingsSection: React.FC<SettingsSectionProps> = ({
    basic = false,
    children,
    className,
    title
}: SettingsSectionProps) => {

    const inverted = useInverted();

    return (
        <Segment
            basic={basic}
            className={className}
            inverted={inverted}
        >
            <h2>{title}</h2>
            {children}
        </Segment>
    );
};

export default SettingsSection;
