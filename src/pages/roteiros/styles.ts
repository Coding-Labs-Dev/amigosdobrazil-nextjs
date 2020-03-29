import styled from 'styled-components';
import { BannerProps } from './roteiros';

export const Wrapper = styled.div`
  .shadow-md {
    @media screen and (min-width: 576px) {
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    }
  }
`;

export const Banner = styled.div<BannerProps>`
  position: relative;
  div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      z-index: 1;
    }
    @supports (-webkit-text-stroke: 1px white) {
      h1 {
        -webkit-text-stroke: 1px white;
        -webkit-text-fill-color: transparent;
      }
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${props => props.theme.colors.gray900};
      opacity: ${props => Number(props.opacity) || 0.5};
    }
  }
`;
