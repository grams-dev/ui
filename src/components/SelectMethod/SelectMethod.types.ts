import { SemanticSIZES } from "semantic-ui-react";

/**
 * Represents a single method in the SelectMethod component.
 */
export type Method = {
    /**
     * The unique identifier for the method.
     */
    id: string;

    /**
     * The header or title of the method.
     */
    header: string;

    /**
     * The description for the method. Optional.
     */
    description?: string;

    /**
     * The URL of the method's image.
     */
    image: string;
}

/**
 * Defines the properties for the SelectMethod component, allowing users to choose a method from a list of options.
 */
export interface SelectMethodProps {
    /**
     * If set to true, applies a basic style to the component.
     */
    basic?: boolean;

    /**
     * A list can show divisions between content.
     */
    divided?: boolean;

    /**
     * If set, return only the options to create new profile, or import a 24-word seed.
     */
    mobile?: boolean;

    /**
     * If set to true, the component will allow selection.
     */
    selection?: boolean;

    /**
     * Defines the size of the component. It can take values from Semantic UI's sizes.
     */
    size?: SemanticSIZES;

    /**
     * An array of method options to be displayed.
     */
    methods?: Method[];

    /**
     * A callback function that is triggered when a method is selected.
     */
    onSelect?: (id: string) => void;
}
