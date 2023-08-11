import { SemanticSIZES } from "semantic-ui-react";

/**
 * Properties for the Unlock component.
 */
export interface UnlockProps {
    /** Indicates if the unlock interface should be displayed in a basic segment. */
    basic?: boolean;

    /** The name associated with the unlock method. */
    name?: string;

    /** The URL of the image to be displayed on the unlock screen. */
    image?: string;

    /** Specifies the method of unlocking, either by PIN or password. */
    method?: 'pin' | 'password';

    /** A regular expression to validate the entered unlock credential. */
    rule?: RegExp;

    /** 
     * Defines the size of the component. It can take values from Semantic UI's sizes.
     */
    size?: SemanticSIZES;

    /** A callback function that is triggered when the unlock operation is executed. */
    onUnlock?: (credential: string) => void;
}
