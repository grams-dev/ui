import { FlagNameValues } from 'semantic-ui-react';

export interface SelectLocaleProps {
    basic?: boolean;
    className?: string;
    onSelect?: (locale: string) => void;
    onConfirm?: (locale: string) => void;
}

export type LocaleOption = {
    key: string;
    value: string;
    text: string;
    flag: FlagNameValues;
}