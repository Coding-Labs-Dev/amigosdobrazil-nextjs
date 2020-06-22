import React from 'react';
import { CardTitle, Container, Row, Col, Button } from 'reactstrap';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper, Banner } from './styles';
import { Props } from './Hero';

const Hero: React.FC<Props> = ({ heroes, forwardRef }) => {
  return (
    <Wrapper ref={forwardRef} id="home">
      <Banner
        body
        inverse
        background={heroes[0]?.background || 'images/hero.jpg'}
        position={heroes[0]?.position || 'center center'}
        opacity={heroes[0]?.opacity || 0.8}
      >
        <Container className="h-100">
          <Row className="h-100 align-items-center">
            <Col>
              <Row>
                <Col>
                  <CardTitle className="text-center my-0 py-0">
                    <h1 className="display-4 font-special text-uppercase py-0 my-0">
                      Experiências Únicas
                    </h1>
                  </CardTitle>
                  <div className="text-center my-0 py-0">
                    <h5 className="py-0 my-0">
                      com os melhores roteiros de viagens
                    </h5>
                  </div>
                </Col>
              </Row>
              <Row className="text-center mt-5">
                <Col>
                  <AnchorLink href="#roteiros" offset={100}>
                    <Button color="warning" className="text-uppercase">
                      Explorar Roteiros
                    </Button>
                  </AnchorLink>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Banner>
    </Wrapper>
  );
};

export default Hero;
