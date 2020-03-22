import React from 'react';
import {
  Container,
  Row,
  Card,
  CardTitle,
  CardText,
  Col,
  CardImgOverlay,
  CardImg,
} from 'reactstrap';

import Link from 'next/link';

import { Wrapper, Banner } from './styles';
import { Props } from './WhyUs';

const WhyUs: React.FC<Props> = ({ whyUs }) => {
  return (
    <Wrapper>
      <Container fluid className="p-0 m-0s">
        <Card className="border-0 rounded-0">
          <Banner
            body
            inverse
            background="images/why-us.jpg"
            position="center"
            opacity={0.5}
          >
            <Container className="h-100 py-4" style={{ zIndex: 1 }}>
              <Row className="h-100 align-items-center">
                <Container>
                  <Row>
                    <h1>Porque viajar conosco?</h1>
                  </Row>
                  <Row>
                    {whyUs.map((whyus, i) => (
                      <Col
                        key={whyus.title}
                        className="justify-content-center text-center px-2 py-4"
                        xs="12"
                        md="6"
                        lg="3"
                      >
                        <Card
                          className="border-0"
                          style={{ background: 'none' }}
                        >
                          <CardTitle className="text-left">
                            <h2>
                              {String(i + 1).padStart(2, '0')} {whyus.title}
                            </h2>
                          </CardTitle>
                          <CardText className="text-left text-white">
                            {whyus.text}
                          </CardText>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </Row>
            </Container>
          </Banner>
        </Card>
      </Container>
    </Wrapper>
  );
};

export default WhyUs;
