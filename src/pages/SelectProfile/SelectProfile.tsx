import React, {
  useState,
  useEffect
} from "react";
import { useTranslation } from 'react-i18next';

import { List } from 'semantic-ui-react';

import Profile from '../../components/Profile';

import { SelectProfileProps } from "./SelectProfile.types";

import "./SelectProfile.css";

const SelectProfile: React.FC<SelectProfileProps> = ({
  className,
  profiles,
  horizontal,
  createNew = true,
  newImage,
  onSelect,
  onCreate
}) => {

  const { t, i18n } = useTranslation();

  return (
    <div
      data-testid='SelectProfile'
      className={className || 'selectprofile-page'}
    >
      <div className='selectprofile-content'>
        <List
          horizontal={horizontal}
          relaxed
          size="big"
        >
          {profiles?.map(profile => <Profile {...profile} onSelect={onSelect} />)}
          {createNew && <Profile id="new-profile" name="New" image={newImage} onSelect={onCreate} />}
        </List>
      </div>
    </div>
  );
};

export default SelectProfile;
