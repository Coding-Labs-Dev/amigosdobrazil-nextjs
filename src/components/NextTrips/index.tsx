import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
  Button,
  CardImg,
  CardImgOverlay,
} from 'reactstrap';

import Link from 'next/link';

import { Wrapper } from './styles';
import { Props } from './NextTrips';

const NextTrips: React.FC<Props> = ({ nextTrips }) => {
  return (
    <Wrapper className="pb-5">
      <Container style={{ marginTop: '-3rem' }}>
        {/* <Container> */}
        <Row className="align-items-stretch justify-content-center">
          {nextTrips.map((nextTrip, i) => (
            <React.Fragment key={nextTrip.slug}>
              {i > 0 && !(i % 3) && <div className="w-100" />}
              <Link href={`roteiros/${nextTrip.slug}`}>
                <div style={{ display: 'contents' }}>
                  <Col
                    className="justify-content-center text-center p-4"
                    xs="12"
                    md="6"
                    lg="4"
                  >
                    <Card className="inverse shadow border-0">
                      <CardImg
                        width="100%"
                        src={nextTrip.background.image}
                        alt={nextTrip.title}
                      />
                      <CardImgOverlay>
                        <Container className="h-100">
                          <CardTitle className="m-0">
                            {nextTrip.title}
                          </CardTitle>
                          <CardText>{nextTrip.date}</CardText>
                        </Container>
                      </CardImgOverlay>
                    </Card>
                  </Col>
                </div>
              </Link>
            </React.Fragment>
          ))}
        </Row>
        <Row className="text-center mt-5">
          <Col>
            <Link href="/roteiros">
              <Button color="warning" className="text-uppercase">
                Ver Mais Roteiros
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default NextTrips;
