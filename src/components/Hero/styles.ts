import styled from 'styled-components';
import { Card } from 'reactstrap';

import { Hero } from '~/types/models';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 640px;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export const Banner = styled(Card)<Hero>`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${props => props.position};
  background-image: ${props => `url(${props.background})`};
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
    opacity: ${props => props.opacity};
  }
`;

Banner.defaultProps = {
  position: 'center',
};
