import React, {
  useState,
  useEffect
} from "react";

import { Grid, Image } from 'semantic-ui-react';

import { motion } from "framer-motion";

import { SplashProps } from "./Splash.types";

import "./Splash.css";

const Splash: React.FC<SplashProps> = ({ className, onLoad }) => {

  useEffect(() => {
    onLoad?.();
  });

  return (
    <div data-testid="Splash">
      <Grid
        verticalAlign="middle"
        className={className || 'page'}
      >
        <Grid.Column>
          <Image size="small" src="https://assets.grams.dev/logo/logo.png" />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Splash;
