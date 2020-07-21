/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import moment from 'moment';
import { Container, Card, Row, Col } from 'reactstrap';
import {
  FaCalendarAlt,
  FaPlaneDeparture,
  FaUserFriends,
  FaMapMarkedAlt,
} from 'react-icons/fa';
import { Wrapper } from './styles';

import { Props } from './TripInfoCard';


const TripInfoCard: React.FC<Props> = ({
  days,
  departure,
  minSize,
  destinations,
  compact,
}) => (
  <Wrapper className="py-3 px-0">
    <Container fluid>
      <Card className={`py-3 px-1 border-0 ${!compact && 'shadow'}`}>
        <Row className="text-info">
          <Col className="d-flex flex-column align-items-center justify-content-between">
            <FaCalendarAlt size={compact ? 22 : 32} />
            <label style={{ lineHeight: '1.25rem' }} className="my-0 pt-2 ">
              {days}
            </label>

            {!compact && (
              <label
                style={{ lineHeight: '1.25rem' }}
                className="my-0 small font-weight-bold"
              >
                Dias
              </label>
            )}
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-between">
            <FaPlaneDeparture size={32} />
            <label style={{ lineHeight: '1.25rem' }} className="my-0 pt-2 ">
              {moment(departure).format('DD/MM/YYYY')}
            </label>

            {!compact && (
              <label
                style={{ lineHeight: '1.25rem' }}
                className="my-0 small font-weight-bold"
              >
                Saída
              </label>
            )}
          </Col>
          {!compact && (
            <Col className="d-flex flex-column align-items-center justify-content-between">
              <FaUserFriends size={32} />
              <label style={{ lineHeight: '1.25rem' }} className="my-0 pt-2 ">
                {minSize}
              </label>
              <label
                style={{ lineHeight: '1.25rem' }}
                className="my-0 small font-weight-bold"
              >
                Mínimo
              </label>
            </Col>
          )}
          <Col className="d-flex flex-column align-items-center justify-content-between">
            <FaMapMarkedAlt size={32} />
            <label style={{ lineHeight: '1.25rem' }} className="my-0 pt-2 ">
              {destinations}
            </label>

            {!compact && (
              <label
                style={{ lineHeight: '1.25rem' }}
                className="my-0 small font-weight-bold"
              >
                Destinos
              </label>
            )}
          </Col>
        </Row>
      </Card>
    </Container>
  </Wrapper>
);

export default TripInfoCard;
