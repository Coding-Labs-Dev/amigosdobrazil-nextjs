import React from 'react';
import moment from 'moment';

import Link from 'next/link';
import {
  Container,
  Card,
  CardTitle,
  CardBody,
  Row,
  Col,
  Button,
} from 'reactstrap';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

import { Props } from './PaymentPlans';
import { Wrapper } from './styles';

const PaymentPlans: React.FC<Props> = ({
  slug,
  paymentPlans,
  display = 'xs',
}) => {
  const qty = paymentPlans.length - 1;
  const activePlans = paymentPlans
    .map((plan, i) =>
      i < qty
        ? moment(plan.date).isBetween(
            moment().subtract(1, 'd'),
            paymentPlans[i + 1].date,
            'd'
          )
        : moment(plan.date).isSameOrBefore(moment(), 'd')
    )
    .map((isActive, i) => (isActive ? paymentPlans[i].id : undefined))
    .filter(isActive => typeof isActive !== 'undefined');

  return !!activePlans.length ? (
    <Wrapper className="my-3">
      <Container>
        <Card
          className={`pt-5 pb-3 mb-5 px-4 px-md-5 shadow border-0 ${
            display === 'xs' ? 'd-block d-md-none' : 'd-none d-md-block'
          }`}
        >
          <CardTitle>
            <h1 className="paymentPlan-title">Planos de Pagamento</h1>
          </CardTitle>
          <CardBody>
            {paymentPlans.map((plan, i) => {
              const active = activePlans.includes(plan.id);
              return (
                <Card
                  className={`p-4 my-3 ${
                    active ? 'border-primary' : 'border-light'
                  }`}
                  key={`${display}_${plan.id}`}
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
            <Row className="px-3">
              <Link
                href="/roteiros/[slug]/reservar"
                as={`/roteiros/${slug}/reservar`}
              >
                <Button color="warning" className="ml-auto text-uppercase mt-2">
                  Reservar
                </Button>
              </Link>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </Wrapper>
  ) : (
    <></>
  );
};

export default PaymentPlans;
