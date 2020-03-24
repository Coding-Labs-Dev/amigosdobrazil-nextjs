export interface Props {
  description: {
    title: string;
    description: string;
  };
  itinerary: {
    title: string;
    description: string;
    order: number;
    mainDestination: boolean;
    mainDestinationTitle: string;
  }[];
}
