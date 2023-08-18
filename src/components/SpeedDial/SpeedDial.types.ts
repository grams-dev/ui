import { ReactNode } from "react";
import { SemanticCOLORS, SemanticICONS, SemanticSIZES } from "semantic-ui-react";

export type SpeedDialAction = {
  name?: string;
  icon?: SemanticICONS;
  action?: () => void;
}
/**
  * The props used by SpeedDial
  */
export interface SpeedDialProps {
  children: ReactNode;
  color?: SemanticCOLORS;
  event?: 'click' | 'hover';
  icon?: ReactNode;
  size?: SemanticSIZES;
  showTitles?: boolean;
}
