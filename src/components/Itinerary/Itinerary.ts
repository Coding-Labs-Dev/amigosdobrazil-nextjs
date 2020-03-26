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
  paymentPlans: {
    date: Date;
    usd: string;
    brl: string;
    downPayment: string;
    installmentsQty: number;
    installmentsValue: string;
  }[];
}
