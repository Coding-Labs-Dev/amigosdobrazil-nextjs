import React, { useContext } from 'react';

import { Collapse, CardBody, Card, Container, Row, Col } from 'reactstrap';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

import { Wrapper } from './styles';
import { Props } from './DayInfo';

const getClassName = (
  event: 'opening' | 'open' | 'closing' | 'closed'
): string => `${event} text-dark`;

import { DayContext } from '../Trip';

const DayInfo: React.FC<Props> = ({ title, description, i }) => {
  const { value, setValue } = useContext(DayContext);

  return (
    <Wrapper>
      <Card
        className="py-2 my-2 shadow-sm border-0"
        onClick={() => setValue && setValue(value === i ? 0 : i)}
      >
        <Container>
          <Row>
            <Col className="text-left pr-0" xs={10}>
              <span className="font-weight-bold text-left">
                Dia {i} - {title}
              </span>
            </Col>
            <Col xs={2} className="pl-2">
              {value === i ? (
                <FaChevronUp size={16} className="text-dark" />
              ) : (
                <FaChevronDown size={16} className="text-dark" />
              )}
            </Col>
          </Row>
        </Container>
        <Collapse isOpen={value === i}>
          <CardBody>{description}</CardBody>
        </Collapse>
      </Card>
    </Wrapper>
  );
};

export default DayInfo;
