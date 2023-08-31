import React, {
  useState,
  useEffect
} from "react";
import { useTranslation } from 'react-i18next';

import { List, Segment } from 'semantic-ui-react';

import { Profile } from '../../components/Profile';

import { SelectProfileProps } from "./SelectProfile.types";

/**
 * Allows users to choose a profile from a list of options. Can be rendered horizontally or vertically
 */
const SelectProfile: React.FC<SelectProfileProps> = ({
  basic = false,
  profiles,
  horizontal,
  createNew = true,
  newImage = 'https://assets.grams.dev/img/ui/SelectProfile/add.png',
  size = 'big',
  onSelect,
  onCreate
}) => {

  const { t, i18n } = useTranslation();

  return (
    <Segment
      data-testid="SelectProfile"
      basic={basic}
      textAlign="center"
    >
      <List
        horizontal={horizontal}
        relaxed
        size={size}
      >
        {profiles?.map(profile => <Profile key={profile.id} {...profile} onSelect={onSelect} />)}
        {createNew && 
        <Profile 
          id="new-profile" 
          name={t("ui:selectProfile.new")} 
          image={newImage} 
          onSelect={onCreate} 
        />}
      </List>
    </Segment>
  );
};

export default SelectProfile;
