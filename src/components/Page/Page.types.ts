import React from "react";
import { SemanticVERTICALALIGNMENTS } from "semantic-ui-react";

/**
 * Defines the properties for a page component.
 */
export interface PageProps {

    /**
     * Aligns the content of the page to the center.
     */
    centered?: boolean;

    /**
     * Overwrite CSS classes that can be applied to the content.
     */
    className?: string;

    /**
     * Content to be rendered on at the center of the page.
     */
    children?: React.ReactNode;

    /**
     * The content of the page take up the entire width.
     */
    full?: boolean;

    /**
     * Content to be rendered on the majority of the page.
     */
    verticalAlign?: SemanticVERTICALALIGNMENTS;

    /**
     * Content to be rendered on the majority of the page.
     */
    wide?: boolean;
}
