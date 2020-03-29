import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import {
  Container,
  Card,
  CardImg,
  CardBody,
  Row,
  Col,
  Button,
} from 'reactstrap';

import api from '~/services/api';

import { Props } from '~/types/roteiros';
import { Wrapper, Banner } from '~/styles/styled/roteiros_styles';
import { Gradient, TripInfoCard, Navigation } from '~/components';

const roteiros: NextPage<Props> = ({ trips, pathname }) => (
  <Wrapper>
    <Navigation pathname={pathname} position="fixed" />
    <Gradient>
      <Container className="py-5" id="roteiros">
        <Card className="px-0 px-md-5 pb-5 border-0">
          <h1 className="text-dark pb-2 px-4 px-md-0">Nossos Roteiros</h1>
          <Row>
            {trips.map(trip => (
              <Col key={trip.slug} xs={12} md={6} xl={4} className="my-4">
                <Card className="shadow-md border-0">
                  <Link href={`roteiros/${trip.slug}`}>
                    <Banner>
                      <CardImg
                        top
                        width="100%"
                        src={trip.banner.url}
                        alt={trip.title}
                      />
                      <div>
                        <h1>{trip.title}</h1>
                      </div>
                    </Banner>
                  </Link>
                  <CardBody className="px-4 py-4 px-md-3">
                    <h5 className="text-dark">{trip.description.title}</h5>
                    <TripInfoCard
                      days={trip.days}
                      departure={trip.departure}
                      minSize={trip.minSize}
                      destinations={trip.destinationsQty}
                      compact
                    />
                    <p>{trip.description.description}</p>
                    <Row>
                      <Col className="py-3 d-flex">
                        <Link href={`roteiros/${trip.slug}`}>
                          <Button color="warning text-uppercase mx-auto">
                            Ver Roteiro
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>
      </Container>
    </Gradient>
  </Wrapper>
);

roteiros.getInitialProps = async ({ pathname }) => {
  const { data: trips } = await api.get('/trips');
  return { trips, pathname };
};

export default roteiros;
