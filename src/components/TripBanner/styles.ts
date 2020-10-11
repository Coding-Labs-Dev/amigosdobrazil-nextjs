import styled from 'styled-components';
import { Card } from 'reactstrap';

import { BackgroundData } from './Banner';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 640px;
  display: flex;
  justify-content: center;
  align-items: stretch;

  @supports (-webkit-text-stroke: 1px white) {
    h1 {
      -webkit-text-stroke: 1px white;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export const Banner = styled(Card)<BackgroundData>`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${props => props.background.position};
  background-image: ${props => `url(${props.background.url})`};
  border: none !important;
  border-radius: 0 !important;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.colors.gray900};
    opacity: ${props => Number(props.background.opacity) || 0.5};
  }
`;
