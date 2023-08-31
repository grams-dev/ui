import { SemanticSIZES } from "semantic-ui-react";

/**
 * Represents a single method in the SelectMethod component.
 */
export type Item = {
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
    image?: string;
}

/**
  * The props used by SelectItem
  */
export interface SelectItemProps {

  /**
   * A list can show divisions between content.
   */
  divided?: boolean;

  /**
   * If set to true, the component will allow selection.
   */
  selection?: boolean;

  /**
   * Defines the size of the component. It can take values from Semantic UI's sizes.
   */
  size?: SemanticSIZES;

  /**
   * An array of items to be displayed.
   */
  items?: Item[];

  /**
   * A callback function that is triggered when a method is selected.
   */
  onSelect?: (id: string) => void;
}
