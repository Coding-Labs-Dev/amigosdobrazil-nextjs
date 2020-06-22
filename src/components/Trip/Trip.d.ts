export interface Trip {
  slug: string;
  featured: boolean;
  title: string;
  subTitle: string;
  banner: {
    url: string;
    opacity: string;
    position:
      | 'left top'
      | 'left center'
      | 'left bottom'
      | 'right top'
      | 'right center'
      | 'right bottom'
      | 'center top'
      | 'center center'
      | 'center bottom';
  };
  titlePosition: 'top' | 'center' | 'bottom';
  days: number;
  minSize: number;
  destinationsQty: number;
  departure: Date;
  bookStart: Date;
  bookEnd: Date;
  bookFee: number;
  description: {
    title: string;
    description: string;
  };
  includes: { description: string }[];
  documents: { description: string }[];
  itinerary: {
    title: string;
    description: string;
    order: number;
    mainDestination: boolean;
    mainDestinationTitle: string;
  }[];
  paymentPlans: {
    id: string;
    date: Date;
    usd: string;
    brl: string;
    downPayment: string;
    installmentsQty: number;
    installmentsValue: string;
  }[];
}

export interface Props {
  trip: Trip;
  fowardRef: React.fowardRef;
  documents: { description: string }[];
  includes: { description: string }[];
  itinerary: {
    title: string;
    description: string;
    order: number;
    mainDestination: boolean;
    mainDestinationTitle: string;
  }[];
}
