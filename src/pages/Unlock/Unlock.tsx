import React, {
  useState
} from "react";
import { useTranslation } from 'react-i18next';

import {
  Button,
  Form,
  Header,
  Image,
  Segment
} from "semantic-ui-react";

import { UnlockProps } from "./Unlock.types";

import "./Unlock.css";

const Unlock: React.FC<UnlockProps> = ({ basic, name, image, method, rule, onUnlock }) => {

  const { t, i18n } = useTranslation();

  const PIN_RULE = /^[0-9]{1,6}$/
  const PASSWORD_RULE = /^[0-9]{1,6}$/

  const [pname, setPname] = useState(name || t("common:pages.unlock.title"));
  const [credential, setCredential] = useState("");
  const cmethod = method || "pin";
  const crule = rule || cmethod === "password" ? PASSWORD_RULE : PIN_RULE;
  const placeholder = cmethod === "password" ? t("common:pages.unlock.password") : t("common:pages.unlock.pin");
  const direction = i18n.dir() === 'ltr' ? 'left' : undefined;

  const isValid = () => (
    credential &&
    crule.test(credential)
  )

  const onSubmit = () => {
    onUnlock?.(credential);
  }

  return (
    <div
      data-testid='Unlock'
      className='unlock-page'
    >
      <div className='unlock-form'>
        <Form size="large">
          <Segment basic={basic}>
            <Image
              size='tiny'
              avatar
              src={image || "https://assets.grams.dev/logo/social.logo.png"}
            />
            <Header as="h3" className='mt-0'>{pname}</Header>
            <Form.Input
              fluid
              icon="lock open"
              iconPosition={direction}
              placeholder={placeholder}
              type='password'
              onChange={(event, data) => { setCredential(data.value) }}
            />
            <Button
              primary
              disabled={!isValid()}
              onClick={onSubmit}
              fluid
              size="large"
            >
              {t("common:pages.unlock.confirm")}
            </Button>
          </Segment>
        </Form>
      </div>
    </div>
  );
};

export default Unlock;
