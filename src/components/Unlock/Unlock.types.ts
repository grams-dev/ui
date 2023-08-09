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

    /** A callback function that is triggered when the unlock operation is executed. */
    onUnlock?: (credential: string) => void;
}
