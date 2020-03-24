import React from 'react';
import moment from 'moment';
import { Wrapper } from './styles';

import { Props } from './TripInfoCard';
import { Container, Card, Row, Col } from 'reactstrap';

import {
  FaCalendarAlt,
  FaPlaneDeparture,
  FaUserFriends,
  FaMapMarkedAlt,
} from 'react-icons/fa';

const TripInfoCard: React.FC<Props> = ({
  days,
  departure,
  minSize,
  destinations,
}) => (
  <Wrapper className="py-3 px-0">
    <Container fluid>
      <Card className="py-3 px-1 border-0 shadow">
        <Row className="text-info">
          <Col className="d-flex flex-column align-items-center justify-content-top">
            <FaCalendarAlt size={32} />
            <label style={{ lineHeight: '1.25rem' }} className="my-0 pt-2">
              {days}
            </label>
            <label
              style={{ lineHeight: '1.25rem' }}
              className="my-0 small font-weight-bold"
            >
              Dias
            </label>
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-top">
            <FaPlaneDeparture size={32} />
            <label style={{ lineHeight: '1.25rem' }} className="my-0 pt-2">
              {moment(departure).format('DD/MM/YYYY')}
            </label>
            <label
              style={{ lineHeight: '1.25rem' }}
              className="my-0 small font-weight-bold"
            >
              Saída
            </label>
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-top">
            <FaUserFriends size={32} />
            <label style={{ lineHeight: '1.25rem' }} className="my-0 pt-2">
              {minSize}
            </label>
            <label
              style={{ lineHeight: '1.25rem' }}
              className="my-0 small font-weight-bold"
            >
              Mínimo
            </label>
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-top">
            <FaMapMarkedAlt size={32} />
            <label style={{ lineHeight: '1.25rem' }} className="my-0 pt-2">
              {destinations}
            </label>
            <label
              style={{ lineHeight: '1.25rem' }}
              className="my-0 small font-weight-bold"
            >
              Destinos
            </label>
          </Col>
        </Row>
      </Card>
    </Container>
  </Wrapper>
);

export default TripInfoCard;
