import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardBody } from 'reactstrap';

import { Props } from './TripSideBar';

import { Wrapper } from './styles';
import TripList from '../TripList';
import Timeline from '../Timeline';

const TripSideBar: React.FC<Props> = ({ includes, documents, itinerary }) => (
  <Wrapper className="py-3 px-0">
    <Container fluid>
      <Col className="px-0">
        {!!itinerary.length && (
          <Row className="pt-0 pb-4">
            <Card className="py-5 px-4 border-0 shadow w-100">
              <CardTitle>
                <h1>Principais Destinos</h1>
              </CardTitle>
              <CardBody className="text-left">
                <Timeline
                  mainDestinations={itinerary.filter(
                    ({ mainDestination }) => !!mainDestination
                  )}
                />
              </CardBody>
            </Card>
          </Row>
        )}
        {!!includes.length && (
          <Row className="pt-0 pb-4">
            <Card className="py-5 px-4 border-0 shadow w-100">
              <CardTitle>
                <h1>O que esta incluso?</h1>
              </CardTitle>
              <CardBody className="text-left">
                <TripList type="success" items={includes} />
              </CardBody>
            </Card>
          </Row>
        )}
        {!!documents.length && (
          <Row>
            <Card className="pt-5 px-4 border-0 shadow w-100">
              <CardTitle>
                <h1>Documentos necessários</h1>
              </CardTitle>
              <CardBody className="text-left">
                <TripList type="danger" items={documents} />
              </CardBody>
            </Card>
          </Row>
        )}
      </Col>
    </Container>
  </Wrapper>
);

export default TripSideBar;
