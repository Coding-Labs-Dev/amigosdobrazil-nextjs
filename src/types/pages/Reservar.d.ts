import { Trip, Settings } from '~/types/models';

export interface Props {
  tos: string;
  trip: Trip & {
    canBook: boolean,
    activePlanIndex: number,
  };
  settings: Settings;
}
