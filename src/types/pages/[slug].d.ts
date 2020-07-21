import { Trip } from '~/types/models';

export interface Props {
  trip: Trip & {
    canBook: boolean;
    activePlanIndex: number;
  };
  pathname: stirng;
}
