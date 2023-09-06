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
import { useInverted } from "../../hooks";

const PIN_RULE = /^(\d{4}|\d{6})$/
const PASSWORD_RULE = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/g

/**
 * A component for unlocking a profile using either a password or a pin number. Default to pin mode.
 */
const Unlock: React.FC<UnlockProps> = ({
  basic = false,
  name,
  image,
  method = "pin",
  rule,
  size = 'large',
  onUnlock 
}: UnlockProps) => {

  const { t, i18n } = useTranslation();
  const inverted = useInverted();

  const [credential, setCredential] = useState("");
  const crule = rule || method === "password" ? PASSWORD_RULE : PIN_RULE;
  const placeholder = method === "password" ? t("ui:unlock.password") : t("ui:unlock.pin");
  const direction = i18n.dir() === 'ltr' ? 'left' : undefined;

  const isValid = () => (
    credential &&
    crule.test(credential)
  )

  const onSubmit = () => {
    onUnlock?.(credential);
  }

  return (
    <Segment
      basic={basic}
      textAlign="center"
      inverted={inverted}
    >
      <Form size={size}>
        <Image
          alt='unlock profile image'
          size='tiny'
          avatar
          src={image || "https://assets.grams.dev/img/ui/Unlock/default.png"}
        />
        <Header as="h2" className='mt-0'>{ name || t("ui:unlock.title") }</Header>
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
          size={size}
        >
          {t("ui:unlock.confirm")}
        </Button>
      </Form>
    </Segment>
  );
};

export default Unlock;
