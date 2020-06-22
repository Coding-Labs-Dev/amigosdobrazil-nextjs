import React, { useContext } from 'react';

import { Collapse, CardBody, Card, Container, Row, Col } from 'reactstrap';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

import { Wrapper } from './styles';
import { Props } from './DayInfo';

import { DayContext } from '~/components/Trip';

const DayInfo: React.FC<Props> = ({ title, description, order }) => {
  const { value, setValue, setRefs, refs } = useContext(DayContext);

  return (
    <Wrapper
      ref={(ref: HTMLDivElement) => {
        if (ref && setRefs && refs) setRefs(order, ref);
      }}
    >
      <Card
        className="py-2 my-2 shadow-sm border-0"
        onClick={() => setValue && setValue(value === order ? 0 : order)}
      >
        <Container>
          <Row>
            <Col className="text-left pr-0" xs={10}>
              <span className="font-weight-bold text-left">
                Dia {order} - {title}
              </span>
            </Col>
            <Col xs={2} className="pl-2">
              {value === order ? (
                <FaChevronUp size={16} className="text-dark" />
              ) : (
                <FaChevronDown size={16} className="text-dark" />
              )}
            </Col>
          </Row>
        </Container>
        <Collapse isOpen={value === order}>
          <CardBody>{description}</CardBody>
        </Collapse>
      </Card>
    </Wrapper>
  );
};

export default DayInfo;
