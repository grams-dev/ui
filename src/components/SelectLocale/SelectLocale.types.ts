import { FlagNameValues, SemanticSIZES } from 'semantic-ui-react';

/**
 * Defines the properties for the SelectLocale component, allowing users to choose a locale from a list of options.
 */
export interface SelectLocaleProps {
    /** 
     * If set to true, applies a basic style to the component.
     */
    basic?: boolean;

    /** 
     * An array of locale options to be displayed.
     */
    locales?: LocaleOption[];

    /** 
     * Defines the size of the component. It can take values from Semantic UI's sizes.
     */
    size?: SemanticSIZES;

    /** 
     * A callback function that is triggered when a locale is selected.
     */
    onSelect?: (locale: string) => void;

    /** 
     * A callback function that is triggered when a locale is confirmed.
     */
    onConfirm?: (locale: string) => void;
}

/**
 *  Represents a single locale option in the SelectLocale component.
 */
export type LocaleOption = {
    /** 
     * The unique identifier for the locale option.
     */
    key: string;

    /** 
     * The value associated with the locale option.
     */
    value: string;

    /** 
     * The display text for the locale option.
     */
    text: string;

    /** 
     * The flag name value for the locale option.
     */
    flag: FlagNameValues;
}
