import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import { Props } from './Timeline';

import { Wrapper } from './styles';

const Timeline: React.FC<Props> = ({ mainDestinations }) => {
  return (
    <Wrapper>
      <ul className="timeline">
        {mainDestinations.map(destination => (
          <li className="ml-4 my-4">
            <h6 className="font-weight-bold text-left my-0 py-0">
              {destination.mainDestinationTitle}
            </h6>
            <span className="small">Dia {destination.order}</span>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Timeline;
