import React, {
  useState
} from "react";

import {
  Grid,
  Icon,
  Input,
  List,
  Menu,
  Rail,
  Segment,
  Sidebar
} from 'semantic-ui-react';

import { 
    FaHome,
    FaPassport,
    FaWallet 
} from 'react-icons/fa';

import {
    HiHome
} from 'react-icons/hi';

import {
  BsBuildings
} from 'react-icons/bs';

import {
  RiNftFill
} from 'react-icons/ri';

import { GramsMenuProps } from "./GramsMenu.types";

/**
 * GramsMenu is sugar for semantic Grid.Column tailored for Grams.
 */
const GramsMenu: React.FC<GramsMenuProps> = ({
  active,
  setActive,
  developer = false,
  sideBar,
  developerBar,
  optionsBar
}) => {

  const onSelect = (i) => {
    setActive(i);
  }
  const [menu, setMenu] = useState(false);
  const [console, setConsole] = useState(false);
  const [options, setOptions] = useState(false);

  return (
    <Grid.Column width={2}>
      <List size="large" selection>
        <List.Item><HiHome color="#4c8dff" className='icon' size={'1.5em'} /></List.Item>
        <List.Item><FaWallet color="#4c8dff" className='icon' size={'1.5em'} /></List.Item>
        <List.Item><FaPassport color="#4c8dff" className='icon' size={'1.5em'} /></List.Item>
        <List.Item><BsBuildings color="#4c8dff" className='icon' size={'1.5em'} /></List.Item>
        <List.Item><RiNftFill color="#4c8dff" className='icon' size={'1.5em'} /></List.Item>
      </List>
    </Grid.Column>
  )
  /*return (
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
  );*/
}

export default GramsMenu;
