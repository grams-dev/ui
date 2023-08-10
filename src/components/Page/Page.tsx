import React, {
  useState
} from "react";
import { useTranslation } from "react-i18next";

import { Grid } from "semantic-ui-react";

import { PageProps } from "./Page.types";

/**
 * You can define the content of the page by providing either the `content` or `children` property.
 */
const Page: React.FC<PageProps> = ({ 
  centered, 
  className, 
  children, 
  full, 
  wide 
}) => {

  const { i18n } = useTranslation();

  const textAlignment = centered ? "center" : i18n.dir() === 'ltr' ? "left" : "right";

  return (
    <Grid
      data-testid="Page"
      centered
      className="page"
      verticalAlign="middle"
    >
      <Grid.Column
        className={`${className} ${wide && 'wide'} ${full && 'full'}`}
        textAlign={textAlignment}
      >
        { children }
      </Grid.Column>
    </Grid>
  );
}

export default Page;
