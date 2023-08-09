import { ProfileProps } from "../Profile/Profile.types";

/**
 * Data structure required to create a new profile.
 */
export type NewProfileRequest = {
    /** The properties of the profile being created. */
    profile: ProfileProps;
    /** The password associated with the profile. */
    password: string;
    /** The PIN code for additional security. */
    pin: number;
}

/**
 * Properties for the NewProfile component.
 */
export interface NewProfileProps {
    /** Makes the segment basic. Default is false. */
    basic?: boolean;
    /** Returns only the form without the segment, title, description. Default is false. */
    form?: boolean;
    /** Includes advanced options in the component. Default is false. */
    advanced?: boolean;
    /** Makes the component take the full width of its container. Default is false. */
    fluid?: boolean;
    /** Optional title for the component. */
    title?: string;
    /** Optional description for the component. */
    description?: string;
    /**
     * Callback function when the profile is created.
     * @param {NewProfileRequest} request The request object containing profile data.
     */
    onCreate?: (request: NewProfileRequest) => void;
}
