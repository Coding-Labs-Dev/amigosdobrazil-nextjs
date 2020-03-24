import React from 'react';

import { Container, Row, Col, Card } from 'reactstrap';

import { Props } from './Trip';

import { Wrapper } from './styles';
import TripBanner from '../TripBanner';
import TripInfoCard from '../TripInfoCard';
import Itinerary from '../Itinerary';
import TripSideBar from '../TripSideBar';

const Trip: React.FC<Props> = ({ trip, fowardRef, documents, includes }) => {
  return (
    <Wrapper>
      <TripBanner
        background={trip.background}
        title={trip.title}
        subTitle={trip.subTitle}
        titlePosition={trip.titlePosition}
        forwardRef={fowardRef}
      />
      <Container>
        <Row>
          <Col
            xs={12}
            md={8}
            className="text-center justify-content-center px-0"
          >
            <TripInfoCard
              days={trip.days}
              departure={trip.departure}
              minSize={trip.minSize}
              destinations={trip.destinationsQty}
            />
            <Itinerary
              description={trip.description}
              itinerary={trip.itinerary}
            />
          </Col>
          <Col xs={12} md={4} className="text-center justify-content-center">
            <TripSideBar
              includes={includes}
              documents={documents}
              itinerary={trip.itinerary}
            />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Trip;
