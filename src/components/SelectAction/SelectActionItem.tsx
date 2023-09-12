import React, {
  useState
} from "react";

import {
  Image,
  List
} from "semantic-ui-react";

import { SelectActionItemProps } from "./SelectAction.types";
import { useTranslation } from "react-i18next";

/**
 * Allows users to select an action from a button group or dropdown per list item.
 */
const SelectActionItem: React.FC<SelectActionItemProps> = ({
  children,
  circular,
  image,
  size = 'mini',
  title,
  description
}) => {

  const { i18n } = useTranslation();
  const direction = i18n.dir() === 'ltr' ? 'right' : 'left';

  return (
    <List.Item
      data-testid="SelectAction"
    >
      { image && <Image circular={circular} src={image} size={size} verticalAlign="middle" /> }
      <List.Content>
        <List.Header>{title}</List.Header>
        <List.Description>{description}</List.Description>
      </List.Content>
      { children && (
        <List.Content floated={direction}>
          { children }
        </List.Content>
      )}
    </List.Item>
  );
}

export default SelectActionItem;
