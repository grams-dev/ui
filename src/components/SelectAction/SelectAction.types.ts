import { ReactNode } from "react";
import { SemanticSIZES } from "semantic-ui-react";

export interface SelectActionItemProps {
  children?: ReactNode;
  image?: string;
  size?: SemanticSIZES;
  title?: string;
  description?: string;
}

/**
  * The props used by SelectAction
  */
export interface SelectActionProps {
  actions?: SelectActionItemProps[];
  divided?: boolean;
  relaxed?: boolean;
  selection?: boolean;
  size?: SemanticSIZES;
}
