export interface Props {
  paymentPlans: {
    date: Date;
    usd: string;
    brl: string;
    downPayment: string;
    installmentsQty: number;
    installmentsValue: string;
  }[];
}
