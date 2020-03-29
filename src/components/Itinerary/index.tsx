import React from 'react';
import Link from 'next/link';
import { Container, Card, CardTitle, Button, CardBody, Row } from 'reactstrap';

import { Props } from './Itinerary';

import { Wrapper } from './styles';
import DayInfo from '../DayInfo';

const Itinerary: React.FC<Props> = ({ description, itinerary, slug }) => (
  <Wrapper>
    <Container>
      <Card className="pt-5 pb-3 px-4 px-md-5 shadow border-0">
        <CardTitle>
          <h1>{description.title}</h1>
        </CardTitle>
        <CardBody>
          <p className="text-left">{description.description}</p>
          {!!itinerary.length && (
            <>
              <h1 className="pt-4">Dia a dia</h1>
              {itinerary.map(day => (
                <DayInfo
                  key={day.title}
                  title={day.title}
                  description={day.description}
                  order={day.order}
                />
              ))}
            </>
          )}
        </CardBody>
      </Card>
    </Container>
  </Wrapper>
);

export default Itinerary;
