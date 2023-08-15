import React from "react";
import { useTranslation } from 'react-i18next';

import {
  Image,
  List,
  Segment
} from 'semantic-ui-react';

import { Method, SelectMethodProps } from "./SelectMethod.types";

/**
 * Allows users to choose a method from a list of options. Defaults to the options for onboarding.
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
      header: t("common:onboarding.selectMethod.new.header"),
      description: t("common:onboarding.selectMethod.new.description"),
      image: "https://assets.grams.dev/img/SelectMethod/new.png"
    },
    {
      id: "seed",
      header: t("common:onboarding.selectMethod.seed.header"),
      description: t("common:onboarding.selectMethod.seed.description"),
      image: "https://assets.grams.dev/img/SelectMethod/seed.png"
    }
  ];

  if (!mobile) {
    DEFAULT_METHODS.push(...[
      {
        id: "import",
        header: t("common:onboarding.selectMethod.import.header"),
        description: t("common:onboarding.selectMethod.import.description"),
        image: "https://assets.grams.dev/img/SelectMethod/import.png"
      },
      {
        id: "hardware",
        header: t("common:onboarding.selectMethod.hardware.header"),
        description: t("common:onboarding.selectMethod.hardware.description"),
        image: "https://assets.grams.dev/img/SelectMethod/ledger.png"
      }
    ])
  }

  return (
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
  );
}

export default SelectMethod;