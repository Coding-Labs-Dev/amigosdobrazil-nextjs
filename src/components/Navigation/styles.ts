import styled from 'styled-components';
import { Navbar as NavigationBar } from 'reactstrap';

import { Props } from './Navigation';

const backgroundOpacity = (opacity: number): number => {
  if (opacity <= 0.5) return 0;
  return 1;
};

export const Navbar = styled(NavigationBar)<Props>`
  background: #fff;
  opacity: 1;
  transition: all 1s ease-in-out;
  @media screen and (min-width: 576px) {
    opacity: ${props => props.opacity};
    background: ${props =>
      `rgba(255,255,255,${backgroundOpacity(props.opacity || 1)})`};
  }
`;
