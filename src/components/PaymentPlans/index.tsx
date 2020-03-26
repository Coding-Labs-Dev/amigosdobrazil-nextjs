import React from 'react';
import moment from 'moment';

import { Props } from './PaymentPlans';
import { Wrapper } from './styles';
import { Card, Row, Col } from 'reactstrap';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const PaymentPlans: React.FC<Props> = ({ paymentPlans }) => {
  const qty = paymentPlans.length - 1;
  return (
    <Wrapper className="pt-3">
      <h1>Planos de Pagamento</h1>
      {paymentPlans.map((plan, i) => {
        const active =
          i < qty
            ? moment(plan.date).isBetween(
                moment().subtract(1, 'd'),
                paymentPlans[i + 1].date,
                'd'
              )
            : moment(plan.date).isSameOrBefore(moment(), 'd');
        return (
          <Card
            className={`p-4 my-3 ${active ? 'border-primary' : 'border-light'}`}
            key={plan.installmentsQty}
            style={{ borderWidth: 1, opacity: active ? 1 : 0.6 }}
          >
            <Row>
              <Col xs={12} lg={8} className="align-items-stretch">
                <Row className="text-left h-100">
                  <Col xs={1} className="my-auto pr-4">
                    {active ? (
                      <FaCheckCircle size={20} className="text-primary" />
                    ) : (
                      <FaTimesCircle
                        size={20}
                        className="text-danger"
                        style={{ opacity: 0.5 }}
                      />
                    )}
                  </Col>
                  <Col className="my-auto">
                    <span
                      className={`font-weight-bold text-${
                        active ? 'primary' : 'light'
                      } d-block`}
                    >
                      Inscrição {i < qty ? 'até' : 'após'}{' '}
                      {moment(plan.date).format('DD/MM/YYYY')}
                    </span>
                    <span className="font-weight-bold text-light d-block">
                      {Number(plan.usd).toLocaleString('pt', {
                        style: 'currency',
                        currency: 'USD',
                        currencyDisplay: 'symbol',
                      })}
                    </span>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={4} className="text-right my-auto">
                <span className="text-light small d-block">Entrada</span>
                <span
                  className={`font-weight-bold text-${
                    active ? 'dark' : 'light'
                  } d-block`}
                >
                  {Number(plan.downPayment).toLocaleString('pt', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
                <span className="text-light small d-block">
                  + {plan.installmentsQty}x{' '}
                  {Number(plan.installmentsValue).toLocaleString('pt', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
              </Col>
            </Row>
          </Card>
        );
      })}
    </Wrapper>
  );
};

export default PaymentPlans;
