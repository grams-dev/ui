import React from "react";

import {
  Image,
  List
} from 'semantic-ui-react';

import { SelectItemProps } from "./SelectItem.types";
import { useInverted } from "../../hooks";

/**
 * Allows users to choose an item from a list of options.
 * 
 * Each item would contain an id, header, description, and image.
 */
const SelectItem: React.FC<SelectItemProps> = ({
  divided = false,
  selection = true,
  size = 'medium',
  items,
  onSelect
}) => {

  const inverted = useInverted();

  return (
    <List
      data-testid="SelectItem"
      divided={divided}
      size={size}
      selection={selection}
      inverted={inverted}
    >
      {(items || []).map(item => (
        <List.Item key={item.id} onClick={() => onSelect?.(item.id)} >
          {item.image && <Image avatar src={item.image} />}
          <List.Content>
            <List.Header>{item.header}</List.Header>
            <List.Description>{item.description}</List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
}

export default SelectItem;
