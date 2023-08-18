import React, {
  useState
} from "react";

import { ActionProps } from "./Action.types";

/**
 * A component description
 */
const Action: React.FC<ActionProps> = ({
  children
}) => {
  return (
    <div
      data-testid="Action"
    >
      { children }
    </div>
  );
}

export default Action;
