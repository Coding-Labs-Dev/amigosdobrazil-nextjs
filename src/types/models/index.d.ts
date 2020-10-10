export interface PaymentPlan {
  id: string;
  date: Date;
  usd: string;
  brl: string;
  downPayment: string;
  installmentsQty: number;
  installmentsValue: string;
}

export interface TransportPlan {
  id: string;
  usd: string;
  rate: string;
  installmentsQty: number;
}

export interface Trip {
  slug: string;
  featured: boolean;
  title: string;
  subTitle: string;
  type: string;
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
  includes: { description: string, included: boolean }[];
  documents: { description: string }[];
  itinerary: {
    title: string;
    description: string;
    order: number;
    mainDestination: boolean;
    mainDestinationTitle: string;
  }[];
  paymentPlans: PaymentPlan[];
  transportPlans: TransportPlan[];
}

export interface Settings {
  name: string;
  email: string;
  street: string;
  neigh: string;
  city: string;
  state: string;
  zip: string;
  mainPhone: string;
  altPhone?: string;
  maxInstallments: number;
  maxNoInterestInstallments: number;
}

export interface Hero {
  id: string;
  background: string;
  position: string;
  opacity: number;
}

export interface NextTrip {
  slug: string;
  title: string;
  date: string;
  background: string;
}

export interface WhyUs {
  title: string;
  text: string;
}

export interface Testimonial {
  id: number;
  url: string;
  poster: string;
}

export interface Itinerary {
  title: string;
  description: string;
  order: number;
  mainDestination: boolean;
  mainDestinationTitle: string;
}
