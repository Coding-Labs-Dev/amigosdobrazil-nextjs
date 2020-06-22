export interface PaymentPlan {
  id: string;
  date: Date;
  usd: string;
  brl: string;
  downPayment: string;
  installmentsQty: number;
  installmentsValue: string;
}

export interface Props {
  slug: string;
  paymentPlans: PaymentPlan[];
  display?: 'xs' | 'md';
}
