import { ReactNode } from "react";
import { DropdownItemProps } from "semantic-ui-react";

/**
  * Describes the type and characteristics of an action within a settings item.
  */
export interface SettingsActionProps {

  /** Specifies the type of UI control to render ('button', 'checkbox', 'dropdown', 'input', 'password', 'toggle'). */
  type: 'checkbox' | 'dropdown' | 'input' | 'password' | 'toggle';
  
  /** Provides a list of selectable options for the 'dropdown' type. */
  options?: DropdownItemProps[];
  
  /** Sets the display text or label for the action control. */
  text?: string;
  
  /** Specifies the text for a confirm button, if applicable. */
  confirmText?: string;
  
  /** Sets the initial state value for controls like 'checkbox', 'toggle', 'input', etc. */
  defaultState?: string | number | boolean | (string | number | boolean)[];
  
  /** Callback function triggered when the action state changes. */
  onChange?: (value: string | number | boolean | (string | number | boolean)[]) => void;
  
  /** Callback function triggered when the action state is confirmed (e.g., button click, checkbox toggle). */
  onConfirm?: (value: string | number | boolean | (string | number | boolean)[]) => void;

  /** An action can be formatted to show different levels of emphasis. */
  primary?: boolean;

  /** 
   * Defines the size of the component.
   */
  size?: 'mini' | 'small' | 'large' | 'big' | 'huge' | 'massive';
}

/**
  * Describes the properties of a settings section container.
  */
export interface SettingsSectionProps {

  /** Sets the title text to display at the top of the settings section. */
  title?: string;

  /** Indicates if the unlock interface should be displayed in a basic segment. */
  basic?: boolean;
  
  /** Holds the child elements to render within the section. */
  children: ReactNode;
}

/**
  * Describes the properties of a single settings item.
  */
export interface SettingsItemProps {

  /** Specifies the action control to render alongside the settings item, if any. */
  action?: SettingsActionProps;
  
  /** Sets the title or header text for the settings item. */
  header: string;
  
  /** Provides additional explanatory text or elements under the header. */
  description?: string | ReactNode;
  
  /** Holds any additional child elements for the settings item. */
  children?: ReactNode;

  /** 
   * Defines the size of the component.
   */
  size?: 'mini' | 'small' | 'large' | 'big' | 'huge' | 'massive';
}

/**
  * Describes the properties used by the main Settings component.
  */
export interface SettingsProps {

  /** Defines the settings items to render within the component. */
  settings: SettingsItemProps[];

  /** 
   * Defines the size of the component.
   */
  size?:  'mini' | 'small' | 'large' | 'big' | 'huge' | 'massive';
}
