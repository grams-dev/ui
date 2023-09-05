import React from "react";
import { Button, Checkbox, Dropdown, Input } from "semantic-ui-react";
import { SettingsActionProps } from "./Settings.types";

/**
 * SettingsAction is a sub-component of the Settings component.
 * It renders different types of UI elements based on the 'type' prop.
 */
const SettingsAction: React.FC<SettingsActionProps> = ({
    className,
    type,
    confirmText,
    onChange,
    onConfirm,
    options,
    primary = true,
    text,
    size = "large",
    value
}) => {

    const modules = {
        'checkbox':
            <Checkbox
                label={text}
                checked={Boolean(value)}
                onChange={(e, data) => onChange?.(data.checked)}
            />,
        'dropdown':
            <Dropdown
                selection
                options={options || []}
                value={value}
                onChange={(e, data) => onChange?.(data.value)}
            />,
        'input':
            <Input
                size={size}
                defaultValue={value as string}
                onChange={(e, data) => onChange?.(data.value)}
            />,
        'password':
            <Input
                size={size}
                type="password"
                defaultValue={value as string}
                onChange={(e, data) => onChange?.(data.value)}
            />,
        'toggle':
            <Checkbox
                toggle
                label={text}
                checked={Boolean(value)}
                onChange={(e, data) => onChange?.(data.checked)}
            />
    }

    return (
        <div className={className}>
            {modules[type]}
            {confirmText &&
                <div>
                    <Button
                        size={size}
                        primary={primary}
                        onClick={() => onConfirm?.(value)}
                    >
                        {confirmText}
                    </Button>
                </div>
            }
        </div>
    );
};

export default SettingsAction;
