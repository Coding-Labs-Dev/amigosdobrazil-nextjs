import React from 'react';

import { Props } from './TOS';
import { Wrapper } from './styles';
import mustache from 'mustache';

const TOS: React.FC<Props> = ({ template, data }) => (
  <Wrapper className="p-4">
    <h2 className="text-dark">
      CONTRATO PARTICULAR DE PRESTAÇÃO DE SERVIÇOS DE AGENCIAMENTO DE VIAGEM
    </h2>
    <div
      dangerouslySetInnerHTML={{
        __html: mustache.render(template, data),
      }}
    />
  </Wrapper>
);

export default TOS;
