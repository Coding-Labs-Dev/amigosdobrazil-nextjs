import styled from 'styled-components';

import { Props } from './Banner';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 640px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div<Props>`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${props => props.position || 'center'};
  background-image: ${props => `url(${props.background})`};
  z-index: -1;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
