import styled from 'styled-components';

import { Container } from 'reactstrap';

export const Wrapper = styled(Container)`
  ul {
    list-style: none;
  }
  @media screen and (max-width: 768px) {
    .first-col {
      order: 3;
    }
  }
`;
