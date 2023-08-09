import React, {
  useState
} from "react";

import { PageProps } from "./Page.types";

const Page: React.FC<PageProps> = ({ className, children }) => (
    <div
      data-testid="Page"
      className={ className || "page" }
    >
    </div>
);

export default Page;
