import { PaymentPlan, TransportPlan } from '~/types/models';

export interface Props {
  slug: string;
  transportPlans: TransportPlan[];
  paymentPlans: PaymentPlan[];
  activePlanIndex: number;
  display?: 'xs' | 'md';
}
