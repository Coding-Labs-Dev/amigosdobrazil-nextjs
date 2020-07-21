import { Trip } from '~/types/models';

export interface Props {
  template: string;
  trip: Trip & {
    canBook: boolean,
    activePlanIndex: number,
  }
}
