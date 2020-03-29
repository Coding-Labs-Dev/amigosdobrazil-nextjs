export interface Props {
  slug: string;
  paymentPlans: {
    id: string;
    date: Date;
    usd: string;
    brl: string;
    downPayment: string;
    installmentsQty: number;
    installmentsValue: string;
  }[];
  display?: 'xs' | 'md';
}
