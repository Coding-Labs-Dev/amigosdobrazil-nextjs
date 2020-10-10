export interface Props {
  includes: { description: string; included: boolean }[];
  documents: { description: string }[];
  itinerary: {
    title: string;
    description: string;
    order: number;
    mainDestination: boolean;
    mainDestinationTitle: string;
  }[];
}
