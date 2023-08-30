import { SemanticCOLORS, SemanticSIZES } from "semantic-ui-react";

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

    /** Indicates the color of the developer label. Defaults to grey */
    labelColor?: SemanticCOLORS;

    /** Indicates the color of the developer label. Defaults to grey */
    labelSize?: SemanticSIZES;

    /** Indicates the color of the developer label. Defaults to grey */
    labelText?: string;

    /** The size of the profile. Defaults to 'tiny' */
    size?: SemanticSIZES;

    /** A callback function that is triggered when the profile is selected. */
    onSelect?: (id: string) => void;
}
