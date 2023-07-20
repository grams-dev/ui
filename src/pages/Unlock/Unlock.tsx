import React, {
  useState,
  useEffect
} from "react";

import { UnlockProps } from "./Unlock.types";

import "./Unlock.css";

const Unlock: React.FC<UnlockProps> = ({ className }) => {
  return (
    <div 
      data-testid='Unlock'
      className={ className || 'page-Unlock' }
    >
      // Go nuts :)
    </div>
  );
};

export default Unlock;
