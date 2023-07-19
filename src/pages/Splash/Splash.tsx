import React, {
  useState,
  useEffect
} from "react";

import { Grid, Image } from 'semantic-ui-react';

import { SplashProps } from "./Splash.types";

import "./Splash.css";

const Splash: React.FC<SplashProps> = ({ className, onLoad }) => {

  useEffect(() => {
    onLoad?.();
  });

  return (
    <Grid
      verticalAlign="middle"
      className={className || 'page'}
    >
      <Grid.Column>
      </Grid.Column>
    </Grid>
  );
};

export default Splash;
