import React, {
  useState
} from 'react';
import { useTranslation } from 'react-i18next';

import uniqid from 'uniqid';

import {
  Accordion,
  Button,
  Checkbox,
  Form,
  Header,
  Icon,
  Segment
} from 'semantic-ui-react';

import { NewProfileProps } from "./NewProfile.types";

const PASSWORD_RULE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

/**
 * A component for creating a new profile with optional advanced settings.
 */
const NewProfile: React.FC<NewProfileProps> = ({
  basic = false,
  advanced = false,
  fluid = true,
  title,
  description,
  onCreate
}: NewProfileProps) => {

  const { t, i18n } = useTranslation();
  const direction = i18n.dir() === 'ltr' ? 'left': undefined;

  const [active, setActive] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [pin, setPin] = useState('');
  const [isDeveloper, setIsDeveloper] = useState(false);

  const onNameChange = (event) => { setName(event.target.value) };
  const onPasswordChange = (event) => { setPassword(event.target.value) };
  const onPinChange = (event) => { setPin(event.target.value) };
  const onDeveloperModeToggle = (event, data) => { setIsDeveloper(data.checked) };

  const isValid = () => (
    name && password &&
    PASSWORD_RULE.test(password)
  );

  const onSubmit = (event) => {
    event.preventDefault();
    onCreate?.(
      {
        profile: {
          id: uniqid(),
          name,
          developer: isDeveloper
        },
        password,
        pin
      }
    );
  };

  return (
    <Segment
      dir={i18n.dir()}
      data-testid="NewProfile"
      basic={basic}
    >
      <Header as="h2" textAlign="center">
        {title || t('common:profile.newProfile.title')}
      </Header>
      <p>
        {description || t('common:profile.newProfile.description')}
      </p>
      <Form onSubmit={onSubmit}>
        <Form.Input
          fluid={fluid}
          icon='user'
          iconPosition={direction}
          onChange={onNameChange}
          placeholder={t('common:profile.newProfile.placeholder.name')}
          type='text'
          value={name}
        />
        <Form.Input
          fluid={fluid}
          icon='key'
          iconPosition={direction}
          onChange={onPasswordChange}
          placeholder={t('common:profile.newProfile.placeholder.password')}
          type='password'
          value={password}
        />
        <Form.Input
          fluid={fluid}
          icon='lock open'
          iconPosition={direction}
          onChange={onPinChange}
          placeholder={t('common:profile.newProfile.placeholder.pin')}
          type='password' pattern="[0-9]*" inputMode="numeric"
          value={pin}
        />
        {advanced && (
          <Accordion as={Form.Field}>
            <Accordion.Title
              active={active}
              onClick={() => setActive(!active)}
            >
              <Icon name='dropdown' />
              {t('common:profile.newProfile.accordion.title')}
            </Accordion.Title>
            <Accordion.Content active={active}>
              <Segment>
                <Checkbox
                  label={t('common:profile.newProfile.accordion.label')}
                  onChange={onDeveloperModeToggle}
                  value={isDeveloper ? 1 : 0}
                />
              </Segment>
            </Accordion.Content>
          </Accordion>
        )}
        <Button
          fluid={fluid}
          type="submit"
          primary
          disabled={!isValid()}
        >
          {t('common:profile.newProfile.confirm')}
        </Button>
      </Form>
    </Segment>
  );
}

export default NewProfile;
