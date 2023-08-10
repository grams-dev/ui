import React, {
  useState
} from "react";

import { PageProps } from "./Page.types";
import { Grid } from "semantic-ui-react";

/**
 * You can define the content of the page by providing either the `content` or `children` property.
 */
const Page: React.FC<PageProps> = ({ className, children }) => (
  <Grid
    data-testid="Page"
    centered
    verticalAlign="middle"
  >
    <Grid.Column
      className={className}
    >
      { children }
    </Grid.Column>
  </Grid>
);
//"ui middle aligned center aligned grid"
export default Page;
