import React, {
  useState
} from "react";

import {
  Button,
  Dropdown,
  Menu
} from 'semantic-ui-react';

import {
  MdAdd
} from 'react-icons/md';

import { Fab, Action as FabAction } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';

import { ActionProps, Action as SDAction } from "./Action";
import { SpeedDialProps } from "./SpeedDial.types";

type ActionSpec = React.FC<ActionProps>;
export type SpeedDialSpec = React.FC<SpeedDialProps> & { Action: typeof SDAction };

/**
 * When pressed, a floating action button can display in the form of a Speed Dial.
 */
const SpeedDial: SpeedDialSpec = ({
  children,
  color,
  event = 'hover',
  icon,
  size = 'large',
  showTitles = true,
}) => {

  const iconClass = 'icon';

  const mainButtonStyles = {
    fill: 'white',
    backgroundColor: '#4c8dff'
  };

  return (
    <Fab
      mainButtonStyles={mainButtonStyles}
      icon={icon || <MdAdd />}
      alwaysShowTitle={showTitles}
    >
      {children}
    </Fab>
  )
}

SpeedDial.Action = SDAction;
export default SpeedDial;
