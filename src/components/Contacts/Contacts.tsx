import React, {
  useEffect,
  useState
} from "react";
import { Button, Header, Segment } from "semantic-ui-react";

import { ContactsProps } from "./Contacts.types";

import { useInverted } from "../../hooks";
import { SelectAction, SelectActionItemProps } from "../SelectAction";

/**
 * Sugar for `SelectAction`. A module simplifying web3 contact management.
 */
const Contacts: React.FC<ContactsProps> = ({
  basic = false,
  contacts,
  divided = true,
  relaxed = true,
  selection = true,
  size = 'large',
  title,
  onAdd,
  onDelete,
  onEdit,
  onPay,
  onVerify
}) => {

  const inverted = useInverted();

  const [mapped, setMapped] = useState([]);

  const ContactActions = ({ contact }) => (
    <Button.Group icon inverted={inverted}>
      { contact.verified ?
        <Button basic primary icon='send' /> :
        <Button basic primary icon='check' />
      }
      <Button basic primary icon='check' />
      <Button basic primary icon='check' />
    </Button.Group>
  )

  useEffect(() => {
    const items: SelectActionItemProps[] = (contacts || []).map((contact) => {
      const fAddress = `${contact.address.slice(0, 6)}...${contact.address.slice(-4)}`;
      return {
        children: <ContactActions contact={contact} />,
        image: `https://assets.grams.dev/img/ui/Wallet/${contact.verified ? 'verify' : 'unverified'}.png`,
        title: contact.name,
        description: fAddress
      }
    });
    setMapped(items);
  }, contacts);

  return (
    <Segment
      basic={basic}
      data-testid="Contacts"
      inverted={inverted}
    >
      {title && <Header>{title}</Header>}
      <SelectAction
        actions={mapped}
        divided={divided}
        relaxed={relaxed}
        selection={selection}
        size={size}
      />
    </Segment>
  );
}

export default Contacts;
