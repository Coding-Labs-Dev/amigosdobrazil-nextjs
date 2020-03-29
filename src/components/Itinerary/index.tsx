import React from 'react';
import Link from 'next/link';
import { Container, Card, CardTitle, Button, CardBody, Row } from 'reactstrap';

import { Props } from './Itinerary';

import { Wrapper } from './styles';
import DayInfo from '../DayInfo';
import PaymentPlans from '../PaymentPlans';

const Itinerary: React.FC<Props> = ({
  description,
  itinerary,
  paymentPlans,
  slug,
}) => (
  <Wrapper>
    <Container>
      <Card className="pt-5 pb-3 px-4 px-md-5 shadow border-0">
        <CardTitle>
          <h1>{description.title}</h1>
        </CardTitle>
        <CardBody>
          <p className="text-left">{description.description}</p>
          {!!itinerary.length && (
            <>
              <h1 className="pt-4">Dia a dia</h1>
              {itinerary.map(day => (
                <DayInfo
                  key={day.title}
                  title={day.title}
                  description={day.description}
                  order={day.order}
                />
              ))}
            </>
          )}
          {!!paymentPlans.length && (
            <PaymentPlans paymentPlans={paymentPlans} />
          )}
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
);

export default Itinerary;
