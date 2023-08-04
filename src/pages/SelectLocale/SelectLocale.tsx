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

import "./SelectLocale.css";

const DEFAULT_LOCALES: LocaleOption[] = [
  { key: 'en', value: 'en', text: 'English', flag: 'us' },
  { key: 'ar', value: 'ar', text: 'عربي', flag: 'sa' },
]

const SelectLocale: React.FC<SelectLocaleProps> = ({ basic, className, onSelect, onConfirm }) => {

  const { t, i18n } = useTranslation();

  const [selected, setSelected] = useState("");
  const locales = DEFAULT_LOCALES;

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
    <div
      data-testid='SelectLocale'
      className={className || 'selectlocale-page'}
    >
      <div className='selectlocale-content'>
        <Segment basic={basic}>
          <List>
            <List.Item className="mb-small">
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
      </div>
    </div>
  );
};

export default SelectLocale;
