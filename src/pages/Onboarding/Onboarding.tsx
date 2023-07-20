import React, {
  useState,
  useEffect
} from "react";

import { OnboardingProps } from "./Onboarding.types";

import "./Onboarding.css";

const Onboarding: React.FC<OnboardingProps> = ({ className }) => {
  return (
    <div 
      data-testid='Onboarding'
      className={ className || 'page-Onboarding' }
    >
      // Go nuts :)
    </div>
  );
};

export default Onboarding;
