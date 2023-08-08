import React, {
  useState,
  useEffect
} from "react";

import { OnboardingProps } from "./Onboarding.types";

import "./Onboarding.css";
import SelectMethod from "../../components/SelectMethod";
import NewProfile from "../../components/NewProfile/NewProfile";

const Onboarding: React.FC<OnboardingProps> = ({
  className,
  basic = false,
  size,
  methods
}) => {
  const [step, setStep] = useState("method");

  const wizard = {
    "method": <SelectMethod basic={basic} size={size} methods={methods} onSelect={id => setStep(id)} />,
    "new": <NewProfile basic={basic} />
  }

  return (
    <div
      data-testid='Onboarding'
      className={className || 'onboarding-page'}
    >
      <div className='onboarding-content'>
        { wizard[step] }
      </div>
    </div>
  );
};

export default Onboarding;
