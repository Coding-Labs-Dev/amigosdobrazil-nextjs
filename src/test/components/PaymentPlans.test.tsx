import React from 'react';
import renderer from 'react-test-renderer';
import MockDate from 'mockdate';
import { shallow } from 'enzyme';

import PaymentPlans from '~/components/PaymentPlans';
import { Props } from '~/components/PaymentPlans/PaymentPlans';

describe('PaymentPlans', () => {
  beforeEach(() => {
    MockDate.set('2020-06-22');
  });

  afterEach(() => {
    MockDate.reset();
  });

  const setupComponent = (props: Partial<Props> = {}) => (
    <PaymentPlans
      slug="india-01-2021"
      paymentPlans={[
        {
          id: '1',
          date: new Date('2020-05-30T00:00:00+0000'),
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

  it('enables the first payment plan when it\'s after today\'s date', () => {
    const paymentPlans = [
      {
        id: '1',
        date: new Date('2020-06-30T00:00:00+0000'),
        usd: '4000.00',
        brl: '20000.00',
        downPayment: '0.00',
        installmentsQty: 10,
        installmentsValue: '2000.00',
      },
      {
        id: '2',
        date: new Date('2020-07-30T00:00:00+0000'),
        usd: '8000.00',
        brl: '40000.00',
        downPayment: '0.00',
        installmentsQty: 10,
        installmentsValue: '4000.00',
      },
      {
        id: '3',
        date: new Date('2020-07-31T00:00:00+0000'),
        usd: '8000.00',
        brl: '40000.00',
        downPayment: '0.00',
        installmentsQty: 10,
        installmentsValue: '4000.00',
      },
    ];

    const component = shallow(setupComponent({ paymentPlans }));
    expect(component.find('.b-payment-plan').at(0)).toHaveClassName('.b-payment-plan__active');

  });

  it('enables the next payment plan after today\'s date', () => {
    const paymentPlans = [
      {
        id: '1',
        date: new Date('2020-05-30T00:00:00+0000'),
        usd: '4000.00',
        brl: '20000.00',
        downPayment: '0.00',
        installmentsQty: 10,
        installmentsValue: '2000.00',
      },
      {
        id: '2',
        date: new Date('2020-07-30T00:00:00+0000'),
        usd: '8000.00',
        brl: '40000.00',
        downPayment: '0.00',
        installmentsQty: 10,
        installmentsValue: '4000.00',
      },
      {
        id: '3',
        date: new Date('2020-07-31T00:00:00+0000'),
        usd: '8000.00',
        brl: '40000.00',
        downPayment: '0.00',
        installmentsQty: 10,
        installmentsValue: '4000.00',
      },
    ];

    const component = shallow(setupComponent({ paymentPlans }));
    expect(component.find('.b-payment-plan').at(1)).toHaveClassName('.b-payment-plan__active');

  });

  it('enables the latest payment plan after today\'s date', () => {
    const paymentPlans = [
      {
        id: '1',
        date: new Date('2020-05-20T00:00:00+0000'),
        usd: '4000.00',
        brl: '20000.00',
        downPayment: '0.00',
        installmentsQty: 10,
        installmentsValue: '2000.00',
      },
      {
        id: '2',
        date: new Date('2020-06-20T00:00:00+0000'),
        usd: '8000.00',
        brl: '40000.00',
        downPayment: '0.00',
        installmentsQty: 10,
        installmentsValue: '4000.00',
      },
      {
        id: '3',
        date: new Date('2020-06-21T00:00:00+0000'),
        usd: '8000.00',
        brl: '40000.00',
        downPayment: '0.00',
        installmentsQty: 10,
        installmentsValue: '4000.00',
      },
    ];

    const component = shallow(setupComponent({ paymentPlans }));
    expect(component.find('.b-payment-plan').at(2)).toHaveClassName('.b-payment-plan__active');

  });
});
