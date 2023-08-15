import React, {
  useState
} from "react";

import {
  Input,
  Menu
} from 'semantic-ui-react';

import { GramsMenuProps } from "./GramsMenu.types";

/**
 * GramsMenu is sugar for semantic Menu tailored for Grams.
 */
const GramsMenu: React.FC<GramsMenuProps> = ({
  active,
  setActive,
  developer = false,
  sideBar,
  developerBar,
  optionsBar
}) => {

  const [menu, setMenu] = useState(false);
  const [console, setConsole] = useState(false);
  const [options, setOptions] = useState(false);

  return (
    <div
      data-testid="GramsMenu"
    >
      <Menu
        attached='top'
        borderless
        inverted
      >
        <Menu.Item
          icon="bars"
          onClick={() => { setMenu(true) }}
        />
        <Menu.Item position='right' className='large-width'>
          <Input icon='search' placeholder='Search anything' />
        </Menu.Item>
        {developer && <><Menu.Item
          position='right'
          icon='code'
          onClick={() => { setConsole(true) }}
        />
          <Menu.Item
            icon="user"
            onClick={() => { setOptions(true) }}
          /></>}
        {!developer && <Menu.Item
          position='right'
          icon="user"
          onClick={() => { setOptions(true) }}
        />}
      </Menu>
    </div>
  );
}

export default GramsMenu;
