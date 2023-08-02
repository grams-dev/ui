import React, {
  useEffect
} from "react";

import { Image } from 'semantic-ui-react';

import { SplashProps } from "./Splash.types";

import "./Splash.css";

const Splash: React.FC<SplashProps> = ({ className, image, size, onLoad }) => {

  useEffect(() => {
    onLoad?.();
  });

  return (
    <div
      data-testid="Splash"
      className={className || 'page'}
    >
      <Image 
        className="loader"
        size={size || "large"}
        src={image || "https://assets.grams.dev/logo/loader.logo.gif"}
      />
    </div>
  );
};

export default Splash;
