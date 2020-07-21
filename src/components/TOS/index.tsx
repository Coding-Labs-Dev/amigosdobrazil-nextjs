import React from 'react';
import { useFormContext } from 'react-hook-form';
import moment from 'moment';
import mustache from 'mustache';

import { convertToCurrency } from '~/utils/currency';

import { Props } from './TOS';
import { Wrapper } from './styles';
import { CheckoutFormData } from '../CheckoutInput/CheckoutInput';

const TOS: React.FC<Props> = ({ template, trip }) => {
  const { getValues } = useFormContext<CheckoutFormData>();

  const { name, cpf } = getValues();
  const activePlan = trip.paymentPlans[trip.activePlanIndex];
  const transportPlan = trip.transportPlans[0];

  const data = {
    name,
    cpf,
    trip_type: trip.type,
    book_fee: convertToCurrency(trip.bookFee),
    payment_plan_total_brl: convertToCurrency(activePlan.brl),
    payment_plan_total_usd: convertToCurrency(activePlan.usd, 'USD'),
    has_down_payment: Number(activePlan.downPayment) > 0,
    has_installments: activePlan.installmentsQty > 0,
    installment_qty: activePlan.installmentsQty,
    transport_plan: convertToCurrency(transportPlan.usd, 'USD'),
    date: moment().locale('pt').format('DD [de] MMMM [de] YYYY')
  };

  return (
    <Wrapper className="p-4">
      <h2 className="text-dark">
        CONTRATO PARTICULAR DE PRESTAÇÃO DE SERVIÇOS DE AGENCIAMENTO DE VIAGEM
      </h2>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: mustache.render(template, data),
        }}
      />
    </Wrapper>
  );
};

export default TOS;
