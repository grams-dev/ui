import React from "react";
import { useTranslation } from "react-i18next";

import { Grid } from "semantic-ui-react";

import { PageProps } from "./Page.types";
import { useInverted } from "../../hooks";

/**
 * A basic component used to display the content of the page in a grid.
 */
const Page: React.FC<PageProps> = ({ 
  centered,
  className = 'content',
  children,
  empty = false,
  full,
  verticalAlign = 'middle',
  wide
}) => {

  const { i18n } = useTranslation();
  const inverted = useInverted();

  const textAlignment = centered ? "center" : i18n.dir() === 'ltr' ? "left" : "right";

  return (
    <Grid
      data-testid="Page"
      centered
      className="page"
      verticalAlign={verticalAlign}
      inverted={inverted}
    >
      { !empty &&
        <Grid.Column
          className={`${className} ${wide && 'wide'} ${full && 'full'}`}
          textAlign={textAlignment}
        >
          { children }
        </Grid.Column>
      }
      { empty && children }
    </Grid>
  );
}

export default Page;
