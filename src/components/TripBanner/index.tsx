import React from 'react';
import { CardTitle, Container, Row, Col, Button } from 'reactstrap';

import { Wrapper, Banner } from './styles';
import { Props } from './Banner';

const getTitlePosition = (position: 'top' | 'center' | 'bottom'): string => {
  if (position === 'top') return 'py-5 align-self-start';
  if (position === 'center') return 'py-5 align-self-center';
  return 'py-5 align-self-end';
};

const TripBanner: React.FC<Props> = ({
  background,
  title,
  subTitle,
  forwardRef,
  titlePosition,
}) => {
  return (
    <Wrapper ref={forwardRef}>
      <Banner body inverse background={background}>
        <Container className="h-100">
          <Row className="h-100 align-items-center">
            <Col className={getTitlePosition(titlePosition)}>
              <CardTitle className="text-center my-0 py-0">
                <h1 className="display-2 font-special text-uppercase py-0 my-0">
                  {title}
                </h1>
              </CardTitle>
              {subTitle && (
                <div className="text-center my-0 py-0">
                  <h5 className="py-0 my-0">{subTitle}</h5>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </Banner>
    </Wrapper>
  );
};

export default TripBanner;
