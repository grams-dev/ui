import React, {
  useState,
  useEffect
} from "react";
import { useTranslation } from 'react-i18next';

import {
  Flag,
  Form,
  Icon,
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
  size = 'large',
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
      <Form size={size}>
        <Form.Dropdown
          button
          fluid
          onChange={onValueChange}
          options={locales}
          trigger={trigger()}
          value={selected}
        />
        <Form.Button
          primary
          disabled={!selected}
          fluid
          onClick={() => onConfirm?.(selected)}
          size={size}
        >
          {t('common:pages.selectLocale.confirm')}
        </Form.Button>
      </Form>
    </Segment>
  );
};

export default SelectLocale;
