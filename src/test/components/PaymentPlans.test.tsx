import React from 'react';
import renderer from 'react-test-renderer';

import PaymentPlans from '~/components/PaymentPlans';
import { Props } from '~/components/PaymentPlans/PaymentPlans';

describe('PaymentPlans', () => {
  const setupComponent = (props: Partial<Props> = {}) => (
    <PaymentPlans
      slug="india-01-2021"
      paymentPlans={[
        {
          id: '1',
          date: new Date(2020, 5, 1),
          usd: '4000.00',
          brl: '20000.00',
          downPayment: '0.00',
          installmentsQty: 10,
          installmentsValue: '2000.00',
        },
      ]}
      {...props}
    />
  );

  it('renders', () => {
    const component = renderer.create(setupComponent());
    expect(component.toJSON()).toMatchSnapshot();
  });
});
