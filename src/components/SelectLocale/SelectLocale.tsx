import React, {
  useState,
  useEffect
} from "react";
import { useTranslation } from 'react-i18next';

import {
  Button,
  Dropdown,
  Flag,
  Icon,
  List,
  Segment
} from 'semantic-ui-react';

import { SelectLocaleProps, LocaleOption } from "./SelectLocale.types";

const DEFAULT_LOCALES: LocaleOption[] = [
  { key: 'en', value: 'en', text: 'English', flag: 'us' },
  { key: 'ar', value: 'ar', text: 'عربي', flag: 'sa' },
]

/**
 * Allows users to choose a locale from a list of options.
 */
const SelectLocale: React.FC<SelectLocaleProps> = ({
  basic = false,
  locales = DEFAULT_LOCALES,
  onSelect,
  onConfirm
}: SelectLocaleProps) => {

  const { t, i18n } = useTranslation();

  const [selected, setSelected] = useState("");

  const onValueChange = (event, { value }) => {
    setSelected(value);
    console.log(value);
    onSelect?.(value);
  };

  const trigger = () => {
    const option = locales.find((option) => option.value === selected);
    return (
      <>
        {option && <Flag name={option.flag} />}
        {!option && <Icon name='world' />}
        {option?.text || t('common:pages.selectLocale.placeholder')}
      </>
    );
  }

  return (
    <Segment basic={basic}>
      <List>
        <List.Item>
          <Dropdown
            button
            fluid
            onChange={onValueChange}
            options={locales}
            trigger={trigger()}
            value={selected}
          />
        </List.Item>
        <List.Item>
          <Button
            primary
            disabled={!selected}
            fluid
            onClick={() => onConfirm?.(selected)}
            size="large"
          >
            {t('common:pages.selectLocale.confirm')}
          </Button>
        </List.Item>
      </List>
    </Segment>
  );
};

export default SelectLocale;
