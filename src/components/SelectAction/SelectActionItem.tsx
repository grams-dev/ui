import React, {
  useState
} from "react";

import {
  Image,
  List
} from "semantic-ui-react";

import { SelectActionItemProps } from "./SelectAction.types";

/**
 * Allows users to select an action from a button group or dropdown per list item.
 */
const SelectActionItem: React.FC<SelectActionItemProps> = ({
  children,
  image,
  size = 'mini',
  title,
  description
}) => {

  return (
    <List.Item
      data-testid="SelectAction"
    >
      { image && <Image src={image} size={size} verticalAlign="middle" /> }
      <List.Content>
        <List.Header>{title}</List.Header>
        <List.Description>{description}</List.Description>
      </List.Content>
      { children && (
        <List.Content floated="right">
          { children }
        </List.Content>
      )}
    </List.Item>
  );
}

export default SelectActionItem;
