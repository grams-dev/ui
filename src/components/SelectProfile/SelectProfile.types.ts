import { SemanticSIZES } from "semantic-ui-react";
import { ProfileProps } from "../../components/Profile/Profile.types";

/**
 * Defines the properties for the SelectProfile component, allowing users to choose a profile from a list of options.
 */
export interface SelectProfileProps {
    /**
     * If set to true, applies a basic style to the component.
     */
    basic?: boolean;

    /**
     * An array of profile options to be displayed.
     */
    profiles?: ProfileProps[];

    /**
     * If set to true, the component will display the profiles horizontally.
     */
    horizontal?: boolean;

    /**
     * If set to true, enables the option to create a new profile.
     */
    createNew?: boolean;

    /**
     * The URL of the image to be displayed for the 'create new' option.
     */
    newImage?: string;

    /** 
     * Defines the size of the component. It can take values from Semantic UI's sizes.
     */
    size?: SemanticSIZES;

    /**
     * A callback function that is triggered when a profile is selected.
     */
    onSelect?: (id: string) => void;

    /**
     * A callback function that is triggered when the 'create new' option is selected.
     */
    onCreate?: () => void;
}
