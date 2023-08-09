/**
 * Defines the properties for a profile object.
 */
export interface ProfileProps {
    /** The unique identifier for the profile. */
    id?: string;

    /** The name associated with the profile. */
    name?: string;

    /** The URL of the profile's image. */
    image?: string;

    /** Indicates whether the profile belongs to a developer. */
    developer?: boolean;

    /** A callback function that is triggered when the profile is selected. */
    onSelect?: (id: string) => void;
}
