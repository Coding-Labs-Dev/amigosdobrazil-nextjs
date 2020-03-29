import React from 'react';

import { Container } from './styles';
import { Props } from './Gradient';

const Gradient: React.FC<Props> = ({ children, className }) => (
  <Container className={className}>
    <div className="background">
      <div className="gradient" />
      <img src="/images/background-sand.jpg" alt="" />
    </div>
    {children}
  </Container>
);

export default Gradient;
