export interface Props {
  name: string;
  options?: {
    value?: string;
    options: Array<{value: string, label: string}>;
    label: string;
  }[];
  defaultValue?: {value: string, label: string};
}
