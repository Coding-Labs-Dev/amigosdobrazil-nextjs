import { Itinerary } from '~/types/models';

export interface Props {
  description: {
    title: string;
    description: string;
  };
  itinerary: Itinerary[];
  slug: string;
}
