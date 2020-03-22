import React from 'react';

import { Container } from './styles';

const Gradient: React.FC = ({ children }) => (
  <Container>
    <div className="background">
      <div className="gradient" />
      <img src="images/background-sand.jpg" alt="" />
    </div>
    {children}
  </Container>
);

export default Gradient;
