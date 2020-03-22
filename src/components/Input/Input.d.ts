import { IconType } from 'react-icons';

export interface Props {
  icon: IconType;
  name: string;
  type?: 'text' | 'textArea';
  placeholder: string;
}

export interface ContainerProps {
  textArea?: boolean;
  error?: boolean;
}
