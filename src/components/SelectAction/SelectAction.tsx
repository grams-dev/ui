import React, {
  useState
} from "react";

import {
  List
} from "semantic-ui-react";

import { SelectActionItemProps, SelectActionProps } from "./SelectAction.types";
import { useInverted } from "../../hooks";
import SelectActionItem from "./SelectActionItem";

export type SelectActionSpec = React.FC<SelectActionProps> &
{ Item: React.FC<SelectActionItemProps> };

/**
 * Allows users to select an action from a button group or dropdown per list item.
 */
const SelectAction: SelectActionSpec = ({
  actions,
  circular,
  divided = true,
  relaxed = true,
  selection = true,
  size = 'large'
}) => {

  const inverted = useInverted();

  return (
    <List
      data-testid="SelectAction"
      divided={divided}
      inverted={inverted}
      relaxed={relaxed}
      selection={selection}
      size={size}
    >
      {(actions || []).map((action, idx) => (
        <SelectAction.Item
          key={idx}
          children={action.children}
          circular={ action.circular || circular }
          image={action.image}
          size={action.size}
          title={action.title}
          description={action.description}
        />
      ))}
    </List>
  );
};

SelectAction.Item = SelectActionItem;

export default SelectAction;
