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
  color?: SemanticCOLORS;
  icon?: SemanticICONS;
  size?: SemanticSIZES;
  upward?: boolean;
}
