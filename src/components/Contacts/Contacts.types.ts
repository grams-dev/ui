import { SemanticSIZES } from "semantic-ui-react";

export interface AddContactProps {
  contact: ContactProps;
  onAdd?: (contact: ContactProps) => void;
}

export interface DeleteContactProps {
  contact: ContactProps;
  onDelete?: (contact: ContactProps) => void;
}

export interface EditContactProps {
  contact: ContactProps;
  onEdit?: (contact: ContactProps) => void;
}

export interface PayContactProps {
  contact: ContactProps;
  onPay?: (contact: ContactProps) => void;
}

export interface VerifyContactProps {
  contact: ContactProps;
  onVerify?: (contact: ContactProps) => void;
}

export interface ContactProps {
  address: string;
  name: string;
  description?: string;
  verified?: boolean;
}

/**
  * The props used by Contacts
  */
export interface ContactsProps {
  basic?: boolean;
  contacts?: ContactProps[];
  divided?: boolean;
  relaxed?: boolean;
  selection?: boolean;
  size?: SemanticSIZES;
  title?: string;
  onAdd?: (contact: ContactProps) => void;
  onDelete?: (contact: ContactProps) => void;
  onEdit?: (original: ContactProps, edited: ContactProps) => void;
  onPay?: (contact: ContactProps) => void;
  onVerify?: (contact: ContactProps) => void;
}
