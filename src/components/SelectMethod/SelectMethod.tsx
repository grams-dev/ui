import React from "react";
import { useTranslation } from 'react-i18next';

import {
  Segment
} from 'semantic-ui-react';

import { SelectItem } from "../SelectItem";

import { Method, SelectMethodProps } from "./SelectMethod.types";

/**
 * Allows users to choose an onboarding method from a list of options. This is sugar for `SelectItem`
 * 
 * Each method must be constructed using an id, header, description, and image.
 */
const SelectMethod: React.FC<SelectMethodProps> = ({
  basic = false,
  divided = false,
  mobile = false,
  selection = true,
  size = 'large',
  methods,
  onSelect
}) => {

  const { t, i18n } = useTranslation();

  const DEFAULT_METHODS: Method[] = [
    {
      id: "new",
      header: t("ui:selectMethod.new.header"),
      description: t("ui:selectMethod.new.description"),
      image: "https://assets.grams.dev/img/ui/SelectMethod/new.png"
    },
    {
      id: "seed",
      header: t("ui:selectMethod.seed.header"),
      description: t("ui:selectMethod.seed.description"),
      image: "https://assets.grams.dev/img/ui/SelectMethod/seed.png"
    }
  ];

  if (!mobile) {
    DEFAULT_METHODS.push(...[
      {
        id: "import",
        header: t("ui:selectMethod.import.header"),
        description: t("ui:selectMethod.import.description"),
        image: "https://assets.grams.dev/img/ui/SelectMethod/import.png"
      },
      {
        id: "hardware",
        header: t("ui:selectMethod.hardware.header"),
        description: t("ui:selectMethod.hardware.description"),
        image: "https://assets.grams.dev/img/ui/SelectMethod/ledger.png"
      }
    ])
  }

  return (
    <Segment
      dir={i18n.dir()}
      data-testid="SelectItem"
      basic={basic}
    >
      <SelectItem
        divided={divided}
        selection={selection}
        size={size}
        items={methods || DEFAULT_METHODS}
        onSelect={onSelect}
      />
    </Segment>
  );
}

export default SelectMethod;

/**
 * 
    <Segment
      dir={i18n.dir()}
      data-testid="SelectMethod"
      basic={basic}
    >
      <List
        divided={divided}
        size={size}
        selection={selection}
      >
        {(methods || DEFAULT_METHODS).map(method => (
          <List.Item key={method.id} onClick={() => onSelect?.(method.id)} >
            <Image avatar src={method.image} />
            <List.Content>
              <List.Header>{method.header}</List.Header>
              <List.Description>{method.description}</List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Segment>
 */