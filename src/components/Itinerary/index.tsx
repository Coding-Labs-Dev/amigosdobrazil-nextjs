import React from 'react';

import { Container, Card, CardTitle } from 'reactstrap';

import { Props } from './Itinerary';

import { Wrapper } from './styles';
import DayInfo from '../DayInfo';

const Itinerary: React.FC<Props> = ({ description, itinerary }) => (
  <Wrapper>
    <Container>
      <Card className="py-5 px-4 px-md-5 shadow border-0">
        <CardTitle>
          <h1>{description.title}</h1>
        </CardTitle>
        <p className="text-left">{description.description}</p>
        <h1 className="pt-4">Dia a dia</h1>
        {itinerary.map((day, i) => (
          <DayInfo
            key={day.title}
            title={day.title}
            description={day.description}
            i={i + 1}
          />
        ))}
      </Card>
    </Container>
  </Wrapper>
);

export default Itinerary;
