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
  transportPlans,
  display = 'xs',
  activePlanIndex,
}) => {
  return (
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
            {!!transportPlans.length && (
              <h1 className="part-title">Parte Aérea</h1>
            )}
            {transportPlans.map(plan => (
              <Card
                className="p-4 my-3 b-payment-plan border-primary b-payment-plan__active"
                key={`${display}_tansport_plan_${plan.id}`}
                style={{ borderWidth: 1 }}
              >
                <Row>
                  <Col xs={12} lg={8} className="align-items-stretch">
                    <Row className="text-left h-100">
                      <Col xs={1} className="my-auto pr-4">
                        <FaCheckCircle size={20} className="text-primary" />
                      </Col>
                      <Col className="my-auto">
                        <span className="font-weight-bold text-primary d-block">
                          Classe econômica
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
                    <span className="text-light small d-block">
                      + Taxa de Embarque
                    </span>
                    <span className="text-light small d-block">
                      Em até {plan.installmentsQty}x sem juros
                    </span>
                  </Col>
                </Row>
              </Card>
            ))}
            <h1 className={`part-title ${!!transportPlans.length && 'pt-4'}`}>
              Parte Terrestre
            </h1>
            {paymentPlans.map((plan, i) => {
              const active = i === activePlanIndex;
              return (
                <Card
                  className={`p-4 my-3 b-payment-plan ${
                    active
                      ? 'border-primary b-payment-plan__active'
                      : 'border-light'
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
                            Inscrição
                            {i < paymentPlans.length - 1 ? ' até ' : ' após '}
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
                      {Number(plan.downPayment) ? (
                        <>
                          <span className="text-light small d-block">
                            Entrada
                          </span>
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
                        </>
                      ) : (
                        <>
                          <span className="text-light small d-block">
                            Taxa de Inscrição
                          </span>
                        </>
                      )}
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
              {activePlanIndex >= 0 ? (
                <Link href={`/roteiros/${slug}/reservar`}>
                  <Button
                    color="warning"
                    className="ml-auto text-uppercase mt-2"
                  >
                    Reservar
                  </Button>
                </Link>
              ) : (
                <Button
                  color="warning"
                  className="ml-auto text-uppercase mt-2"
                  disabled
                >
                  Reservar
                </Button>
              )}
            </Row>
          </CardBody>
        </Card>
      </Container>
    </Wrapper>
  );
};

export default PaymentPlans;
