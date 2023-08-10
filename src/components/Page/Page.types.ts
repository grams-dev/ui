import React from "react";

/**
 * Defines the properties for a page component.
 */
export interface PageProps {

    /**
     * Overwrite CSS classes that can be applied to the content.
     */
    className?: string;

    /**
     * Content to be rendered on at the center of the page.
     */
    children?: React.ReactNode;
}
