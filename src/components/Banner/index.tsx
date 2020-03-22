import React from 'react';

import { Container, Background, Content } from './styles';

import { Props } from './Banner';

const Banner: React.FC<Props> = ({ background, children }) => {
  return (
    <Container>
      <Background background={background} />
      <Content>{children}</Content>
    </Container>
  );
};

export default Banner;
