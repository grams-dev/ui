import React, {
  useState,
  useEffect
} from "react";
import { useTranslation } from 'react-i18next';

import { List, Segment } from 'semantic-ui-react';

import Profile from '../../components/Profile';

import { SelectProfileProps } from "./SelectProfile.types";

/**
 * Allows users to choose a profile from a list of options. Can be rendered horizontally or vertically
 */
const SelectProfile: React.FC<SelectProfileProps> = ({
  basic = false,
  profiles,
  horizontal,
  createNew = true,
  newImage = 'https://assets.grams.dev/img/SelectProfile/add.png',
  size = 'big',
  onSelect,
  onCreate
}) => {

  const { t, i18n } = useTranslation();

  return (
    <Segment
      data-testid="SelectProfile"
      basic={basic}
    >
      <List
        horizontal={horizontal}
        relaxed
        size={size}
      >
        {profiles?.map(profile => <Profile {...profile} onSelect={onSelect} />)}
        {createNew && <Profile id="new-profile" name={t("common:pages.selectProfile.new")} image={newImage} onSelect={onCreate} />}
      </List>
    </Segment>
  );
};

export default SelectProfile;
