import React, {
  useState
} from "react";

import { SpeedDialProps } from "./SpeedDial.types";

import {
  Button,
  Dropdown,
  Menu
} from 'semantic-ui-react';

import {
  BsPersonCircle
} from 'react-icons/bs';

/**
 * When pressed, a floating action button can display in the form of a Speed Dial.
 */
const SpeedDial: React.FC<SpeedDialProps> = ({
  color,
  icon = 'angle up',
  size = 'large',
  upward = false,
}) => {

  const iconClass = 'icon';

  return (
    <div
      data-testid="SpeedDial"
    >
    </div>
  )
  /*return (
    <Dropdown
      icon={false}
      data-testid="SpeedDial"
      floating
      trigger={
        <Button color={color} circular size={size} icon={icon}></Button>
      }
      upward={upward}
    >
      <Dropdown.Menu className="speeddial">
      <Button circular icon="add" />
        <Dropdown.Item><BsPersonCircle className={iconClass} />New Wallet</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );*/
}

export default SpeedDial;
