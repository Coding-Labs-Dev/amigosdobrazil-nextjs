import { IconType } from 'react-icons';

export interface Props {
  name: string;
  type?: 'text' | 'number';
  label: string;
  placeholder: string;
  required?: boolean;
  size?: {
    xs?: number;
    md?: number;
    lg?: number;
  };
  onFocus?: function;
  maxLength?: number;
  disabled?: boolean;
}

export interface ContainerProps {
  error?: boolean;
}
