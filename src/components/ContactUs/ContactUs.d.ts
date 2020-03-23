import { Settings } from '~/types';

export type FormSchema = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export interface Props {
  settings: Settings;
}
